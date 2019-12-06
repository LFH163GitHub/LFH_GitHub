window.onload=function(){
	setInterval(changecolor,1000);
}
var a=document.getElementsByClassName("mydiv");
a[1].style.fontSize='22px';
a[1].style.paddingLeft='22px';
a[2].style.fontSize='22px';
function changecolor(){
	var b=Math.floor(Math.random()*255);
	var c=Math.floor(Math.random()*255);
	var d=Math.floor(Math.random()*255);
	a[0].style.color='rgb('+b+','+c+','+d+')';
	a[1].style.color='rgb('+b+','+d+','+c+')';

	a[2].style.color='rgb('+c+','+d+','+b+')';
}
