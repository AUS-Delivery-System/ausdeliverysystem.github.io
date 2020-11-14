from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
#User.objects.only('role').filter(email__iexact='G@gmail.com',password='1234567890zZ')
#__iexact to ignore case sensative, = for full match

#User.objects.filter(email__iexact='G@gmail.com',password='1234567890zZ').first().role
#gets role of user with same email, case insensative, and perfect matching password

# Create your models here.
class User(models.Model):
    email = models.CharField(max_length = 64,primary_key = True)
    password = models.CharField(max_length = 64)
    role = models.CharField(max_length = 9)
    isValid = models.CharField(max_length = 7, null=True)

class Outlet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, primary_key = True)
    name = models.CharField(max_length = 50)
    phonenumber =  models.CharField(max_length = 10)

class Branches(models.Model):
    branchID = models.AutoField(primary_key=True)
    outlet = models.ForeignKey(Outlet, on_delete=models.CASCADE)
    name = models.CharField(max_length = 50)
    address = models.TextField()

class Bank(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, primary_key = True)
    name = models.CharField(max_length = 50)
    address = models.TextField()
    phonenumber =  models.CharField(max_length = 10)
    emirates = models.CharField(max_length = 14)
    capacity = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(100),
            MinValueValidator(0)
        ]
    )

class Inventory(models.Model):
    branch = models.ForeignKey(Branches,on_delete=models.CASCADE)
    name = models.CharField(max_length = 25)
    amount = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )

class Tasks(models.Model):
    taskID = models.AutoField(primary_key=True)
    fromBranch = models.ForeignKey(Branches, on_delete=models.CASCADE)
    toBank = models.ForeignKey(Bank, on_delete=models.CASCADE)
    status = models.CharField(max_length = 10)

class Volunteer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, primary_key = True)
    fname = models.CharField(max_length = 25)
    lname =  models.CharField(max_length = 25)
    phonenumber =  models.CharField(max_length = 10)
    gender = models.CharField(max_length = 6)
    emirates = models.CharField(max_length = 14)
    dob = models.CharField(max_length = 10)
    currenttask = models.ForeignKey(Tasks,on_delete=models.CASCADE,null=True)