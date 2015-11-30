window.onload = function() {
	get_days_of_month();
}

function get_days_of_month(){
	
	var getMonth = document.getElementById("month_of_birth");
	var month = getMonth.options[getMonth.selectedIndex].value;
	
	var getDay = document.getElementById("day_of_birth");
	var day = getDay.options[getDay.selectedIndex].value; 

	var i;
	var result = "<option value='placeholder'>dd</option>";
	
	switch (month){
		case "01":
		case "03":
		case "05":
		case "07":
		case "08":
		case "10":
		case "12":
			i = 31;
			break;
		case "04":
		case "06":
		case "09":
		case "11":
			i = 30;
			break;
		case "02":
			i = 28;
			break;
		default:
			i = 31;
	}
	
	
			
		for(var j=1; j<=i; j++){
			if (j<10){
				result += "<option value='0" + j + "'>" + "0" + j + "</option>";
			}
			else{
				result += "<option value='" + j + "'>" + j + "</option>";
			}	
		}
		document.getElementById("day_of_birth").innerHTML = result;
		
		if(day <= i || day == "dd"){
			getDay.value = day;
		}
}

