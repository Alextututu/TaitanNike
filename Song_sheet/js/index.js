window.onload=function(){
		//获取功能栏的li标签
		var Lis=document.getElementById("Song_Box_footer").querySelectorAll("li");
		//获取功能栏的选中标签
		var checks=document.getElementById("Song_Box_footer").querySelectorAll("i")
		//获取歌单的li标签
		var Song_Lis=document.getElementById("Song_Exhibition").querySelectorAll("li");
		//获取歌单的选中标签
		var Song_checks=document.getElementById("Song_Exhibition").querySelectorAll("i");
		//点击功能栏的全选标签的时候
		for(var i=0;i<Lis.length;i++){
			Lis[i].nums=i;
			Lis[0].onclick=function(){
				//如果功能栏的选中标签的class为icon-check-empty
				if(checks[this.nums].className=="icon-check-empty"){
					//循环给歌单里的所有i标签加上class
					for(var j=0;j<Song_checks.length;j++){
							Song_Lis[j].className="checks";
							Song_checks[j].className="icon-check";
					}
					checks[this.nums].className="icon-check";
				}else{
					for(var j=0;j<Song_checks.length;j++){
							Song_Lis[j].className="";
							Song_checks[j].className="icon-check-empty";
					}
					checks[this.nums].className="icon-check-empty";
				}
			}
		}
		//点击歌单里面的li的时候
		for(var i=0;i<Song_Lis.length;i++){
			Song_Lis[i].nmb=i;
			Song_Lis[i].onclick=function(){
				//如果class是未选中的class
				if(Song_checks[this.nmb].className=="icon-check-empty"){
					//赋予class
						Song_Lis[this.nmb].className="checks";
						Song_checks[this.nmb].className="icon-check";
					}else{
						Song_Lis[this.nmb].className="";
						Song_checks[this.nmb].className="icon-check-empty";
					}
				}
		}
};
