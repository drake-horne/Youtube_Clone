from django.urls import path
from . import views
urlpatterns = [
    path('<int:pk>/', views.user_comments),  # Get by ID, and Update (PUT)
    path('', views.get_all_comments), # Get all
    path('ADD', views.addRecord), # Add/POST a record
]