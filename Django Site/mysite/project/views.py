from django.shortcuts import redirect, render
from django.http import HttpResponse
import time
from .models import User, Volunteer, Bank, Outlet, Branches
from django.contrib.auth.hashers import check_password, make_password
from django.conf.urls import url

# Create your views here.
def home(request):
    return render(request, 'project/home.html')

def registration(request):
    print("test 1")
    if (request.method == "POST"):
        print("test 2")
        if "vFirstName" in request.POST:
            if (User.objects.filter(email__iexact=request.POST['vEmail'].lower()).exists()):
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                return render(request, 'project/registration.html')
            else:
                u = User(email=request.POST['vEmail'].lower(),password=request.POST['vPassword'],role="Volunteer")
                u.save()
                v = Volunteer(user=u,fname = request.POST['vFirstName'],lname=request.POST['vLastName'],phonenumber=request.POST['vphoneNumber'],gender=request.POST['vGender'],emirates=request.POST['vEmirates'],dob=request.POST['vDateOfBirth'],currenttask=None)
                v.save()
                print('Volunteer')
                print(request.POST['vFirstName'])
                print(request.POST['vLastName'])
                print(request.POST['vEmail'])
                print(request.POST['vphoneNumber'])
                print(request.POST['vPassword'])
                print(request.POST['vPasswordConfirm'])
                print(request.POST['vGender'])
                print(request.POST['vEmirates'])
                print(request.POST['vDateOfBirth'])
        elif "oBusinessName" in request.POST:
            if (User.objects.filter(email__iexact=request.POST['oEmail'].lower()).exists()):
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                return render(request, 'project/registration.html')
            else:
                u = User(email=request.POST['oEmail'].lower(),password=request.POST['oPassword'],role="Outlet")
                u.save()
                o = Outlet(user=u, name=request.POST['oBusinessName'], phonenumber=request.POST['ophoneNumber'])
                o.save()
                counter = 0
                while (True):
                    if "name"+str(counter) in request.POST:
                        b = Branches(outlet=o, name=request.POST['name'+str(counter)], address=request.POST['address'+str(counter)])
                        b.save()
                        counter+=1
                    else:
                        break
                print('Outlet')
                print(request.POST['oBusinessName'])
                print(request.POST['oEmail'])
                print(request.POST['ophoneNumber'])
                print(request.POST['oPassword'])
                print(request.POST['oPasswordConfirm'])
                counter = 0
                while (True):
                    if "name"+str(counter) in request.POST:
                        print(request.POST['name'+str(counter)])
                        print(request.POST['address'+str(counter)])
                        counter+=1
                    else:
                        break
        elif "bBusinessName" in request.POST:
            if (User.objects.filter(email__iexact=request.POST['bEmail'].lower()).exists()):
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                print("NOT EMPTY SET")
                return render(request, 'project/registration.html')
            else:
                u = User(email=request.POST['bEmail'].lower(),password=request.POST['bPassword'],role="Bank")
                u.save()
                b = Bank(user=u,name=request.POST['bBusinessName'],address=request.POST['bAddress'],phonenumber=request.POST['bphoneNumber'],emirates=request.POST['bEmirates'],capacity=0)
                b.save()
                print('Bank')
                print(request.POST['bBusinessName'])
                print(request.POST['bEmail'])
                print(request.POST['bphoneNumber'])
                print(request.POST['bPassword'])
                print(request.POST['bPasswordConfirm'])
                print(request.POST['bAddress'])
                print(request.POST['bEmirates'])
        else:
            print('??????')
        return redirect('../login/')
        #return render(request, 'project/login.html')
    else:
        return render(request, 'project/registration.html')

def login(request):
    print("1")
    if (request.method == "POST"):
        username = request.POST['username']
        passWord = request.POST['password']
        print(str(username) + " " + str(passWord))
        print(str(username) + " " + str(passWord))
        print(str(username) + " " + str(passWord))
        print(str(username) + " " + str(passWord))
        print(str(username) + " " + str(passWord))
        print(str(username) + " " + str(passWord))
        print(str(username) + " " + str(passWord))
        print(str(username) + " " + str(passWord))
        print(str(username) + " " + str(passWord))
        print(str(username) + " " + str(passWord))
        print(str(username) + " " + str(passWord))
        print(str(username) + " " + str(passWord))
        print(str(username) + " " + str(passWord))
        exists = User.objects.filter(email=username, password=passWord).first()
        if exists:
            print("2")
            tempRole = exists.role
            if(tempRole == 'Volunteer'):
                return redirect('../volunteer/')
            elif(tempRole == 'Outlet'):
                return redirect('../outlet/')
            elif(tempRole == 'Bank'):
                return redirect('../bank/')
            print("VALID LOGIN")
            print("VALID LOGIN")
            print("VALID LOGIN")
            print("VALID LOGIN")
            print("VALID LOGIN")
            print("VALID LOGIN")
            print("VALID LOGIN")
            print("VALID LOGIN")
            print("VALID LOGIN")
            print("VALID LOGIN")
        else:
            print("INVALID LOGIN")
            print("INVALID LOGIN")
            print("INVALID LOGIN")
            print("INVALID LOGIN")
            print("INVALID LOGIN")
            print("INVALID LOGIN")
            print("INVALID LOGIN")
            print("INVALID LOGIN")
            print("INVALID LOGIN")
            print("INVALID LOGIN")
            return redirect('../login/')
        return redirect('../')
    else:
        return render(request, 'project/login.html')


def bank(request):
    return render(request, 'project/bank.html')


def volunteer(request):
    return render(request, 'project/volunteer.html')


def outlet(request):
    return render(request, 'project/outlet.html')
