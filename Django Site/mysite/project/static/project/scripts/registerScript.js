var counter = 1;
window.onload = function () {

    registerVolunteer();
    $("#addrow").on("click", function () {
        document.getElementById("stop_it").style.display = "none";
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td class="col-sm-5 text-center"><input type="text" required class="form-control" id="name' + counter + '" name="name' + counter + '"/></td>';
        cols += '<td class="col-sm-5 text-center"><input type="text" required class="form-control" id="address' + counter + '" name="address' + counter + '"/></td>';
        cols += '<td class="col-sm-2 text-center"><input type="button" class="ibtnDel btn btn-md btn-danger" id="delete" value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });

    $("table.order-list").on("click", ".ibtnDel", function (event) {
        if (counter == 1) {
            document.getElementById("stop_it").style.display = "block";
        } else {
            $(this).closest("tr").remove();
            counter--;
        }
    });

    function calculateRow(row) {
        var price = +row.find('input[name^="price"]').val();

    }

    function calculateGrandTotal() {
        var grandTotal = 0;
        $("table.order-list").find('input[name^="price"]').each(function () {
            grandTotal += +$(this).val();
        });
        $("#grandtotal").text(grandTotal.toFixed(2));
    }

}

function registerVolunteer() {
    document.getElementById("foodForm").style.display = "none";
    $("#obtn").removeClass("btnSelected");
    document.getElementById("bankForm").style.display = "none";
    $("#bbtn").removeClass("btnSelected");
    if (document.getElementById("volunteerForm").style.display == "block") {
        document.getElementById("volunteerForm").style.display = "none";
        $("#vbtn").removeClass("btnSelected");
        document.getElementById("footer").style.display = "none";
    } else {
        document.getElementById("volunteerForm").style.display = "block";
        $("#vbtn").addClass("btnSelected");
        document.getElementById("footer").style.display = "block";
    }
}

function registerOutlet() //1
{
    document.getElementById("volunteerForm").style.display = "none";
    $("#vbtn").removeClass("btnSelected");
    document.getElementById("bankForm").style.display = "none";
    $("#bbtn").removeClass("btnSelected");
    if (document.getElementById("foodForm").style.display == "block") {
        document.getElementById("foodForm").style.display = "none";
        $("#obtn").removeClass("btnSelected");
        document.getElementById("footer").style.display = "none";
    } else {
        document.getElementById("foodForm").style.display = "block";
        $("#obtn").addClass("btnSelected");
        document.getElementById("footer").style.display = "block";
    }
}

function registerFoodBank() {
    document.getElementById("foodForm").style.display = "none";
    $("#obtn").removeClass("btnSelected");
    document.getElementById("volunteerForm").style.display = "none";
    $("#vbtn").removeClass("btnSelected");
    if (document.getElementById("bankForm").style.display == "block") {
        document.getElementById("bankForm").style.display = "none";
        $("#bbtn").removeClass("btnSelected");
        document.getElementById("footer").style.display = "none";
    } else {
        document.getElementById("bankForm").style.display = "block";
        $("#bbtn").addClass("btnSelected");
        document.getElementById("footer").style.display = "block";
    }
}

function showItems() {
    if (document.getElementById("navbarToggler").style.display == "block") {
        document.getElementById("navbarToggler").style.display = "none";
    } else
        document.getElementById("navbarToggler").style.display = "block";
}

function validateInfo() {
    var flag = true;
    var msg = "";
    //clear
    var firstLetter;
    if (document.getElementById("bankForm").style.display == "block") {
        firstLetter = "b";
    } else if (document.getElementById("volunteerForm").style.display == "block") {
        firstLetter = "v";
    } else if (document.getElementById("foodForm").style.display == "block") {
        firstLetter = "o";
    }
    console.log(firstLetter);
    console.log(document.getElementById(firstLetter + "Password").value);
    if (document.getElementById(firstLetter + "Password").value != document.getElementById(firstLetter + "PasswordConfirm").value) {
        document.getElementById(firstLetter + "Error").style.display = "block";
        msg += "<strong>Error!</strong> Passwords do not match.<br>";
        flag = false;
    }


    tempMail = document.getElementById(firstLetter + "Email").value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!(tempMail.match(mailformat)) || tempMail == "") {
        msg += "<strong>Error!</strong> Invalid Email.<br>";
        flag = false;
    }
    if (document.getElementById(firstLetter + "phoneNumber").value.length != 10) {
        msg += "<strong>Error!</strong> Invalid phone number.<br>";
        flag = false;
    }
    switch (firstLetter) {
        case 'b':
            if (document.getElementById("bBusinessName").value == "") {
                msg += "<strong>Error!</strong> Business name can't be empty.<br>";
                flag = false;
            }
            if (document.getElementById("bAddress").value == "") {
                msg += "<strong>Error!</strong> Address can't be empty.<br>";
                flag = false;
            }
            //bBusinessName bAddress
            break;
        case 'o':
            if (document.getElementById("oBusinessName").value == "") {
                msg += "<strong>Error!</strong> Business name can't be empty.<br>";
                flag = false;
            }
            for (i = 0; i < counter; i++) {
                var tempName = 'name' + i;
                var tempAddress = 'address' + i;

                if (document.getElementById(tempName).value == "") {
                    msg += "<strong>Error!</strong> Branch names can't be empty.<br>";
                    flag = false;
                    i = counter;
                }
                if (document.getElementById(tempAddress).value == "") {
                    msg += "<strong>Error!</strong> Address names can't be empty.<br>";
                    flag = false;
                    i = counter;
                }
            }
            break;
        case 'v':
            if (document.getElementById("vFirstName").value == "") {
                msg += "<strong>Error!</strong> First Name can't be empty.<br>";
                flag = false;
            }
            if (document.getElementById("vLastName").value == "") {
                msg += "<strong>Error!</strong> Input your last name.<br>";
                flag = false;
            }
            // convert date format to "YYYY-MM-DD"
            var a = new Date().toJSON().slice(0, 10);
            // get date from input field, by default is "YYYY-MM-DD" format
            var b = document.getElementById('vDateOfBirth').value;

            if (a < b) {
                msg += "<strong>Error!</strong> Input a proper date of birth.<br>";
                flag = false;
            }
            break;
        default:
    }
    let temp = document.getElementById(firstLetter + "Password").value;

    if (temp.length < 8) {
        msg += "<strong>Error!</strong> Password must be atleast 8 characters.<br>";
        flag = false;
    }
    if (!(temp.match(/[a-z]/) && temp.match(/[A-Z]/) && temp.match(/[0-9]/))) {
        msg += "<strong>Error!</strong> Passwords must include lower-case letter, upper-case letter, and number.<br>";

        flag = false;
    }
    if (!(document.getElementById(firstLetter + "GridCheck").checked)) {
        msg += "<strong>Error!</strong> Agree to the terms of service.<br>";
        flag = false;
    }

    if (!flag) {
        $("#" + firstLetter + "passError").html(msg);
        document.getElementById(firstLetter + "Error").style.display = "block";
    } else {
        if (document.getElementById("foodForm").style.display == "block") {

            document.getElementById("foodForm").submit();
        } else if (document.getElementById("volunteerForm").style.display == "block") {

            document.getElementById("volunteerForm").submit();
        } else if (document.getElementById("bankForm").style.display == "block") {

            document.getElementById("bankForm").submit();
        }
    }
}