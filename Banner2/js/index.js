window.onload=function(){
	//长图片的数组
	var Arry=["1.jpg","2.jpg","3.jpg","4.jpg"];
	//短图片的数组
	var Arrys=["01.jpg","02.jpg","03.jpg"];
	//长图片变量
	var num=0;
	//短图片变量
	var num1=0;
	
	//长图切换上一张
	function Cpret(){
		//判断数组
			num--;
			if(num<0){
				num=Arry.length-1;
			}
		document.getElementsByTagName("img")[0].src="img/"+Arry[num];
		document.getElementsByTagName("p")[0].innerHTML="这是第"+(num+1)+"张图片";
	};
	
	//长图切换下一张
	function Cnext(){
		//判断数组
			num++;
			if(num>Arry.length-1){
				num=0;
			}
		document.getElementsByTagName("img")[0].src="img/"+Arry[num];
		document.getElementsByTagName("p")[0].innerHTML="这是第"+(num+1)+"张图片";
	}
	
	//短图切换上一张
	function Dpret(){
		//判断数组
		if(num1>0){
			num1--;
		}else{
			num1=Arrys.length-1;
		}
		document.getElementsByTagName("img")[1].src="img/"+Arrys[num1];
		document.getElementsByTagName("p")[1].innerHTML="这是第"+(num1+1)+"张图片";
	}
	
	//短图切换下一张
	function Dnext(){
		//判断数组
		if(num1<Arrys.length-1){
				num1++;
			}else{
				num1=0;
			}
			document.getElementsByTagName("img")[1].src="img/"+Arrys[num1];
			document.getElementsByTagName("p")[1].innerHTML="这是第"+(num1+1)+"张图片";
	}
	
	//长图片点击按钮切换的时候----------------------------------------
	//上一张
	document.getElementsByTagName("a")[0].onclick=function(){
		Cpret();
	};
	//下一张
	document.getElementsByTagName("a")[1].onclick=function(){
		Cnext();
	};
	
	//短图片点击按钮切换的时候----------------------------------------
	document.getElementsByTagName("a")[2].onclick=function(){
		Dpret();
	};
	
	document.getElementsByTagName("a")[3].onclick=function(){
		Dnext();
	};
	
	//点击上一组下一组按钮的时候
	document.getElementsByTagName("button")[0].onclick=function(){
		Cpret();
		Dpret();
	};
	
	document.getElementsByTagName("button")[1].onclick=function(){
		Cnext();
		Dnext();
	};
};
