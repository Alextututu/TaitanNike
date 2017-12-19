window.onload=function(){
	//获取footer
	var footers=document.getElementById("footers");
	//获得展示已下架商品详情的div的ID
	var Commodity=document.getElementById("footer_Commodity_details");
	//获得下架商品ul的ID
	var Comul=document.getElementById("Commodity_ul");
	//获取所有输入框
	var ipt=document.querySelectorAll('input[type="text"]');
	//获取所有确定按钮
	var btn=document.querySelectorAll('input[type="button"]');
	//div抖动函数
	var arr = [-10,10,-8,8,-6,6,-4,4,-2,2,0];
	//接收定时器的变量
	var timer = null;
	//普通变量
    var num = 0;
    
	//当点击确定按钮的时候
	for(var i=0;i<btn.length;i++){
		btn[i].box=i;
		//点击确定按钮的时候
		btn[i].onclick=function(){
			this.disabled=true;
			//获取当前用户输入的未来时间文本
			var timeval=ipt[this.box].value;
			//将用户输入的文本放入Date里面转换成对应的系统时间
			var dates = new Date(timeval);
			//清除定时器的变量
			var timer=null;
			var thisbox=this.box;
			timer = setInterval(Time_calculation,1000);
			
			//计算时间方法
			function  Time_calculation(){
				var dates1=new Date();
				var t=(dates-dates1)/1000;
				//获得剩余天数
				var iDay = Math.floor(t/86400);
				//获得剩余小时
	            t%=86400;
	            var iH = Math.floor(t/3600);
	            //获得剩F余分钟数
	            t%=3600;
	            var iM = Math.floor(t/60);
	            //获得剩余秒数
	            t%=60;
	            
	            if(Math.floor(t) <= -1){
	                t = 0;
	                clearInterval(timer);
						//对应的蒙版和盖章就显示出来
						document.getElementById('Mask_'+(thisbox+1)).style.visibility="visible";
						document.getElementById('Seal_'+(thisbox+1)).style.visibility="visible";
						document.getElementById('Seal_'+(thisbox+1)).style.transform="scale(1)";
						var doc=document.getElementById('Box_'+(thisbox+1));
						//窗口抖动原理
						timer = setInterval(function(){
				        	doc.style.left = arr[num] + 'px';
				            num++;
				            if(num > arr.length){
				                clearInterval(timer);
				                num = 0;
				            }
				        },50);
	                onOff = true;
	                
	                //获取到商品名称
	                var Names=document.getElementById("box_commodity_name_"+(thisbox+1));
	                //获取到价格
	                var Moneys=document.getElementById("box_commodity_money_"+(thisbox+1));
					//获取到商品的图片
					var Images=document.getElementById("box_images_"+(thisbox+1));
					//将下架商品的	信息添加至footer中
					document.getElementById("Commodity_ul").innerHTML+='<li><p>'+Names.innerText+'</p><p>￥'+Moneys.innerText+'</p><p><img src="'+Images.src+'" /></p></li>';
	            }else{
	            	//获得当前对应thisbox下的所有的span标签
					var spans=document.getElementById("Remaining_"+(thisbox+1)).querySelectorAll("span");
					//时
					spans[0].innerText=parseInt(iH/10);  //23 --> 2.3 --> 2
					iH%=10;
					spans[1].innerText=(iH);
					
					//分
					spans[3].innerText=parseInt(iM/10);
					iM%=10;
					spans[4].innerText=(iM);
					//秒
					spans[6].innerText=parseInt(t/10);
					t%=10;
					spans[7].innerText=parseInt(t);
	            }
			}
		}
	};
};
