
window.onload = function () {


    /******************获取元素高度函数*****************/
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }


    var wrapper = document.getElementsByClassName('wrapper')[0],
        top = document.getElementById('header'),
        myCanvas = document.getElementsByClassName('myCanvas'),
        concern = document.getElementById('concern'),
        skill = document.getElementById('skill'),
        experience = document.getElementById('experience'),
        contact = document.getElementById('contact').getElementsByClassName('container')[0],
        icon = document.getElementsByClassName('icon')[0],
        imag = document.getElementById('imag'),
        nabItem = document.getElementsByClassName('nav-item')[0],
        navAbout = document.getElementsByClassName('about')[0],
        nabList = document.getElementsByClassName('nab-list')[0],
        nabItems = document.getElementsByClassName('navNab')[0],
        index = 0,
        navList = nabList.children,
        navListLen = navList.length,
        navItem = nabItems.children,
        navItemLen = navItem.length;


    var flag;

    var /*topPart = top.offsetHeight,
        concernPart = concern.offsetTop,
        skillPart = skill.offsetTop,
        experiencePart = experience.offsetTop,
        contactPart = wrapper.offsetHeight,
        headerPart = 0;*/
        topPart = top.scrollTop,
        concernPart = concern.scrollTop,
        skillPart = skill.scrollTop,
        experiencePart = experience.scrollTop,
        contactPart = wrapper.scrollTop,
        headerPart = 0;
        arr = [headerPart, concernPart, skillPart, experiencePart, contactPart];

    /**************************画布函数****************/
    function circleProgress(value, average, myCanvas) {
        var canvas = myCanvas,
            context = canvas.getContext('2d');
        var _this = $(canvas),
            value = Number(value),  //当前百分比，数值
            average = Number(average), //平均百分比
            color = '', //进度条，文字样式
            maxPercent = 100, //最大百分比，可设置
            c_width = _this.width(), //canvas， 宽度
            c_height = _this.height(); //canvas， 高度

        //判断设置当前显示颜色
        if (value == maxPercent) {
            color = '#29c9ab';
        } else if (value > average) {
            color = '#27b5ff';
        } else {
            color = '#ff6100';
        }

        //清空画布
        context.clearRect(0, 0, c_width, c_height);
        //画初始图
        context.beginPath();
        //将起始点移到canvas 中心
        context.moveTo(c_width / 2, c_height / 2);
        //绘制一个中心点为（c_width / 2, c_height / 2），半径为 c_height / 2，起始点为 0，终止点为 Math.PI * 2 的整圆
        context.arc(c_width / 2, c_height / 2, c_height / 2, 0, Math.PI * 2, false);
        //结束画制
        context.closePath();

        //填充颜色
        context.fillStyle = '#ddd';
        context.fill();

        //绘制内圆
        context.beginPath();
        context.strokeStyle = color;
        context.lineCap = 'square';
        context.closePath();
        context.fill();
        //绘制内圆的线宽度
        context.lineWidth = 10.0;

        function draw(cur) {
            //画内部空白
            context.beginPath();
            context.moveTo(24, 24);
            context.arc(c_width / 2, c_height / 2, c_height / 2 - 10, 0, Math.PI * 2, true);
            context.closePath();
            //填充内部颜色
            context.fillStyle = 'rgba(255, 255, 255, 0.1)';
            context.fill();


            //画内圆
            context.beginPath();
            //绘制一个中心点为（c_width / 2, c_height / 2), 半径为 c_height / 2 - 5不与外圆重叠，
            //起始点 -（Math.PI / 2）， 终止点为((Math.PI * 2) * cur) - Math.PI / 2 的整圆，cur为每一次绘制的距离。
            context.arc(c_width / 2, c_height / 2, c_height / 2 - 5, -(Math.PI / 2), ((Math.PI * 2) * cur) - Math.PI / 2, false);
            context.stroke();

            //在中间写字
            //字体大小样是
            context.font = 'bolder 30px Arial';
            //字体颜色
            context.fillStyle = color;
            //字体位置
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            //文字填充位置
            context.moveTo(c_width / 2, c_height / 2);
            context.fillText(value + '%', c_width / 2, c_height / 2);
        }

        //调用定时器实现动态
        var timer = null,
            n = 0;

        function loadCanvas(nowT) {
            timer = setInterval(function () {
                if (n > nowT) {
                    clearInterval(timer);
                } else {
                    draw(n);
                    n += 0.01;
                }
            }, 15);
        }

        loadCanvas(value / 100);
        timer = null;
    }


    window.onscroll = function () {

        
        
        /**************************导航固定****************/
        if (scroll().top >= topPart) {
            nabItem.className = ' active fixed';
            navAbout.style.paddingTop = nabItem.offsetHeight + 'px';
        } else {
            nabItem.className = '';
            navAbout.style.paddingTop = 0;
            /*console.log(arr);*/
        }

        /**************************Canvas 区****************/
        flag = true;
        if (scroll().top >= skillPart) {
            if (flag) {
                circleProgress(80, 50, myCanvas[0]);
                circleProgress(70, 50, myCanvas[1]);
                circleProgress(80, 50, myCanvas[2]);
                circleProgress(80, 50, myCanvas[3]);
                circleProgress(80, 50, myCanvas[4]);
                circleProgress(80, 50, myCanvas[5]);
                circleProgress(80, 50, myCanvas[6]);
                circleProgress(80, 50, myCanvas[7]);
                circleProgress(80, 50, myCanvas[8]);
                circleProgress(80, 50, myCanvas[9]);
                circleProgress(50, 50, myCanvas[10]);
                flag = false;
            }
        } else {
            flag = true;
        }

        /*console.log(navItem[0]);*/


        /**************************滚动改变导航栏 区****************/
        for (var i = 0; i < navItemLen; i++) {

            if (scroll().top >= arr[i]) {
                for (var j = 0; j < navItemLen; j++) {
                    navList[j].className = '';
                    navItem[j].className = '';
                    /*console.log(navItem[j]);*/
                }
                navList[i].className = 'active';
                navItem[i].className = 'active';

            }
        }
    };
    

   
        

        for (var i = 0; i < navListLen; i++) {
           /* console.log(navList[i]);*/
            navList[i].n = i;
            navItem[i].m = i;
            navList[i].onclick = function () {
                index = this.n;
                for (var j = 0; j < navListLen; j++) {
                    navList[j].className = '';
                    navItem[j].className = '';
                    /*console.log(navList[j]);*/
                }
                navList[index].className = 'active';
                navItem[index].className = 'active';
               window.scrollTo(0,arr[index]);
            };
        
            navItem[i].onclick = function () {
                index = this.m;
                for (var j = 0; j < navItemLen; j++) {
                    navList[j].className = '';
                    navItem[j].className = '';
                    console.log(navList[j]);
                }
                navList[index].className = 'active';
                navItem[index].className = 'active';
               /* console.log(icon);*/
                window.scrollTo(0,arr[index]);
                console.log(arr[index],index);
            };
            
            }
    
    
        icon.onclick = function () {
            flag = true;
            if (flag) {
                imag.className = '';
                flag = false;
                console.log(flag)
            }
            if (!flag) {
                imag.className = 'active';
                flag = true;
                console.log(2)
            }


        }
    
};



