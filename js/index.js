
// ------------------此部分用于操作导航栏样式------------------
var fr = document.querySelector('.fr');
var fr_list = fr.querySelectorAll('li');
for (var i=0;i<fr_list.length;i++){
    fr_list[i].onmouseover = function(){
        for(var j=0;j<fr_list.length;j++){
            fr_list[j].className = '';
        }
        this.className = 'shadow';
}}


// ---------------此部分用于操作课程选择界面--------------------
var tab_list = document.querySelector('.coursetypes'); //首先获取整个导航栏对象
var lis = tab_list.querySelectorAll('li'); //获取每个点击按钮的内容
var courselist = ['courseitem','HTML','CSS','JavaScript'];
var items = document.querySelectorAll('.coursecontent li')
var yearItems = document.querySelector('.yearItems');



for (var i = 0; i < lis.length; i++) {
    // if (yearItems.style.display = 'block') {
    //     console.log(1);
    //     yearItems.style.display = "none";
    // }
    // 开始给5个小li 设置索引号 
    lis[i].setAttribute('index', i);
    lis[i].onmouseover = function() {
        // 1. 上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式
        // 干掉所有人 其余的li清除 class 这个类
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        // 留下我自己 
        this.className = 'thiscourse';
        // 2. 下面的显示内容模块
        var index = this.getAttribute('index');
        var coursename = courselist[index];

        // 干掉所有人 让其余的item 这些div 隐藏
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        
        // 留下我自己 让对应的item 显示出来
        for (var i = 0; i < items.length; i++) {
            var itemClassNames = items[i].getAttribute('class').split(' ');
            for (var j=0;j < itemClassNames.length;j++) {
                // console.log(itemClassNames[j]);
                if (itemClassNames[j] === coursename){
                    items[i].style.display = 'block';
                    break;
                }
            } 
        }

    }
}

// ---------------此部分用于操作年份选择界面--------------------
var yearnum = document.querySelector('.yearnum');
var yearItems = document.querySelector('.yearItems');
var a = yearItems.querySelectorAll('a');
// console.log(a.length);
// 注册事件
yearnum.onmouseover= function () {
    this.style.backgroundColor = '#fff';
    this.style.borderRadius = '10px 10px 10px 0';
    yearItems.style.display = "block";
    if (school.style.display==='block') {
        school.style.display='none';
        schoolnum.style.borderRadius = '10px 10px 10px 10px';
        schoolnum.style.backgroundColor = '#eee';
    }
}

yearnum.onmousemove = function() {
    for (var i=0; i<a.length;i++){
        a[i].onclick = function(e){
            yearnum.innerHTML = this.innerHTML;
            yearItems.style.display = "none";
            yearnum.style.borderRadius = '10px 10px 10px 10px';
            yearnum.style.backgroundColor = '#eee';
            e.stopPropagation(); //阻止事件冒泡
        }

        a[i].onmouseover = function() {
            for(var j=0;j<a.length;j++){
                a[j].className = '';
            }
            this.className = '.currentyear';

        }
    }
}

yearnum.onmouseout = function() {
    document.onclick = function() {
        yearItems.style.display = "none";
        yearnum.style.borderRadius = '10px 10px 10px 10px';
        yearnum.style.backgroundColor = '#eee';
        school.style.display='none';
        schoolnum.style.borderRadius = '10px 10px 10px 10px';
        schoolnum.style.backgroundColor = '#eee';
    }
}


// ---------------此部分用于操作学校选择界面--------------------
var school = document.querySelector('.school')
var school_th = document.querySelector('.school-th');
var school_list = school_th.querySelectorAll('li a');
var schoolitems = document.querySelectorAll('.item');
var schoolnum = document.querySelector('.schoolnum');

schoolnum.onmouseover= function () {
    this.style.backgroundColor = '#fff';
    this.style.borderRadius = '10px 10px 10px 0';
    school.style.display='block';
    if (yearItems.style.display==='block') {
        yearItems.style.display = "none";
        yearnum.style.borderRadius = '10px 10px 10px 10px';
        yearnum.style.backgroundColor = '#eee';
    }
}

schoolnum.onmousemove = function() {
    //第一次是北京
    var school_item1 = schoolitems[0].querySelectorAll('a');
    for (var i=0; i<school_item1.length;i++){
        school_item1[i].onclick = function(){
            schoolnum.innerHTML = this.innerHTML;
            school.style.display='none';
            schoolnum.style.borderRadius = '10px 10px 10px 10px';
            schoolnum.style.backgroundColor = '#eee';
        }
    }

    // for循环绑定点击事件
    for (var i = 0; i < school_list.length; i++) {
        // 开始给5个小li 设置索引号 
        school_list[i].setAttribute('index', i);
        school_list[i].onclick = function(e) {
            // 1. 上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式
            // 干掉所有人 其余的li清除 class 这个类
            for (var i = 0; i < school_list.length; i++) {
                school_list[i].className = '';
            }
            // 留下我自己 
            this.className = 'currentschool';
            // 2. 下面的显示内容模块
            var index = this.getAttribute('index');
            // 干掉所有人 让其余的item 这些div 隐藏
            for (var i = 0; i < schoolitems.length; i++) {
                schoolitems[i].style.display = 'none';
            }
            // 留下我自己 让对应的item 显示出来
            schoolitems[index].style.display = 'block';
            var school_items = schoolitems[index].querySelectorAll('a');
            for (var i=0; i<school_items.length;i++){
                school_items[i].onclick = function(e){
                    // console.log(this.innerHTML);
                    schoolnum.innerHTML = this.innerHTML;
                    school.style.display='none';
                    schoolnum.style.borderRadius = '10px 10px 10px 10px';
                    schoolnum.style.backgroundColor = '#eee';

                }
            }
            e.stopPropagation(); //阻止事件冒泡
        }
    }


}

schoolnum.onmouseout = function() {
    document.onclick = function() {
        yearItems.style.display = "none";
        yearnum.style.borderRadius = '10px 10px 10px 10px';
        yearnum.style.backgroundColor = '#eee';
        school.style.display='none';
        schoolnum.style.borderRadius = '10px 10px 10px 10px';
        schoolnum.style.backgroundColor = '#eee';
    }
}

// ---------------此部分用于操作邮箱验证界面--------------------
var btn = document.querySelector('.btn');
var email = document.getElementById("email");
var messageWrong = document.querySelector('.messageWrong')
var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
btn.onclick = function(){
    console.log(email.value);
    var flag = reg.test(email.value)
    if(!flag) {
        messageWrong.style.display = 'block';
        messageWrong.style.backgroundColor = '#FF969A';
        messageWrong.innerHTML = '邮箱地址不符合要求(' + email.value + '),请重新确认';
        setTimeout(function() {
            messageWrong.style.display = 'none';
        }, 3000);
    }
    else {
        var LoginRight = document.querySelector('.LoginRight');
        var Login = document.querySelector('.Login');
        var messageRight = document.querySelector('.messageRight');
        Login.style.display = 'none';
        LoginRight.style.display = 'block';
        messageRight.style.display = 'block';
        messageRight.innerHTML = '恭喜你，来自' + schoolnum.innerHTML + ' ' +
        yearnum.innerHTML + ' ' + email.value + '同学，您的报名信息已记录，请' + 
        '关注您的邮件';
        setTimeout(function() {
            messageRight.style.display = 'none';
        }, 5000);

        var loginAgain = document.querySelector('.loginAgain');
        loginAgain.onclick = function() {
            Login.style.display = 'block';
            LoginRight.style.display = 'none';
            messageWrong.style.display = 'none';
        }
    }
}
