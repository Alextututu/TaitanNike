window.onload=function(){
	//获取到弹框提示ID
	var Bomb=document.getElementById("Bomb_box");
	//获取蒙版ID
	var mask=document.getElementById("Mask");
	//声明数组
	var Array=["1.jpg","2.jpg","46.jpg","48.jpeg","49.jpg"];
	var num=0;
	//获取到所有li标签数组
	var UL=document.getElementById("box_ul");
	//获得第一个li标签
	var Li=document.getElementsByTagName("li")[0];

	//为ul标签绑定一个点击事件，利用了冒泡机制【下面是处理点击循环切换和顺序切换按钮样式的】思路为点击本次标签的时候和上次点击作比较
	UL.addEventListener('click',function(e){
		//e.srcElement.tagName捕获活动标记名称。获取的标记都是以大写表示，所以要用toLowerCase转成小写，如果是li标签就继续执行
		if(e.srcElement.tagName.toLowerCase()=="li"){
			//如果本次点击不等于this.lastClick  【解释：e.target是找到了鼠标点击事件的DOM元素，也就是获得我本次点击的li，、触发事件目标元素因为是click点击事件，所以应该是MouseEvent】
			if(this.lastClick!=e.target){
				//负责处理class 
				Li.className="";
				e.target.className="ul_li";
				//如果this.lastClick为真，就是不为undefined或null，可以理解为"上次点击"
				if(!!this.lastClick){
					//清空上次点击的class 
					this.lastClick.className="";
				}
				//将本次点击赋值给lastClick
				this.lastClick=e.target;
			}else{
//				console.log("你在重复点击")
				return false;
			}
		}
	});
	
	//此方法是切换img路径和更换搭配的文字的哟
	function Nums(){
		document.getElementsByTagName("img")[0].src="img/"+Array[num];
		document.getElementsByTagName("span")[0].innerHTML=(num+1)+"/5";
		document.getElementsByTagName("p")[2].innerHTML="文字描述"+(num+1);
	}
	//循环切换方法
	function Loop_Left(){
		num--;
		if(num<0){
			num=Array.length-1;
		}
		Nums();
	}
	function Loop_Right(){
		num++;
		if(num>Array.length-1){
			num=0;
		}
		Nums();
	}
	
	//顺序切换方法
	function Order_Left(){
		num--;
		if(num<0){
			num=0;
			document.getElementsByTagName("p")[1].innerHTML="已经到第"+(num+1)+"张啦~";
			Bomb.style.display="block";//弹出弹框
			mask.style.display="block";//弹出蒙版
		}else{
			Nums();
		}
	}
	function Order_Right(){
		num++;
		if(num>Array.length-1){
			num=Array.length-1;
			document.getElementsByTagName("p")[1].innerHTML="已经到第"+(num+1)+"张啦~";
			Bomb.style.display="block";//弹出弹框
			mask.style.display="block";//弹出蒙版
		}else{
			Nums();
		}
	}
	
	//点击弹框里面的确定按钮的时候把弹框消失
	document.getElementsByTagName("button")[0].onclick=function(){
		Bomb.style.display="none";//隐藏弹框
		mask.style.display="none";//隐藏蒙版
	};
	
	//点击左右按钮的时候
	document.getElementsByTagName("a")[0].onclick=function(){
		//判断第一个li标签有没有class为ul_li的，如果有，那就说明当前是循环切换
		if(Li.className=="ul_li"){
			Loop_Left();//调用循环切换方法
		}else{
			Order_Left();//如果没有class为ul_li，那么就调用顺序切换方法
		}
	};
	document.getElementsByTagName("a")[1].onclick=function(){
		if(Li.className=="ul_li"){  //道理一样，只不过调用的方法是左右箭头而已【就是上一张下一张啦】
			Loop_Right();
		}else{
			Order_Right();
		}
	};
};
