from django.shortcuts import redirect, render
from django.http import HttpResponse
import time
from .models import User, Volunteer, Bank, Outlet, Branches
from django.contrib.auth.hashers import check_password, make_password
from django.conf.urls import url

# Create your views here.


def home(request):
    #render home page
    return render(request, 'project/home.html')


def registration(request):
    if ('username' in request.session):
        #if user is already signed in, redirect 
        tempRole = User.objects.filter(email=request.session['username']).first().role
        if(tempRole == 'Volunteer'):
            return redirect('../volunteer/')
        elif(tempRole == 'Outlet'):
            return redirect('../outlet/')
        elif(tempRole == 'Bank'):
            return redirect('../bank/')
    if (request.method == "POST"):
        print("test 2")
        if "vFirstName" in request.POST:
            if (User.objects.filter(email__iexact=request.POST['vEmail'].lower()).exists()):
                #email is taken
                return render(request, 'project/registration.html')
            else:
                # create user
                u = User(email=request.POST['vEmail'].lower(
                ), password=request.POST['vPassword'], role="Volunteer")
                u.save()
                v = Volunteer(user=u, fname=request.POST['vFirstName'], lname=request.POST['vLastName'], phonenumber=request.POST['vphoneNumber'],
                              gender=request.POST['vGender'], emirates=request.POST['vEmirates'], dob=request.POST['vDateOfBirth'], currenttask=None)
                v.save()
        elif "oBusinessName" in request.POST:
            if (User.objects.filter(email__iexact=request.POST['oEmail'].lower()).exists()):
                #email is taken
                return render(request, 'project/registration.html')
            else:
                # create user and volunteer
                u = User(email=request.POST['oEmail'].lower(
                ), password=request.POST['oPassword'], role="Outlet")
                u.save()
                o = Outlet(
                    user=u, name=request.POST['oBusinessName'], phonenumber=request.POST['ophoneNumber'])
                o.save()
                counter = 0
                while (True):
                    # adds branches
                    if "name"+str(counter) in request.POST:
                        b = Branches(outlet=o, name=request.POST['name'+str(
                            counter)], address=request.POST['address'+str(counter)])
                        b.save()
                        counter += 1
                    else:
                        break
        elif "bBusinessName" in request.POST:
            if (User.objects.filter(email__iexact=request.POST['bEmail'].lower()).exists()):
                #email is taken
                return render(request, 'project/registration.html')
            else:
                # create user and bank
                u = User(email=request.POST['bEmail'].lower(
                ), password=request.POST['bPassword'], role="Bank")
                u.save()
                b = Bank(user=u, name=request.POST['bBusinessName'], address=request.POST['bAddress'],
                         phonenumber=request.POST['bphoneNumber'], emirates=request.POST['bEmirates'], capacity=0)
                b.save()
                print('Bank')
        else:
            print('Error occured???')
        return redirect('../login/')
    else:
        return render(request, 'project/registration.html')


def login(request):
    if ('username' in request.session):
        #if user is already signed in, redirect 
        tempRole = User.objects.filter(email=request.session['username']).first().role
        if(tempRole == 'Volunteer'):
            return redirect('../volunteer/')
        elif(tempRole == 'Outlet'):
            return redirect('../outlet/')
        elif(tempRole == 'Bank'):
            return redirect('../bank/')
    if (request.method == "POST"):
        username = request.POST['username']
        passWord = request.POST['password']
        exists = User.objects.filter(email=username, password=passWord).first()
        if exists:
            #login is valid
            print("2")
            tempRole = exists.role
            request.session['username'] = username
            if(tempRole == 'Volunteer'):
                request.session['name'] = Volunteer.objects.filter(user_id=request.session['username']).first().fname
                return redirect('../volunteer/')
            elif(tempRole == 'Outlet'):
                request.session['name'] = Outlet.objects.filter(user_id=request.session['username']).first().name
                return redirect('../outlet/')
            elif(tempRole == 'Bank'):
                request.session['name'] = Bank.objects.filter(user_id=request.session['username']).first().name
                return redirect('../bank/')
        else:
            #login is invalid
            request.session['username'] = None
            return redirect('../login/')
        return redirect('../')
    else:
        return render(request, 'project/login.html')


def bank(request):
    if ('username' in request.session):
        tempRole = User.objects.filter(email=request.session['username']).first().role
        if(tempRole == 'Bank'):
            return render(request, 'project/bank.html')
    return redirect('../login/')


def volunteer(request):
    if (request.method == "POST"):
        print("posting")
        print("posting")
        print("posting")
        print("posting")
        print("posting")
        print("posting")
        print("posting")
        print("posting")
        print("posting")
        print("posting")
        print("posting")
        print("posting")
        print("posting")
        print("posting")
        print("posting")
        if "deleteForm" in request.POST:
            print("redirecting")
            print("redirecting")
            print("redirecting")
            print("redirecting")
            print("redirecting")
            print("redirecting")
            print("redirecting")
            print("redirecting")
            print("redirecting")
            print("redirecting")
            print("redirecting")
            print("redirecting")
            print("redirecting")
            return redirect('../delete/')
    if ('username' in request.session):
        tempRole = User.objects.filter(email=request.session['username']).first().role
        if(tempRole == 'Volunteer'):
            return render(request, 'project/volunteer.html')
    return redirect('../login/')


def outlet(request):
    if ('username' in request.session):
        tempRole = User.objects.filter(email=request.session['username']).first().role
        if(tempRole == 'Outlet'):
            return render(request, 'project/outlet.html')
    return redirect('../login/')


def logout(request):
    request.session.flush()
    return redirect('../')

def delete(request):
    User.objects.filter(email=request.session['username']).first().delete()
    request.session.flush()
    return redirect('../')
 