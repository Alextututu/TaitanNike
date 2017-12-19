window.onload=function(){
	var Array=["red","blue","pink","orange","green","yellow"];

    var btn=document.getElementById('btn_click'); //获取点击按钮
    var Box=document.getElementById('Box');  //获取盒子
    var num=11;      //声明一个数量
    var nums=0;     //声明一个更改二维数组下标的常量
    var Half=(num-1)/2;   //除以二是对半分，因为要成为一个V字形状
    var arr=[['bottom','left','left','bottom'],['left','top','left','top'],['bottom','right','right','bottom'],['left','bottom','left','bottom']];//将位置排序装在数组里

	var str='';      
	//先把div全部for出来摆好并随机放上颜色
	for(var i=0;i<num;i++){     
	 	str+='<div style="background:'+Array[i % Array.length]+'">'+(i+1)+'</div>';         
	}          
	console.log(str);
	//设置外面盒子的宽度和高度等于里面div个数*宽度*
	 Box.style.width=num*50+'px';    
	 Box.style.height=num*50+'px';     
	 //点击变化按钮的时候
	 btn.onclick=function(){
	 	//让nums自增
	 	if(nums>2){        
	 		nums=0;               
	 	}else{                    
	 		nums++;   
	 	}                
	 	Box.innerHTML=str;     
	 	var divs=Box.getElementsByTagName('div');//获取到生成的div数组          
	 	for(var j=0;j<num;j++){       
	 		if(j>Half){          
	 			Half--;               
	 			//改变div的距离样式
				divs[j].style[arr[nums][0]]=j*50+'px';
	 			divs[j].style[arr[nums][1]]=Half*50+'px';    //到中间位置的div的时候开始折返对应的距离值      
	 		}else{                           
	 			//给另外一边拍好位置
	 			divs[j].style[arr[nums][2]]=j*50+'px';        
	 			divs[j].style[arr[nums][3]]=j*50+'px';
			}              
	 	}        
	 	Half=(num-1)/2;     //重新赋值
	 }
	 
//  var str='';
//
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
};





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

