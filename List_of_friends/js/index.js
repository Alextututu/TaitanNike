window.onload=function(){
	var Friend=document.getElementsByTagName("span");
	var Friend_ul=document.getElementsByTagName("ul");
	var Friend_i=document.getElementsByTagName("i");
	var Friend_p=document.getElementsByTagName("p");
	var Friend_Lis=document.getElementsByTagName("li");

	//声明一个变量用于接收有多少个li标签
	var Friend_li=0;
	//声明一个变量
	var nums=0;
	for(var i=0;i<Friend.length;i++){
		//给每一个span标签循环添加一个自定义属性【可以理解为一个索引】
		Friend[i].num=i;
		//每个span添加点击事件
		Friend[i].onclick=function(){
			//如果当前ul高度为0
			if(Friend_ul[this.num].offsetHeight==0){
				//获取到当前点击的标签下的所有的li标签
				Friend_li=Friend[this.num].querySelectorAll("li");
				//先清空所有ul的高度并旋转回箭头
				for(var m=0;m<Friend_ul.length;m++){
					//清空其余所有ul高度
					Friend_ul[m].style.height="0";
					//其余箭头全部旋转归位
					Friend_i[m].classList.add("rotate");
					Friend_i[m].classList.remove("rotate1");
					//清空其余标题class
					Friend_p[m].className="";
				}
				//用所有li标签的个数乘以高度赋值给ul的高度
				Friend_ul[this.num].style.height=(Friend_li.length*56)+"px";
				//旋转箭头
				Friend_i[this.num].classList.add("rotate1");
				//给标题p标签一个变背景色class
				Friend_p[this.num].classList.add("spanred");
				for(var j=0;j<Friend_li.length;j++){
					//给每一个li标签循环添加一个自定义属性
					Friend_li[j].nmb=j;
					//给每个li标签一个点击事件
					Friend_li[j].onclick=function(e){
						//如果此次点击的活动标记转换为小写是li标签
						if(e.srcElement.tagName.toLowerCase()=="li"){
							//清空所有li标签样式
								for(var k=0;k<Friend_Lis.length;k++){
									Friend_Lis[k].className="";
								}
								//给本次点击的li标签添加class
								e.target.className="spanred";
						}
						//阻止冒泡传递到父级
						e.stopPropagation();
					};
				}
			}else{
				//高度归0
				Friend_ul[this.num].style.height=0;
				//箭头全部旋转归位
				Friend_i[this.num].classList.add("rotate");
				Friend_i[this.num].classList.remove("rotate1");
				//移除p的class
				Friend_p[this.num].className="";
				//移除所有li的class
				for(var r=0;r<Friend_Lis.length;r++){
					Friend_Lis[r].className="";
				}
			}
		};
	}
};
