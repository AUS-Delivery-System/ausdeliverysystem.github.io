window.onload = function () {
	document.getElementById("contactUs").style.display = "none";
	document.getElementById("bankForm").style.display = "none";
	document.getElementById("ongoingTask").style.display = "block";
	document.getElementById("changePass").style.display = "none";
	
}
function showTasks() {
	document.getElementById("viewTasks").style.display = "block";
	document.getElementById("ongoingTask").style.display = "block";
	document.getElementById("contactUs").style.display = "none";
	document.getElementById("bankForm").style.display = "none";
	$("#tasks").style.active="true";
	$("#support").style.active="false";
	$("#settings").style.active="false";
	
}
function showSettings() {
	document.getElementById("viewTasks").style.display = "none";
	document.getElementById("ongoingTask").style.display = "none";
	document.getElementById("contactUs").style.display = "none";
	document.getElementById("bankForm").style.display = "block";
	$("#tasks").style.active="false";
	$("#support").style.active="false";
	$("#settings").style.active="true";
}
function showSupport() {
	document.getElementById("viewTasks").style.display = "none";
	document.getElementById("ongoingTask").style.display = "none";
	document.getElementById("contactUs").style.display = "block";
	document.getElementById("bankForm").style.display = "none";
	$("#tasks").style.active="false";
	$("#support").style.active="true";
	$("#settings").style.active="false";
}
function passwordButton() {
	if(document.getElementById("changePass").style.display == "none")
	{
		document.getElementById("changePass").style.display = "block";
	}
	else{
		document.getElementById("changePass").style.display = "none";
	}
}
$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});
function moreInfo() {
    alert("Outlet Name: Dunkin Donuts\nOutlet Location: Dubai Mall, Dubai, UAE\nClosing Time: 10:00PM");
}

function claimTask() {
    var conf = confirm("Are you sure you want to claim this task?");
    
    if (conf == true) {
		document.getElementById("viewTasks").style.display = "none";
		document.getElementById("ongoingTask").style.display = "block";
        alert("Task claimed!");
    }
}
