from django.http import JsonResponse

from rest_framework.decorators import api_view,authentication_classes,permission_classes

from .forms import PropertyForm
from .models import Property,Reservation
from .serializers import PropertiesListSerializer,PropertiesDetailSerializer,ReservationsListSerializer
from useraccount.models import User
from rest_framework_simplejwt.tokens import AccessToken

#get all properties api
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    #
    #Auth
    try :
        token = request.META['HTTP_AUTHORIZATION'].split('Bearer ')[1]
        token = AccessToken(token)
        user_id = token.payload['user_id']
        user = User.objects.get(pk=user_id)
    except Exception as e:
        user = None

    #FILTERS
    #
    favorites = []
    properties = Property.objects.all()
    landhost_id = request.GET.get('landhostId','')
    is_favorites = request.GET.get('is_favorites','')
    
    #search filters
    country = request.GET.get('country','')
    category = request.GET.get('category','')
    checkin_date = request.GET.get('checkin','')
    checkout_date = request.GET.get('checkout','')
    bedrooms = request.GET.get('bedrooms','')
    bathrooms = request.GET.get('bathrooms','')
    guests = request.GET.get('guests','')
    print(country)
    #filtering properties
    if landhost_id :
        properties = properties.filter(landhost_id=landhost_id)
    
    if is_favorites:
        properties = properties.filter(favorited__in=[user])
    #filtering by check in and out date
    if checkin_date and checkout_date:
        exact_matches = Reservation.objects.filter(start_date=checkin_date) | Reservation.objects.filter(end_date=checkout_date)
        overlap_matches = Reservation.objects.filter(start_date__lte=checkout_date,end_date__gte=checkin_date)
        all_matches = []
        for reservation in exact_matches | overlap_matches :
                all_matches.append(reservation.property.id)
        properties = properties.exclude(id__in=all_matches)        
    #filerting by guests
    if guests:
        properties = properties.filter(guests__gte=guests)
    #filtering by bedrooms
    if bedrooms:
        properties = properties.filter(bedrooms__gte=bedrooms )    
    #filtering by bathrooms
    if bathrooms:
        properties = properties.filter(bathrooms__gte=bathrooms)
    #filtering by country
    if country:
        properties = properties.filter(country=country)
    #filtering by category
    if category:
        properties = properties.filter(category=category)            
    #favorites properties
    if user:
        for property in properties:
            if user in property.favorited.all():
               favorites.append(property.id)
    ##
    serializer = PropertiesListSerializer(properties,many=True)
    return JsonResponse({
        'data':serializer.data,
        'favorites':favorites
    })
#get property details api
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_detail(request,pk):
    property = Property.objects.get(pk=pk)
    serializer = PropertiesDetailSerializer(property,many=False)
    return JsonResponse({
        'data':serializer.data
    })
#get all properties api
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def property_reservations(request,pk):
    property = Property.objects.get(pk=pk)
    reservations= property.reservations.all()
    
    serializer = ReservationsListSerializer(reservations,many=True)
    
    return JsonResponse(serializer.data,safe=False)


#create a property api
@api_view(['POST', 'FILES'])
def create_property(request):
    form = PropertyForm(request.POST, request.FILES)

    if form.is_valid():
        property = form.save(commit=False)
        property.landhost = request.user
        property.save()

        return JsonResponse({'success': True})
    else:
        print('error', form.errors, form.non_field_errors)
        return JsonResponse({'errors': form.errors.as_json()}, status=400)

#booking a property api
@api_view(['POST'])
def book_property(request,pk):
    try:
        start_date = request.POST.get('start_date','')
        end_date = request.POST.get('end_date','')
        number_of_nights = request.POST.get('number_of_nights','')
        total_price = request.POST.get('total_price','')
        guests = request.POST.get('guests','')
        
        property = Property.objects.get(pk=pk)
        Reservation.objects.create(
            property=property,
            start_date=start_date,
            end_date=end_date,
            number_of_nights=number_of_nights,
            total_price=total_price,
            guests=guests,
            created_by = request.user
        )
        return JsonResponse({'success':True})
    except Exception as e:
        print('error',e)
        
        return JsonResponse({'success':False})



#add favorite property
@api_view(['POST'])
def toggle_favorite(request,pk):
    property = Property.objects.get(pk=pk)
    #REMOVE FROM Favorite
    if  request.user in property.favorited.all():
          property.favorited.remove(request.user)
          return JsonResponse({'is_favorited':False})
    #ADD TO FAVORITE
    else:
        property.favorited.add(request.user)
        return JsonResponse({'is_favorited':True})
