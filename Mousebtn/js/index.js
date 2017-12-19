/*获取各个颜色按钮ID*/
var Red=document.getElementById("red");
var Blue=document.getElementById("blue");
var Pink=document.getElementById("pink");
/*获取各不同宽度的ID*/
var Width_200=document.getElementById("width_200");
var Width_300=document.getElementById("width_300");
var Width_400=document.getElementById("width_400");
/*获取各不同高度的ID*/
var Height_200=document.getElementById("height_200");
var Height_300=document.getElementById("height_300");
var Height_400=document.getElementById("height_400");
/*获取点击设置按钮的ID*/
var  Set_up=document.getElementById("Set");
/*获取点击确定和取消按钮*/
var  Ok=document.getElementById("ok");
var  Esc=document.getElementById("esc");
/*获取蒙版ID*/
var  Mask=document.getElementById("mask");
/*获取弹框class*/
var  Bomb=document.getElementById("bomb_Box");
/*获取圆形和方形按钮ID*/
var Circular=document.getElementById("circular");
var Square=document.getElementById("square");

/*获取负责变化的divID*/
var Big=document.getElementById("big");


window.onload=function(){
//	var you=document.getElementById("Set");
//	console.dir(you.offsetWidth);
	//当点击设置按钮的时候弹出蒙版和弹框
	Set_up.onclick=function(){
		Mask.style.display="block";
		Bomb.style.cssText="transition:1s;transform: translateY(1020px);";
	};

//点击红色按钮的时候
	Red.onclick=function(){
		Big.style.background="red";
	};
	//点击蓝色按钮的时候
	Blue.onclick=function(){
		Big.style.background="blue";
	};
	//点击粉色按钮的时候
	Pink.onclick=function(){
		Big.style.background="pink";
	};
	
	//点击宽度200的时候
	Width_200.onclick=function(){
		Big.style.width="200px";
	};
	//点击宽度300的时候
	Width_300.onclick=function(){
		Big.style.width="300px";
	};
	//点击宽度400的时候
	Width_400.onclick=function(){
		Big.style.width="400px";
	};
	
	//点击高度200的时候
	Height_200.onclick=function(){
		Big.style.height="200px";
	};
	//点击高度300的时候
	Height_300.onclick=function(){
		Big.style.height="300px";
	};
	//点击高度400的时候
	Height_400.onclick=function(){
		Big.style.height="400px";
	};
	
	//点击圆形按钮的时候
	Circular.onclick=function(){
		Big.style.borderRadius="50%";
	}
	//点击方形按钮的时候
	Square.onclick=function(){
		Big.style.borderRadius="0%";
	}
	
	//点击确定按钮的时候
	Ok.onclick=function(){
		Mask.style.display="none";
		Bomb.style.cssText="display: none;";
	};
	
	//点击取消按钮的时候
	Esc.onclick=function(){
		Mask.style.display="none";
		Bomb.style.cssText="transition:0.4s;transform: translateY(-1020px);";
		Big.style.cssText="";
	};
};
