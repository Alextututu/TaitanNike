window.onload=function(){
	var btn={
		p:document.getElementsByTagName("p"),
		Li:document.getElementsByTagName("li"),
		Butn:document.getElementById("Buttons"),
		ul:document.getElementsByTagName("ul")[0]
	}
	//声明一个数组
//	var Arry=['<li id="One">One</li><span>1-粉红</span>','<li id="Two">Two</li><span>2-粉黄</span>','<li id="Three">Three</li><span>3-黄绿</span>','<li id="Four">Four</li><span>4-嫩绿</span>','<li id="Five">Five</li><span>5-湖蓝</span>','<li id="Six">Six</li><span>6-蓝紫</span>','<li id="Seven">Seven</li><span>7-粉紫</span>','<li id="Eight">Eight</li><span>8-紫红</span>'];
	var Array=['<li id="aOne">One</li><span>1-粉红</span>','<li id="bTwo">Two</li><span>2-粉黄</span>','<li id="cThree">Three</li><span>3-黄绿</span>','<li id="dFour">Four</li><span>4-嫩绿</span>','<li id="eFive">Five</li><span>5-湖蓝</span>','<li id="fSix">Six</li><span>6-蓝紫</span>','<li id="gSeven">Seven</li><span>7-粉紫</span>','<li id="hEight">Eight</li><span>8-紫红</span>'];
	
	Random();
	//点击从小到大按钮
	btn.p[0].onclick=function(){
		this.className="phover";
		btn.p[1].className="";
		Minmax();
	}
	//点击随机排序按钮
	btn.p[1].onclick=function(){
		this.className="phover";
		btn.p[0].className="";
		Random2();
	}
	//从小到大排序方法
	function Minmax(){
		btn.ul.innerHTML="";
		//重新将数组进行排序
		Array.sort();
		//循环输出
		for(var i=0;i<Array.length;i++){
			btn.ul.innerHTML+=Array[i];
		}
	}
	
	//随机排序方法
	function Random(){
		btn.ul.innerHTML="";
		//循环随机值并且重新插入数组的第一位
		for(var i=0;i<Array.length;i++){
			//根据数组的长度然后随机一个值
			var ran = Math.floor(Math.random() * Array.length);
			//将随机到的对应的数组下标的值重新取出再重新插入到数组的第一位
			Array.splice(0,0,Array.splice(ran,1)[0]);
		}
		//用for循环输出方法
//		for(var k=0;k<Array.length;k++){
//			btn.ul.innerHTML+=Array[k];
//		}
		//用forEach循环输出方法
		Array.forEach(function(e){
			btn.ul.innerHTML+=e;
		})
	}
	
//	console.log(Array.sort(function(){
//		return Math.random() - 0.5;
//	}));	
	//随机排序方法2
	function Random2(){
		btn.ul.innerHTML="";
		Array.sort(function(){
			return Math.random() - 0.5;
		});
		//循环输出
		Array.forEach(function(e){
			btn.ul.innerHTML+=e;
		})
	}
};
