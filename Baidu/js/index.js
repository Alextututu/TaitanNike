$(function(){
	$(".oppo").click(function(){
		/*点击父元素oppo查找子元素class submenu并展开并找到父元素的同级元素下已展开的ul关闭  并同时做动画重复bug处理*/
		$(this).children(".submenu").stop(true, false).slideToggle().parent().siblings().children(".submenu").slideUp();
		/*找到当前子元素下的第一个i标签并添加一个rotate的旋转90度样式同时并移除其另外一个旋转样式*/
		$(this).find("i:first-child").removeClass("rotate1").addClass("rotate");
		/*找到兄弟元素下的第一个i标签移除掉90度旋转样式并恢复原本样式*/
		$(this).siblings().find("i:first-child").removeClass("rotate").addClass("rotate1");
	});
});
