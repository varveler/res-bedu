from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny


# class ThriveGold(APIView):
#     #authentication_classes = (authentication.SessionAuthentication, authentication.BasicAuthentication)
#     #permission_classes = (permissions.IsAuthenticated,)
#
#     def post(self, request):
#         print('Working')
#         return Response('Holaaaa')



#@permission_classes((AllowAny, ))
@api_view(['POST'])
def say_hello(request):
    if request.method == 'POST':
        print('yei')
        print('yei')
        headers = {}
        headers["Access-Control-Allow-Origin"] = "*"

        return Response('hola', headers=headers)
