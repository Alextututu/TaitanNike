 window.onload=function(){
	var arr = ['100px', 'abc' - 6, [], -98765, 34, -2, 0, '300', , function() {
		alert(1);
		}, null, document, [], true, '200px' - 30, '23.45元', 5, Number('abc'), function() {
		alert(3);
		}, 'xyz' - 90];
		var num;
		var Btn=document.getElementById("btn");
		//获取所有的span
		var Span=document.getElementsByTagName("span");
		var str='';
		var str2='';
		var str3='';
		var str4='';
		var max=0;
		Btn.onclick=function(){
			for(var i=0;i<arr.length;i++){
				if(Number(arr[i])===arr[i]){
					str+=arr[i]+"，";
					Span[1].innerHTML=str;
				}
				
				if(parseFloat(arr[i])==parseFloat(arr[i])){
					str2+=arr[i]+"，";
					Span[3].innerHTML=str2;
				}
				
				if(parseInt(arr[i])>max){
					max=parseInt(arr[i]);
					str3=max;
					Span[5].innerHTML=str3;
				}
				
//				if(isNaN(arr[i])){
//					alert(arr[i]);
//					str4+=i+"，";
//					Span[7].innerHTML=str4;
//				}
			if(typeof arr[i] === 'number' && isNaN(arr[i])){
				str4+=i+"，";
				Span[7].innerHTML=str4;
			}
		}
		};
};
