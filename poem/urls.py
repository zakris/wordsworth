from . import views
from django.urls import path

urlpatterns = [
    path('', views.PoemList.as_view(), name='home'),
  #  path('<slug:slug>/', views.PoemDetail.as_view(), name='poem_detail'),
    path('<slug:slug>/', views.post_detail, name='poem_detail')
]