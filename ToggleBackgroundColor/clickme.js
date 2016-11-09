var button = document.querySelector("button");
var isPurple = false;
//setup click listener
button.addEventListener("click", function(){
	//start with a Negative-Positive statement. 
	//Since we begin with isPurple = false, first document shows white.
	//Move to the else, and on click makes it purple and isPurple=true.
	//if white --> make purple else make white
	if(isPurple) {
		//at click it turns document to white	
		document.body.style.background="white";
		isPurple = false;	
	} else {
		//at click it turns document to purple
		document.body.style.background="purple";
		isPurple = true;
	}
});