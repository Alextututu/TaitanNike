window.onload=function(){
	var Btn=document.getElementById("Btn");
	var Texts=document.getElementById("Texts");
	Texts.focus(); //聚焦
	var fuck;
	Btn.onclick=function(){
		var Values=Texts.value;
		if(Texts.value=="" || Number(Values)==0){
			alert("请输入内容");
			Texts.value='';
			Texts.focus(); //聚焦
		}else if(Texts.value.length<5 || Texts.value.length>12){
			alert("QQ号码位数不对！");
			Texts.value='';
			Texts.focus(); //聚焦
		}else if(isNaN(Values)){
			Texts.value='';
			alert("请输入纯数字！");
			Texts.focus(); //聚焦
		}else if(parseFloat(Values) != parseInt(Values)){
			Texts.value='';
			alert("不能输入小数！");
			Texts.focus(); //聚焦
		}else if(parseInt(Values[0]) === 0){
			Texts.value='';
			alert("不能以0开头");
			Texts.focus(); //聚焦
		}else if(Values[0]==0 || (Values[Values.length-1]) == 0 || (Values[Values.length-1]) == "."){
			Texts.value='';
			alert("不能以空格开头或结尾或者点");
			Texts.focus(); //聚焦
		}else if(parseFloat(Values+"1") != parseInt(Values+"1")){
			Texts.value='';
			alert("不能以小数点结尾");
			Texts.focus(); //聚焦
		}else{
			alert("QQ通过");
		}
		
//		alert(parseFloat(Values+"1")==parseInt(Values+"1"));
//		alert(Values[0]==0);
//	console.log(Number(Texts.value));
//	console.log(parseInt(fuck));
//	console.log(parseFloat(Texts.value));
//	console.log(parseFloat(Values));
	};
	
//	console.log(Number("0123456"));
};

