window.onload = function () {
    
    registerVolunteer();
    var counter = 1;
    $("#addrow").on("click", function () {
        document.getElementById("stop_it").style.display = "none";
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td class="col-sm-5 text-center"><input type="text"  required class="form-control" name="name' + counter + '"/></td>';
        cols += '<td class="col-sm-5 text-center"><input type="text" required class="form-control" name="address' + counter + '"/></td>';
        cols += '<td class="col-sm-2 text-center"><input type="button" class="ibtnDel btn btn-md btn-danger" id="delete" value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });

    $("table.order-list").on("click", ".ibtnDel", function (event) {
        if (counter == 0) {
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
    document.getElementById("bankForm").style.display = "none";
    if (document.getElementById("volunteerForm").style.display == "block") {
        document.getElementById("volunteerForm").style.display = "none";
        $("#vbtn").removeClass("btnSelected");
        document.getElementById("footer").style.display = "none";
    } else {
        if (document.getElementById("foodForm").style.display == "block") {
            document.getElementById("foodForm").style.display = "none";
            $("#obtn").removeClass("btnSelected");
        }
        if (document.getElementById("bankForm").style.display == "block") {
            document.getElementById("bankForm").style.display = "none";
            $("#fbtn").removeClass("btnSelected");
        }
        document.getElementById("volunteerForm").style.display = "block";
        $("#vbtn").addClass("btnSelected");
        document.getElementById("footer").style.display = "block";
    }
}

function registerOutlet() //1
{
    document.getElementById("volunteerForm").style.display = "none";
    document.getElementById("bankForm").style.display = "none";
    if (document.getElementById("foodForm").style.display == "block") {
        document.getElementById("foodForm").style.display = "none";
        $("#obtn").removeClass("btnSelected");
        document.getElementById("footer").style.display = "none";
    } else {
        if (document.getElementById("volunteerForm").style.display == "block") {
            document.getElementById("volunteerForm").style.display = "none";
            $("#vbtn").removeClass("btnSelected");
        }
        if (document.getElementById("bankForm").style.display == "block") {
            document.getElementById("bankForm").style.display = "none";
            $("#fbtn").removeClass("btnSelected");
        }
        document.getElementById("foodForm").style.display = "block";
        $("#obtn").addClass("btnSelected");
        document.getElementById("footer").style.display = "block";
    }
}

function registerFoodBank() {
    document.getElementById("foodForm").style.display = "none";
    document.getElementById("volunteerForm").style.display = "none";
    if (document.getElementById("bankForm").style.display == "block") {
        document.getElementById("bankForm").style.display = "none";
        $("#fbtn").removeClass("btnSelected");
        document.getElementById("footer").style.display = "none";
    } else {
        if (document.getElementById("volunteerForm").style.display == "block") {
            document.getElementById("volunteerForm").style.display = "none";
            $("#vbtn").removeClass("btnSelected");
        }
        if (document.getElementById("foodForm").style.display == "block") {
            document.getElementById("foodForm").style.display = "none";
            $("#obtn").removeClass("btnSelected");
        }
        document.getElementById("bankForm").style.display = "block";
        $("#fbtn").addClass("btnSelected");
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
    let gg = '<strong>Error!</strong> ';
    console.log("In function");
    console.log(document.getElementById(firstLetter + "Password").value);
    if (document.getElementById(firstLetter + "Password").value != document.getElementById(firstLetter + "PasswordConfirm").value) {
        document.getElementById(firstLetter + "Error").style.display = "block";
        msg += "Passwords do not match. ";
        flag = false;
    }

    let temp = document.getElementById(firstLetter + "Password").value;

    if (temp.length < 8) {
        document.getElementById(firstLetter + "Error").style.display = "block";
        msg += "Password must be atleast 8 characters. ";
        flag = false;
    }
    if (!(temp.match(/[a-z]/) && temp.match(/[A-Z]/) && temp.match(/[0-9]/))) {
        document.getElementById(firstLetter + "Error").style.display = "block";
        msg += "Passwords must include lower-case letter, upper-case letter, and number.";

        flag = false;
    }

    if (!flag) {
        $("#" + firstLetter + "passError").html(gg + msg);
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

