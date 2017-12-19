window.onload=function(){
	//获得li的Tag
//	var Lis=document.getElementsByTagName("li");
//	
//	var num=0;
//	var k=0;
//	for(var i=0;i<Lis.length;i++){
//		Lis[i].num=i;
//		Lis[i].onmouseover=function(){
//			for(var j=0;j<=this.num;j++){
//				Lis[j].classList="Lifuck";
//			}
//		}
//		Lis[i].onmouseout=function(){
//			for(var k=0;k<=this.num;k++){
//				Lis[k].classList.remove("Lifuck");
//			}
//		}
//	}

	//num是星星的个数
	//nums为最终点亮星星个数
	var num=nums = Next= 0;
	//获得li标签Tag数组
	var lis = document.getElementsByTagName("li");
	function Show(num) {
		//如果传入的num为0
		nums= num || Next;
			for (var i = 0; i < lis.length; i++) {
				//如果i小于nums  就取Lifuck，否则就取空字符串【思路是三目运算符】
				lis[i].className = i < nums ?  "Lifuck" : "";
			}
		}
	for (var j = 1; j <= lis.length; j++) {
		lis[j - 1].index = j;
		//鼠标移入2
		lis[j - 1].onmouseover = function() { 
			//传入的值为正，就传参
			Show(this.index);
		}
		//鼠标移出
		lis[j - 1].onmouseout = function() {
			Show(0);//传入值为0，,初始为0,移出的时候就没有星星了
		}
		//点击确定
		lis[j - 1].onclick = function() { 
			//重新给Next赋值
			Next= this.index;
		}
	}	
};
