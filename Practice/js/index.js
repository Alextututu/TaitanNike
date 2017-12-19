window.onload=function(){
	for (var i = 0; i < 5; i++) {
		 (function(j) { 
		  setTimeout(function() {
		   console.log(new Date, j);
		  }, 1000);
		 })(i);
	}
	 
	console.log(new Date, i);
}

//
//	function fun(n,o) {
//	  console.log(o);
//	  return {
//	    fun:function(m){
//	      return fun(m,n);
//	    }
//	  };
//	}
////	var a = fun(0);  
////				a.fun(1);  
////				a.fun(2);  
////				a.fun(3); 
////	
////	var b = fun(0).fun(1).fun(2).fun(3);			
///*
// 	undefind
// 	0
// 	1
// 	2
// * */
//
//
//	var c = fun(0).fun(1);  
//	/*
//	 undefind
//	 0
//	 1
//	 1
//	 * */
//	c.fun(2);  
//	c.fun(3);



//var fn=(function(name){
//		return function(){
//			if(typeof name=="undefined"){
//				var name="lishi";
//				console.log("hello"+name);
//			}else{
//				console.log("hello"+name);
//			}
//		}
//	})("张三");
//	fn();


//	var rate=4;
//	console.log("★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate));
	//nb
//	console.log(([][[]]+[])[+!![]]+([]+{})[!+[]+!![]]);   
	 //sb
//	console.log((!(~+[])+{})[--[~+""][+[]]*[~+[]] +~~!+[]]+({}+[])[[~!+[]]*~+[]]);  
	//Hello word
//	console.log(([]+[][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+(![]+[])[!+[]+!![]]+([]+{})[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+(!![]+[])[+[]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]])())[+[]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]]+(![]+[])[!+[]+!![]]+([]+{})[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+[][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[+[]]+([][[]]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+([]+[][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+(![]+[])[!+[]+!![]]+([]+{})[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+(!![]+[])[+[]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]])())[!+[]+!![]+!![]]+([][[]]+[])[!+[]+!![]+!![]])()([][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+([]+[][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+(![]+[])[!+[]+!![]]+([]+{})[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+(!![]+[])[+[]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]])())[!+[]+!![]+!![]]+([][[]]+[])[!+[]+!![]+!![]])()(([]+{})[+[]])[+[]]+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+[])+(!+[]+!![]+!![]+!![]+!![]+!![]+!![]+[]))+([]+{})[+!![]]+(!![]+[])[+!![]]+(![]+[])[!+[]+!![]]+([][[]]+[])[!+[]+!![]]+[][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[+[]]+([][[]]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+([]+[][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+(![]+[])[!+[]+!![]]+([]+{})[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+(!![]+[])[+[]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]])())[!+[]+!![]+!![]]+([][[]]+[])[!+[]+!![]+!![]])()([][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(![]+[])[!+[]+!![]+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+([]+[][(![]+[])[!+[]+!![]+!![]]+([]+{})[+!![]]+(!![]+[])[+!![]]+(!![]+[])[+[]]][([]+{})[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]]+(![]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+[]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(!![]+[])[+[]]+([]+{})[+!![]]+(!![]+[])[+!![]]]((!![]+[])[+!![]]+([][[]]+[])[!+[]+!![]+!![]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!![]]+([][[]]+[])[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]+!![]+!![]]+(![]+[])[!+[]+!![]]+([]+{})[+!![]]+([]+{})[!+[]+!![]+!![]+!![]+!![]]+(+{}+[])[+!![]]+(!![]+[])[+[]]+([][[]]+[])[!+[]+!![]+!![]+!![]+!![]]+([]+{})[+!![]]+([][[]]+[])[+!![]])())[!+[]+!![]+!![]]+([][[]]+[])[!+[]+!![]+!![]])()(([]+{})[+[]])[+[]]+(!+[]+!![]+[])+(+!![]+[])));



//var arr=[1,2,3,4];
//arr.unshift(-1,0);
//arr.shift(100000000000);
//arr.push(arr.pop());
//arr.shift(arr.push(arr.unshift(6)));
//arr.unshift(arr.push(7));
//console.log(arr);



//	var arr=[1,2,3,4,5,6,7];
//	for(var i=0;i<arr.length;i++){
//		var ran = Math.floor(Math.random() * arr.length);
//		arr.splice(0,0,arr.splice(ran,1)[0]);
//	}
//	console.log(ar);
//	console.log(ran);
//	console.log(arr.splice(ran,1));
//	console.log(arr);


//	var str="     	M I-+0A.O    ";
//	var str3="";
//	var num=0;
//	var timer=setInterval(function(){
//		var str2=str.substring(num,num+1);
//		num++;
//		if(num<str.length){
//			if(str2==" " || str2=="	"){
////				alert("空格");
//			}else if(str2!=" "){
//				clearInterval(timer);
//				//获得去掉前面空格的
//				str3=str.slice(num-1);
//				var timers=setInterval(function(){
//					
//					
//				},1);
////				str3+=str2;
//			}
//		}else{
//			clearInterval(timer);
//			console.log(str3);
//		}
//	},1);






//	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//	var result = [ ];
//	var ranNum = 5;
//	for (var i = 0; i < ranNum; i++) {
//	var ran = Math.floor(Math.random() * (arr.length - i));
//	result.push(arr[ran]);
//	arr[ran] = arr[arr.length - i - 1];
//	};



//	var str="mi1ovmi2ovmi3ovmi4ov";
//	var arr=[];
//	var num=str.length;
//	
//	fuck(str,"i",num);
//	function fuck(arry,nb,numsss){
//		//循环
//		while(arry.lastIndexOf(nb,numsss)!=-1){
//			//往数组里添加找到的i的下标值
//			arr.push(arry.lastIndexOf(nb,numsss));
//			//num重新赋值
//			numsss=arry.lastIndexOf(nb,numsss)-1;
//			return;
//		}
//		//将数组放入判断最大的一个下标值并给charAt找到对应下标的字符串是什么
//		return arr;
//	}
//	console.log(arr);
//	console.log(str.charAt(Math.max.apply(null,arr)+1));

 
 
// 	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//	var result = [];
//	var ranNum = 10;
//	for (var i = 0; i < ranNum; i++) {
//		var ran = Math.floor(Math.random() * arr.length);
//		result.push(arr.splice(ran, 1)[0]);
//	};
//	console.log(arr);
//	console.log(result);


//	//倒计时                               
//	
//	//规定一个未来的时间 - 现在的时间 = 剩下的时间
//	var newDate= new Date(2017,11,7,0,0,0);
//	
//	//现在的时间
//	var nowDate=new Date();
//	
//	//拿到剩余时间的毫秒数
//	var Millise=newDate - nowDate;
//	var Se=Math.floor(Millise / 1000);
//	
//	var Min = Math.floor(Se/60);
//			
//	var iH = Math.floor(Min/60);
//	
//	console.log(Millise);


// function show(){
//			var dates = new Date();
//			var num=dates.getSeconds();
//			if(num<10){
//				num="0"+num;
//			}else{
//				num=""+num;
//			}
//			var now="..";
//		    now = dates.getFullYear() + "年"; //获取当前年数
//		    now = now + (dates.getMonth() + 1) + "月"; //取月的时候获取当前月份(0-11,0代表1月)所以需要+1
//		    now = now + dates.getDate() + "日&nbsp; ";    //获取当前是多少日
//		    now = now + dates.getHours() + ":";    //获取当前小时数
//		    now = now + dates.getMinutes() + ":";   //获取当前分钟数
//		    now = now + num + "";   //获取当前的秒数
//		    now = now + "&nbsp; 星期"+dates.getDay();   //获取当前星期几
//		    document.getElementById("Time").innerHTML = now; 
//		   var t= setTimeout(show, 1000); 
//	  }
//	 show();



//	var b={
//		name:"小黑",
//		age:18,
//		job:"前端开发"
//	};
//	
//	for(var attr in b){
//		if(attr=="job"){
//			alert(b[attr]);
//		}
//		console.log(b[attr]);
//	}
	
	
//	function fun(n,o){
//		console.log(o);
//		return{
//			fun:function(m){
//					return fun(m,n);
//			}
//		}
//	}
//	c.fun(2);c.fun(3);



//	$(".fuck").mouseover(function(){
//		$(this).stop();
//		$(this).animate({top:'-8px'},200);
//	});
//	$(".fuck").mouseout(function(){
//		$(this).stop();
//		$(this).animate({top:'+0px'},200);
//	});
//	


//	var btn=document.getElementsByTagName("button");
//	var divBox=document.getElementById("Box");
//	var Array=["这是第一个按钮点击的内容","这是第二个按钮点击的内容","这是最后一个按钮点击的内容"];
//	
//	var pra=0;
//	for(var i=0;i<btn.length;i++){
//		//循环得到按钮的长度并且赋值给num
//		btn[i].num=i;
//		//点击按钮的时候
//		btn[i].onclick=function(){   
//			btn[pra].className="";
//			this.classList="btn";
//			//给div同样下标的内容
//			pra=this.num;
//			divBox.innerHTML=Array[this.num];
//		};
//	}

//	var a = 10 && false || 3 && false || true && 0 || 123 ;
//	var a =1*'2' && 2/'2px' || Infinity-1 && !!true || !!!!0 || 5>2;
//	console.log(a);




//	//声明一个图片数组
//	var Image=["1.jpg","2.jpg","46.jpg","48.jpeg","49.jpg"];
//	//获得Li
//	var Li=document.getElementsByTagName("li");
//	//获得img的ID
//	var Imgs=document.getElementById("IMG");
//	for(){
//		
//	}




//点击对应的按钮变成数组里对应的天数
//获取按钮的ID值
//	var btn=document.getElementsByTagName("button");
//	//声明数组
//	var Array=["星期一","星期二","星期三","星期四","星期五"];
//	for(var i=0;i<Array.length;i++){
//		btn[i].num=i;
//		btn[i].onclick=function(){
//			this.innerText=Array[this.num];
//		};
//	};

//根据点击次数将按钮禁用
//	btn[0].num=1;
//	btn[0].onclick=function(){
//			this.num++;
//			if(this.num>2){
//				this.disabled=true;
//			}
//	};


//	for(var i=0;i<4;i++){
//		btn[i].num=0;
//		btn[i].onclick=function(){
//			this.num++;
//			if(this.num>2){
//				this.disabled=true;
//			}
//		}
//	}

	 
//  var str='';
//      for(var i=0;i<9;i++){
//          if(i<4){
//              str += '<div class="Square" style="left:'+(i*50)+'px;top:'+(i*50)+'px;background:'+Array[i % Array.length]+'">'+i +'</div>';
//          }else{
//              str += '<div class="Square" style="left:'+(i*50)+'px;top:'+(i*50)+'px;background:'+Array[i % Array.length]+'">'+i +'</div>';
//          };
//      };
//      document.getElementById("Box").innerHTML=str;
//		
//	
//	var num=0;
//	document.getElementsByTagName("button")[0].onclick=function(){
//		if(num==0){
//			
//		}else if(num==1){
//		}else if(num==2){
//		}else if(num==3){
//			num=0;
//		}
//		num++;
//	};

//		for(var i=0;i<9;i++){
//			if(i<4){
//	            str += '<div class="Square" style="left:'+(i*50)+'px;top:'+(i*50)+'px;background:'+Array[i % Array.length]+'">'+i +'</div>';
//			}else{
//	            str += '<div class="Square" style="left:'+(i*50)+'px;top:'+((8-i)*50)+'px;background:'+Array[i % Array.length]+'">'+i +'</div>';
//			};
//	    };    
//	document.getElementById("Box").innerHTML=str;
//	var num=0;
//	document.getElementsByTagName("button")[0].onclick=function(){
//		if(num==0){
//			
//		}
//	};






//为ul标签绑定一个点击事件，利用了冒泡机制【下面是处理点击循环切换和顺序切换按钮样式的】思路为点击本次标签的时候和上次点击作比较
// UL.addEventListener('click',function(e){
//     //e.srcElement.tagName捕获活动标记名称。获取的标记都是以大写表示，所以要用toLowerCase转成小写，如果是li标签就继续执行
//     if(e.srcElement.tagName.toLowerCase()=="li"){
//         //如果本次点击不等于this.lastClick  【解释：e.target是找到了鼠标点击事件的DOM元素，也就是获得我本次点击的li，、触发事件目标元素因为是click点击事件，所以应该是MouseEvent】
//         if(this.lastClick!=e.target){
//             //负责处理class
//             Li.className="";
//             e.target.className="ul_li";
//             //如果this.lastClick为真，就是不为undefined或null，可以理解为"上次点击"
//             if(!!this.lastClick){
//                 //清空上次点击的class
//                 this.lastClick.className="";
//             }
//             //将本次点击赋值给lastClick
//             this.lastClick=e.target;
//         }else{
// //				console.log("你在重复点击")
//             return false;
//         }
//     }
// });


// 	var btn=document.querySelectorAll("button");
// 	var check=document.querySelectorAll('input[type="checkbox"]');
// 	//点击全选的时候
// 	btn[0].onclick=function(){
// 		for(var i=0;i<check.length;i++){
// 			check[i].checked=true;
// 		}
// 	}
// 	//点击反选的时候
// 	btn[2].onclick=function(){
// 		for(var i=0;i<check.length;i++){
// 			check[i].checked=false;
// 		}
// 	}
// 	//点击全不选的时候
// 	btn[1].onclick=function(){
// 		for(var i=0;i<check.length;i++){
// 			if(check[i].checked==true){
// 				check[i].checked=false;
// 			}else{
// 				check[i].checked=true;
// 			}
// 		}
// 	}
//
//
//========================================================================
//var Key=document.getElementById("key");
//var Val=document.getElementById("Val");
//var Okk=document.getElementById("Ok");
//var fuck=document.getElementById("Fuck");
//	
//	var myData={
//		name:"Adam",
//		weather:"sunny",
//		printMessages:function(){
//			document.writeln("Hello"+this.weather+".");
//			document.writeln("Today is"+this.weather+".");
//		}
//	};
//	for(var prop in myData){
//		document.writeln("Name"+prop+"Value"+myData[prop]);
//	}
//	fuck.innerHTML("<p>"+3333+"</p>");


//var color="red";
//var w="width";
//var h="height";
//var num1=100;
//var num2=200;
//var bg="background";
//
//Okk.onclick=function(){
//	var k=Key.value;
//	var v=Val.value;
//	fuck.style[k]=v;
//	fuck.innerHTML='<div style="'+bg+":"+color+";"+w+":"+num1+"px;"+h+":"+num2+'px;"></div>';
	//	fuck.insertAdjacentHTML('beforebegin','<p>12231213</p>');
//		fuck.appendChild("<p>12231213</p>");
//}
//

