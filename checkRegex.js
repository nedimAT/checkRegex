var regex = /^([A-Z]*)\w+-([1-9]*)[^-]$/;
var branchnameField = document.getElementById('branch-name');
branchnameField.addEventListener('keyup', function() {checkRegex();});
checkRegex();

function checkRegex(){
	if(regex.test(branchnameField.value)){
		branchnameField.classList.remove("regexDoesNotMatch");
		branchnameField.classList.add("regexDoesMatch");
	}else{
		branchnameField.classList.remove("regexDoesMatch");
		branchnameField.classList.add("regexDoesNotMatch");
	}
}