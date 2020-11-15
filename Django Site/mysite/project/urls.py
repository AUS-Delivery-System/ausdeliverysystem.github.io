from django.urls import path
from . import views

urlpatterns = [
    path('',views.home, name='site-home'),
    path('login/',views.login, name='site-login'),
    path('registration/',views.registration, name='site-registration'),
    path('bank/',views.bank, name='site-bank'),
    path('volunteer/',views.volunteer, name='site-volunteer'),
    path('outlet/',views.outlet, name='site-outlet'),
    path('logout/',views.logout, name='site-logout'),
    path('delete/',views.delete, name='site-delete'),
]