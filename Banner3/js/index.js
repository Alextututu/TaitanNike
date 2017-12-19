window.onload=function(){
	//获得外层div的ID
	var Box=document.getElementById("Banner_box")
	//获得ul
	var Box_ul=document.getElementById("Banner_ul");
	//获得图片
	var Images=document.getElementsByTagName("img");
	var num=1;
	
	var kg=true;
	//点击右箭头
	document.getElementById("Right").onclick=function(){
		//每次+1
		num++;
		//循环num的值
		if(num>6){
			num=1;
		}
		//将num的值给img里面
		Images[1].src='img/'+num+'.jpg';
		//移动
		Box_ul.style.left=-1400+'px';
		var Times=setTimeout(function(){
			Images[0].src = 'img/'+num+'.jpg';
			Box_ul.style.transition = 'none';
			setTimeout(function(){
				Box_ul.style.left = 0;
				setTimeout(function(){
					Box_ul.style.transition = '.5s';
					document.getElementById("Right").disabled="";
				},80);
			},50);
		},520);
		document.getElementById("Right").disabled=true;
	};
	//点击左箭头
	document.getElementById("Left").onclick=function(){
		num--;
		if(num<1){
			num=6;
		}
		Box_ul.style.transition="none";
		Box_ul.style.left=-1400+'px';
		var Time=setTimeout(function(){
			Box_ul.style.transition="none";
			Images[0].src='img/'+num+'.jpg';
			setTimeout(function(){
				Box_ul.style.transition=".5s";
				Box_ul.style.left=0+'px';
				setTimeout(function(){
					Box_ul.style.transition=".5s";
					Images[1].src='img/'+num+'.jpg';
					Box_ul.style.left=0+'px';
					document.getElementById("Left").disabled="";
				},520);
			},100);
		},30);
		document.getElementById("Left").disabled=true;
	};
};
