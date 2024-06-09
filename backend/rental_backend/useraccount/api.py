from .serializers import UserDetailSerializer
from .models import User
from rest_framework.decorators import api_view,authentication_classes,permission_classes
from django.http import JsonResponse


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def landhost_details(request,pk):
    user = User.objects.get(pk=pk)
    serializer = UserDetailSerializer(user,many=False)
    
    return JsonResponse(serializer.data,safe=False)
    