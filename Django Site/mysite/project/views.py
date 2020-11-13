from django.shortcuts import render
from django.http import HttpResponse
import time
from project.models import User, Volunteer, Bank, Outlet, Branches
from django.contrib.auth.hashers import check_password, make_password

# Create your views here.
def home(request):
    return render(request, 'project/home.html')

def registration(request):
    print("test")
    if (request.method == "POST"):
        print("test")
        if "vFirstName" in request.POST:
            u = User(email=request.POST['vEmail'],password=request.POST['vPassword'],role="Volunteer")
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
            return render(request, 'project/login.html')

        elif "oBusinessName" in request.POST:
            u = User(email=request.POST['oEmail'],password=request.POST['oPassword'],role="Outlet")
            u.save()
            o = Outlet(user=u, name=request.POST['oBusinessName'], phonenumber=request.POST['oPhoneNumber'])
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
            print(request.POST['oPhoneNumber'])
            print(request.POST['oPassword'])
            print(request.POST['oPasswordConfirm'])
            print(request.POST['name0'])
            print(request.POST['address0'])
            return render(request, 'project/login.html')
        elif "bBusinessName" in request.POST:
            u = User(email=request.POST['bEmail'],password=make_password(request.POST['bPassword'], salt=None, hasher='default'),role="Bank")
            u.save()
            b = Bank(user=u,name=request.POST['bBusinessName'],address=request.POST['bAddress'],phonenumber=request.POST['bPhoneNumber'],emirates=request.POST['bEmirates'],capacity=0)
            b.save()
            print('Bank')
            print(request.POST['bBusinessName'])
            print(request.POST['bEmail'])
            print(request.POST['bPhoneNumber'])
            print(request.POST['bPassword'])
            print(request.POST['bPasswordConfirm'])
            print(request.POST['bAddress'])
            print(request.POST['bEmirates'])
            return render(request, 'project/login.html')
        else:
            print('??????')
        #return render(request, 'project/login.html')
    else:
        return render(request, 'project/registration.html')

def login(request):
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
        exists = User.objects.filter(email=username, password=passWord)
        if exists:
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
        return render(request, 'project/home.html')
    else:
        return render(request, 'project/login.html')


def bank(request):
    return render(request, 'project/bank.html')


def volunteer(request):
    return render(request, 'project/volunteer.html')


def outlet(request):
    return render(request, 'project/outlet.html')


def about(request):
    return render(request, 'project/about.html')
