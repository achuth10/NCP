function format(command) {
	document.execCommand(command, false);
}

document.getElementById("publishBtn").addEventListener("click",function(){
var headline = document.getElementById("fname").value;
if (!headline){
	alert("Please enter a headline");
}

var body = document.getElementById("editor").textContent;
if (!body){
	alert("Please enter the body of the article");
}
});