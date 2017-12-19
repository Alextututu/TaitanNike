window.onload=function(){
	var text1=document.getElementsByTagName("textarea")[0];
	var text2=document.getElementsByTagName("textarea")[1];
	var span=document.getElementsByTagName("span");
	var timer=null;
	var num=0;
	var onOff=true;
	document.getElementById("clicks").onclick=function(){
		if(onOff){
		
			//清空text2文本
			text2.value="";	
			//获取用户输入的文本
			var tv = text1.value;
			//将用户的文本拆分装在数组里
			var arr=text1.value.split('');
			//获得总值并给第二个span
			span[1].innerText=text1.value.length;
			timer=setInterval(function(){
	//--------------------------------第一种方法--------------------------------------------
				//如果num小于用户文本的长度
				if(num<=tv.length){
					onOff=false;
					//截取第一个字
					var str=tv.substring(num,num+1);
					//text1等于剩下来的文本
					text1.value=tv.substring(num++,tv.length);
					//把截取到的第一个字丢给text2文本框接收到拼接起来 
					text2.value+=str;
					//计算第一个span的值
					span[0].innerText=text2.value.length;
				}else{
					//清空文本框
					clearInterval(timer);
					onOff=true;
					num=0;
				}
	//--------------------------------第二种方法--------------------------------------------
	//			if (num++ < tv.length) {
	//				//把数组里的第一个元素移除并取出来给firstChar
	//				var firstChar = arr.shift();
	//				//然后把剩余的拼接好，这样第一个文本框就少了一个字
	//				text1.value = arr.join('');
	//				//然后吧取出来的字丢给第二个文本框慢慢拼接起来
	//				text2.value += firstChar;
	//				span[0].innerText=text2.value.length;
	//			}else{
	//				clearInterval(timer);
	//				num=0;
	//			}
			},10);
		}
	};
};
