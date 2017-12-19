window.onload=function(){
	var num=true;
	var show="show";
	var hide="hide";
	Box={
		ul:document.getElementsByTagName("ul")[0],
		li:document.getElementsByTagName("li"),
		i:document.getElementById("Look_Box").getElementsByTagName("i"),
		span:document.getElementById("Look_Box").getElementsByTagName("span")[0],
		footer:document.getElementsByTagName("footer")[0],
		P_text:document.getElementById("Look_Box").getElementsByTagName("p")[0]
	}
	footer={
		i:document.getElementById("Footer_box").getElementsByTagName("i")[0],
		lookup:document.getElementById("Footer_box").getElementsByTagName("input")[0],
		replace:document.getElementById("Footer_box").getElementsByTagName("input")[1],
		inputs1:document.getElementById("Footer_box2").getElementsByTagName("input")[0],
		inputs2:document.getElementById("Footer_box2").getElementsByTagName("input")[1],
		inputs3:document.getElementById("Footer_box2").getElementsByTagName("input")[2],
		search:document.getElementById("Footer_box2").getElementsByTagName("p")[0]
	}
	//点击展开按钮
	Box.li[0].onclick=function(){
		if(Box.span.innerText=="展 开"){
			Box.i[0].style.transform="rotate(0deg)";
			Box.li[1].style.top="130px";
			Box.li[2].style.top="260px";
			Box.span.innerText="收 起";
			Box.footer.className="footer_show";
			num=false;
		}else{
			Box.i[0].style.transform="rotate(225deg)";
			Box.li[1].style.top="0";
			Box.li[2].style.top="0";
			Box.span.innerText="展 开";
			Box.footer.className="";
			num=true;
		}
	}
	//点击编辑框的关闭按钮
	footer.i.onclick=function(){
			Box.i[0].style.transform="rotate(225deg)";
			Box.li[1].style.top="0";
			Box.li[2].style.top="0";
			Box.span.innerText="展 开";
			Box.footer.className="";
			num=true;
			footer.inputs1.value=footer.inputs2.value=footer.inputs3.value="";
	};
	
	//编辑栏查找按钮点击
	Box.li[1].onclick=footer.lookup.onclick=function(){
			footer.inputs1.className=show;
			footer.inputs2.className=footer.inputs3.className=hide;
			footer.inputs1.focus();  
			footer.inputs2.value=footer.inputs3.value="";
	};
	//编辑栏替换按钮点击
	Box.li[2].onclick=footer.replace.onclick=function(){
			footer.inputs1.className=hide;
			footer.inputs2.className=footer.inputs3.className=show;
			footer.inputs2.focus();
			footer.inputs1.value="";
	};
	
	//点击搜索按钮
	//先获取到所有文字
	footer.search.onclick=function(){
		var texts=Box.P_text.innerText;
		if(footer.inputs1.className=="show"){
			//获得所有文本
			//获得用户输入框内容
			var text1=footer.inputs1.value;
			if(!texts.includes(text1)){
				alert("没有找到匹配文字！");
				return false;
			}else{
				var fuck=texts.split(text1);
				console.log(fuck);
				Box.P_text.innerHTML=fuck.join('<span style="color:red;">'+text1+'</span>');
			}
		}else{
			//获得用户输入框的内容
			var inputs=footer.inputs2.value;
			var inputs2=footer.inputs3.value;
			
			var fuck1=texts.split(inputs);
			Box.P_text.innerHTML=fuck1.join('<span style="color:red;">'+inputs2+'</span>');
		}
	};
};
