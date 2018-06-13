function Exit(){
	window.close();
}
function Change(x){
	location.replace(x)
}
function Test(){
	alert("Working")
}
function Add(name, obj){
	var arr = JSON.parse(window.name);
	arr[name] = obj;
	window.name = JSON.stringify(arr);
}
function Get(name){
	var arr = JSON.parse(window.name);
	return arr[name];
}