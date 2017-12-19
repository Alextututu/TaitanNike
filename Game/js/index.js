window.onload=function(){
	var Array=["img/demo1.png","img/demo2.png","img/demo3.png","img/demo4.png","img/demo5.png"];
	var Arr = [-8,8,-6,6,-4,4,-2,2,0];
	var num=0;
	var onOff=true;		//开关
	
	var Games={
		a:document.getElementsByTagName("a")[0],	//获得开始按钮
		imgs:document.getElementsByTagName("img")[0],			//获得图片
		times:null,
		num:0,		//变量
		Alex:0,		//变量2
		just_fraction:0,		//获得分数
		negative_fraction:0,		//失去分数
		span:document.getElementsByTagName("span"), 	//获得装分数的span
		content:document.getElementById("contents")		//获得游戏框
	};
	//点击开始按钮
	Games.a.onclick=function(){
		//按钮样式消失
		this.style.display="none";
		//调用方法并传参
		Randomwidth(Games.num);
	};
	
	//点击图片
	Games.imgs.onclick=function(){
		if(onOff){
			onOff=false;
			Games.just_fraction++;
			Games.span[0].innerText=Games.just_fraction+"分";
			Games.imgs.src="img/demo6.png";
			clearInterval(Games.times);
			timer=setTimeout(function(){
				Games.imgs.style.top="500px";
				Games.imgs.src=Array[numbers()];
				Games.imgs.style.left=positions()+"px";
				clearTimeout(timer);
				Randomwidth(0);
			},100);
		}
	};
	//随机方法
	function numbers(){
		return Math.round(Math.random()*4);
	}
	//随机起始位置
	function positions(){
		return Math.round(Math.random()*626);
	}
	// 距离 
	function Randomwidth(distance){
		onOff=true;
		//不停掉落定时器
		Games.times=setInterval(function(){
			//根据分数来变速
			if(parseInt(Games.span[0].innerText)<=10){
				distance+=0.5;
			}else if(parseInt(Games.span[0].innerText)<=20){
				distance+=1;
			}else if(parseInt(Games.span[0].innerText)<=30){
				distance+=1.5;
			}else if(parseInt(Games.span[0].innerText)<=40){
				distance+=4;
			}
			//top值
			Games.imgs.style.top=distance+"px";
			//如果top值大于的时候
			if(distance>=364){
				setTimeout(function(){
						if(parseInt(Games.span[0].innerText)<parseInt(Games.span[1].innerText)){
							alert("你手速太慢，游戏结束！");
							clearInterval(Games.times);
							onOff=false;
							Games.a.style.display="block";
							Games.span[0].innerText=Games.span[1].innerText="0分";
							Games.just_fraction=Games.negative_fraction=0;
						}
					//随机掉落起始位置
					Games.imgs.style.left=positions()+"px";
					//图片变换
					Games.imgs.src=Array[numbers()];
					Games.imgs.style.top="500px";
				},1);
				//top值重新归0
				distance=0;
				//分数
				Games.negative_fraction++;
				Games.span[1].innerText=Games.negative_fraction+"分";
				//窗口抖动
				timer = setInterval(function(){
		        	Games.content.style.top = Arr[num] + 'px';
		        		Games.content.style.left = Arr[num] + 'px';
		            num++;
		            if(num > Arr.length){
		                clearInterval(timer);
		                num = 0;
		            }
             	},30);
			}
		},4);
	}
};
