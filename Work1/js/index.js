window.onload=function(){
	//获取i的TagName
	var Io=document.getElementsByTagName("i");
	//获取li标签
	var Li=document.getElementsByTagName("li");
	//获取div
	var Div=document.getElementsByTagName("div");
	//获取按钮
	var btn=document.querySelectorAll("input[type=button]");
	//获取文本框
	var Text=document.querySelectorAll("input[type=text]");
	//获得span标签
	var Span=document.getElementsByTagName("span");
	
	var str="";
	
	//i标签的点击事件
	for(var i=0;i<Io.length;i++){
		Io[i].num=i;
		Io[i].onclick=function(){
			if(this.num==0){
				Div[1].style.display="none";
				Div[2].style.display="block";
			}else{
				Div[3].style.display="none";
				Div[4].style.display="block";
			}
		};
	};
	
	//确定取消按钮的点击事件
	for(var j=0;j<btn.length;j++){
		btn[j].ber=j;
		btn[j].onclick=function(){
			if(this.ber==0){
				if(Text[0].value==""){
					alert("不能为空！请输入文本内容");
				}else{
					str=Text[0].value;
					Span[0].innerHTML=str;
					Div[1].style.display="block";
					Div[2].style.display="none";
				};
			}else if(this.ber==1){
				Div[1].style.display="block";
				Div[2].style.display="none";
			}else if(this.ber==2){
				if(Text[1].value==""){
					alert("不能为空！请输入文本内容！");
				}else{
					str=Text[1].value;
					Span[1].innerHTML=str;
					Div[3].style.display="block";
					Div[4].style.display="none";
				};
			}else{
				Div[3].style.display="block";
				Div[4].style.display="none";
			}
		};
	}
};
