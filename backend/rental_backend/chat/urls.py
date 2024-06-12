from django.urls import path

from . import api


urlpatterns = [
    path('',api.conversation_list,name='api_conversation_list'),
    path('start/<uuid:user_id>/',api.conversations_start,name='api_conversations_start'),
    path('<uuid:pk>/',api.conversation_detail ,name='api_conversation_detail'),
    
]