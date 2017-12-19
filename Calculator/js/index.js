window.onload=function(){
	//获取i标签
	var Ai=document.getElementsByTagName("i");
	//获取显示合计件数的ID
	var Totals=document.getElementById("Total");
	//获取共计多少钱的显示ID
	var Commons=document.getElementById("Common");
	//获得显示最贵的ID
	var Expensives=document.getElementById("Expensive");
	//获得所有减号
	var Subs=document.querySelectorAll("i[class='Sub']");
	//获得所有加号
	var Adds=document.querySelectorAll("i[class='Add']");
	//获得所有显示数量
	var Nums=document.querySelectorAll("em[class='DisplayNum']");
	//获得所有小计
	var Subtotals=document.querySelectorAll("strong[class='Subtotal']");
	//获得标价单价
	var Unit_Prices=document.querySelectorAll("strong[class='Unit_Price']");
	
	var max=0;
	for(var i=0;i<Subs.length;i++){
		//添加自定义属性
		Subs[i].nums=i;
		//给每一个Nums一个自定义的值，初始值为0
		Nums[i].Amount=0;
		//点击减号的时候
		Subs[i].onclick=function(){
			if(parseInt(Nums[this.nums].innerText)<1){
				return false;
			}else{
				(Nums[this.nums].Amount)--;
				Nums[this.nums].innerText=Nums[this.nums].Amount;
				Subto(this.nums,parseFloat(Unit_Prices[this.nums].innerText),Nums[this.nums].innerText);
				//传入参数
				Subto(this.nums,parseFloat(Unit_Prices[this.nums].innerText),Nums[this.nums].innerText);
				//商品公共合计数量
				Publics(parseInt(Nums[0].Amount),parseInt(Nums[1].Amount),parseInt(Nums[2].Amount),parseInt(Nums[3].Amount),parseInt(Nums[4].Amount))
				//共计花费多少钱
				Total_money(parseFloat(Subtotals[0].innerText),parseFloat(Subtotals[1].innerText),parseFloat(Subtotals[2].innerText),parseFloat(Subtotals[3].innerText),parseFloat(Subtotals[4].innerText))
				max=0;
				Most_expensive_univalent();
			}
		}
		//添加自定义属性
		Adds[i].nums=i;
		//点击加号的时候
		Adds[i].onclick=function(){
			(Nums[this.nums].Amount)++;
			Nums[this.nums].innerText=Nums[this.nums].Amount;
			//传入参数
			Subto(this.nums,parseFloat(Unit_Prices[this.nums].innerText),Nums[this.nums].innerText);
			//商品公共合计数量
			Publics(parseInt(Nums[0].Amount),parseInt(Nums[1].Amount),parseInt(Nums[2].Amount),parseInt(Nums[3].Amount),parseInt(Nums[4].Amount))
			//共计花费多少钱
			Total_money(parseFloat(Subtotals[0].innerText),parseFloat(Subtotals[1].innerText),parseFloat(Subtotals[2].innerText),parseFloat(Subtotals[3].innerText),parseFloat(Subtotals[4].innerText))
			//所有单价的长度
			Most_expensive_univalent();
		}
	}
	
	//小计方法
	function Subto(num,Prices,Text){
		Subtotals[num].innerText=(Text*Prices)+"元";
	};
	//商品公共合计数量方法
	function Publics(num1,num2,num3,num4,num5){
		Totals.innerText=num1+num2+num3+num4+num5;
	};
	//计算共花费钱数
	function Total_money(money1,money2,money3,money4,money5){
		Commons.innerText=money1+money2+money3+money4+money5;
	};
	//计算最大数方法
	function Most_expensive_univalent(){
		if(parseInt(Nums[0].innerText)==0&&parseInt(Nums[1].innerText)==0&&parseInt(Nums[2].innerText)==0&&parseInt(Nums[3].innerText)==0&&parseInt(Nums[4].innerText)==0){
			Expensives.innerText=0;
		}
		for(var m=0;m<Nums.length;m++){
				if(parseInt(Nums[m].innerText)>0){
					if(parseFloat(Unit_Prices[m].innerText)>max){
						max=parseFloat(Unit_Prices[m].innerText);
						Expensives.innerText=max;
				}
			}
		}
	};
};

