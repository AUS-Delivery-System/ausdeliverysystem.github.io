window.onload = function () 
{
    document.getElementById("vError").style.display = "none";
    document.getElementById("volunteerForm").style.display = "none";
    document.getElementById("foodForm").style.display = "none";
    document.getElementById("bankForm").style.display = "none";
    document.getElementById("navbarToggler").style.display = "none";
    document.getElementById("stop_it").style.display = "none";
    var counter = 0;
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
        if(counter == 0)
        {
            document.getElementById("stop_it").style.display = "block";
        }
        else{
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

function vValidate()
{
    var msg;
   let x =  (document.getElementById("vPasswordConfirm").val()==document.getElementById("vPassword").val());
   if (!x)
   { alert();
    document.getElementById("vPasswordConfirm").css("border", "red solid 1px");
    
   }
}
function validateInfo()
{
    var flag = true;
    var msg = "";
    //clear
    
    //Either mindfuck with append and remove orrrr just tooltip

    let gg = '<strong>Error!</strong> ';
    console.log("In function");
    console.log(document.getElementById("vPassword").value);
    if(document.getElementById("vPassword").value != document.getElementById("vPasswordConfirm").value){
        document.getElementById("vError").style.display = "block";
        msg += "Passwords do not match. ";
        flag = false;
    }

    let temp = document.getElementById("vPassword").value;

    if(temp.length<8){
        document.getElementById("vError").style.display = "block";
        msg += "Password must be atleast 8 characters. ";        
        flag = false;
    }
    if(!(temp.match(/[a-z]/) && temp.match(/[A-Z]/) && temp.match(/[0-9]/))){
        document.getElementById("vError").style.display = "block";
        msg += "Passwords must include lower-case letter, upper-case letter, and number.";        
        
        flag = false;
    }

    if(!flag){
        alert("W");
        $("#passError").html(gg + msg);
    }
    else {
        document.getElementById("volunteerForm").submit();
    }
}
function validateAll()
{
    vValidate();
}