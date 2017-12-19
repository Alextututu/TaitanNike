window.onload=function(){
		var data = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png'];
		
		
		var nav = document.querySelector('.nav');
		var prev = document.querySelector('.prev');
		var next = document.querySelector('.next');
		var pic = document.querySelector('.pic');
		

		//生成span
		var str = '';
		var str2 = '';
		var num = 0;
		for(var i=0;i<data.length;i++){
			str += `<span class="${i==0?'active':''}">
				<a href="javascript:;">
					<img src="${data[i]}"/>
				</a>
			</span>`;
			str2 += `<img style="opacity:${i==0?1:0}" src="${data[i]}" />`;
		}

		nav.innerHTML = str;
		pic.innerHTML = str2;

		var spans = nav.getElementsByTagName('span');
		var imgs = pic.getElementsByTagName('img');
		for(var i=0;i<spans.length;i++){
			spans[i].index = i;
			spans[i].onmouseover = function(){
				for(var i=0;i<spans.length;i++){
					spans[i].className = '';
					spans[i].getElementsByTagName('a')[0].style.display = 'none';
				}
				this.className = 'active';
				this.getElementsByTagName('a')[0].style.display = 'block';
					clearInterval(times);
			}

			spans[i].onmouseout = function(){
				for(var i=0;i<spans.length;i++){
					spans[i].getElementsByTagName('a')[0].style.display = 'none';
				}
				times=setInterval(Next,1000);
			}

			spans[i].onclick = function(){
				tab(this.index);
				num=this.index;
			}
		}

		function tab(num){
			for(var i=0;i<imgs.length;i++){
				imgs[i].style.opacity = '0';
				spans[i].className = '';
				spans[i].getElementsByTagName('a')[0].style.display = 'none';
			}
			imgs[num].style.opacity = 1;
			spans[num].className = 'active';

		}

		next.onclick = Next;
		
		prev.onclick = function(){
			num --;
			if(num < 0) num = spans.length - 1;
			tab(num);
		}
		
		function Next(){
				num ++;
				num %= spans.length;
				tab(num);
		}
		
		var mor=true;
		var times=null;
		times=setInterval(Next,1000);
		document.getElementById("Pic").onmouseover=function(){
			clearInterval(times);
		}
		document.getElementById("Pic").onmouseout=function(){
				times=setInterval(Next,1000);
		}
		
	}
