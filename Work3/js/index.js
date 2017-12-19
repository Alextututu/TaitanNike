window.onload=function(){
	//声明一个数组
	var Array = [ 'img/fj1.jpg', 'img/mm1.jpg', 'img/mm2.jpg', 'img/zs1.jpg', 'img/zs2.jpg', 'img/zs3.jpg', 'img/zs4.jpg' ];
	//获得添加按钮ID
	var Add=document.getElementById("btn1");
	//获得减少按钮ID
	var Remove=document.getElementById("btn2");
	//获得ul的ID
	var ULs=document.getElementById("ul1");
	//获得图片ID
	var Images=document.getElementById("img1");
	
	var num=0;
		
	//点击添加按钮
	Add.onclick=function(){
		if (num >= Array.length) return;
		//获得li标签对象
		var newLi = document.createElement('li');
		//将数组的内容插入li标签
		newLi.innerHTML = Array[num];
		//li标签的类名
		newLi.className = 'li_'+num;
		//给li标签绑定点击事件
		newLi.addEventListener('click', function() {
			Images.style.display="block";
			Images.src=newLi.innerText;
		});
		//往ul里添加li标签
		ULs.appendChild(newLi);
		num++;
	};
	
	//点击减少按钮
	Remove.onclick=function(){
		//如果ul里的最后一个li标签是一个对象
		if (ULs.lastChild instanceof Object) {
			//将最后一个li标签移除
			ULs.removeChild(ULs.lastChild);
			//重新将ul标签里面的li的长度赋值给num
			num = ULs.childNodes.length;
			Images.style.display="none";
		}
	};
	

//	//点击添加按钮
//	Add.onclick=function(){
//		if(num<7){
//			ULs.innerHTML+='<li class="li_'+num+'" onclick="Show();">'+Array[num]+'</li>';
//		}else{
//			num=7;
//			return false;
//		}
//		num++;
//	};
//	//点击减少按钮
//	Remove.onclick=function(){
//		if(num>0){
//			num--;
//			ULs.innerHTML='';
//			for(var i=0;i<num;i++){
//				ULs.innerHTML+='<li class="li_'+i+'" onclick="Show();">'+Array[i]+'</li>';
//			}
//		}else{
//			return false;
//		}
//	};
//	
//	Show=function () {
//		var Li=document.getElementsByTagName("li");
//		for(var j=0;j<Li.length;j++){
//			Li[j].onclick=function(){
//				Images.style.display="block";
//				Images.src=this.innerText;
//			}
//		}
//	}
};
