window.onload = function() {
    //获取发送按钮的ID
    var Sendout = document.getElementById("iPhone_Sendout");
    //获取输入框ID
    var Cose = document.getElementById("iPhone_Cose");
    //获取角色切换img的ID
    var Role = document.getElementById("iPhone_role");
    //获取聊天显示框ID
    var Square = document.getElementById("iPhone_square");
    //绑定焦点
    Cose.focus();
    //添加信息方法
    function Bindin() {
        //获取输入框的文字内容
        var str = Cose.value;
        if (Role.className == "one") {
            Square.innerHTML = '<p id="Cose_one"><img src="img/lico.png" /><img class="Arrow" src="img/l01.png" /><div class="Cose_div">' + str + '</div></p>' + Square.innerHTML;
            Cose.value = ""; //文本框清空
            Square.scrollTop = 0; //将滚动条置顶
            Cose.focus();//聚焦
        } else {
            Square.innerHTML = '<p id="Cose_two"><img src="img/rico.png" /><img class="Arrow2" src="img/r02.png" /><div class="Cose_div2">' + str + '</div></p>' + Square.innerHTML;
            Cose.value = "";//文本框清空
            Square.scrollTop = 0; //将滚动条置顶
            Cose.focus();//聚焦
        }
    }

    //回车键触发事件，如果用户按下回车键那么同样生成信息
    document.onkeydown = function(e) {
        e = e || event; //暂时解决火狐浏览器下回车键判断错的问题
        if (e.keyCode == 13) {
            //判断角色class
            if (Cose.value == "") {
                alert("输点内容吧亲！");
                Cose.focus();//聚焦
            } else {
                Bindin();
            }
        }
    }

    //鼠标点击发送按钮的时候生成信息
    Sendout.onclick = function() {
        //判断角色class
        if (Cose.value == "") {
            alert("输点内容吧亲！");
            Cose.focus();
        } else {
            Bindin();
        }
    };

    //点击角色切换按钮的时候
    Role.onclick = function() {
        //先判断img的class
        if (Role.className == "one") {
            Role.src = "img/rico.png";
            Role.className = "two";
            Cose.focus();//聚焦
        } else {
            Role.src = "img/lico.png";
            Role.className = "one";
            Cose.focus();//聚焦
        }
    };
};