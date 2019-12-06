function time(){
	var d=new Date().getSeconds();
	var s=document.getElementById("xq");
	if(d<10) d='0'+d;
	var i=/\d$/.exec(d);
	if(i==0){
		s.style.color="#f5082f";
	}else if(i==1){
		s.style.color="#f57708";
	}else if(i==2){
		s.style.color="#f9f602";
	}else if(i==3){
		s.style.color="02f902";
	}else if(i==4){
		s.style.color="#1302f9";
	}else if(i==5){
		s.style.color="#685bf3";
	}else if(i==6){
		s.style.color="#c90aeb";
	}else if(i==7){
		s.style.color="#b31701";
	}else if(i==8){
		s.style.color="#ffff02";
	}else{
		s.style.color="#db5578";
	}
}
setInterval(time,500);
