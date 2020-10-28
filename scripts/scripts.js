window.onload = function () 
{
    document.getElementById("volunteerForm").style.display = "none";
    document.getElementById("foodForm").style.display = "none";
    document.getElementById("bankForm").style.display = "none";
    document.getElementById("navbarToggler").style.display = "none";
}
function registerVolunteer()
{
    if(document.getElementById("volunteerForm").style.display == "block")
    {
        document.getElementById("volunteerForm").style.display = "none";
    }
    else
    {
        if(document.getElementById("foodForm").style.display == "block")
        {
            document.getElementById("foodForm").style.display = "none";
        }
        if(document.getElementById("bankForm").style.display == "block")
        {
            document.getElementById("bankForm").style.display = "none";
        }
        document.getElementById("volunteerForm").style.display = "block";
    }
}

function registerOutlet()//1
{
    if(document.getElementById("foodForm").style.display == "block")
    {
        document.getElementById("foodForm").style.display = "none";
    }
    else
    {
        if(document.getElementById("volunteerForm").style.display == "block")
        {
            document.getElementById("volunteerForm").style.display = "none";
        }
        if(document.getElementById("bankForm").style.display == "block")
        {
            document.getElementById("bankForm").style.display = "none";
        }
        document.getElementById("foodForm").style.display = "block";
    }
}

function registerFoodBank()
{
    if(document.getElementById("bankForm").style.display == "block")
    {
        document.getElementById("bankForm").style.display = "none";
    }
    else
    {
        if(document.getElementById("volunteerForm").style.display == "block")
        {
            document.getElementById("volunteerForm").style.display = "none";
        }
        if(document.getElementById("foodForm").style.display == "block")
        {
            document.getElementById("foodForm").style.display = "none";
        }
        document.getElementById("bankForm").style.display = "block";
    }
}

function showItems()
{
    if(document.getElementById("navbarToggler").style.display == "block")
    {
        document.getElementById("navbarToggler").style.display = "none";
    }
    else
        document.getElementById("navbarToggler").style.display = "block";
}