function check(e){
	//Grab the two email fields and check if they hold the same value.
	//If so, alert("They match")
	//Else, alert("mismatch")
	if (e.e1.value == e.e2.value) {
		alert ("They Match");
		return true;
	}
	else {
		alert("No Match");
		return false;
	}
}


function check2(v1, v2){
	//Grab the two email fields and check if they hold the same value.
	//If so, don't do anything.
	//Else, alert("mismatch")
	if (v1.value == v2.value) {
		alert("They Match!");
		return true;
	}
	else {
		alert("No Match");
		return false;
	}
}
