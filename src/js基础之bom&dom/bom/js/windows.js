/**
 * Created by panqianjin on 16/4/13.
 */
var block_a = '1',
    we = '2';
$('document').ready(
    function () {
        var obj = {
            name: 'test',
            init: function () {
                alert(this.name);
            }
        };
        //绑定a事件：
        function bindevents() {
            var links = $('.block a'),
                winDiv = $('.open-win');
            links.on('click', function (e) {
                var num = $(this).attr('data-num');
                num && e.preventDefault();
                switchHandler(num);

            });
            winDiv.on('click', function (e) {
                var num = $(this).attr('data-num');
                switchHandler(num);
            });
        }

        function deleteObj(isWindow) {
            window.block_b = '2';
            var flag = isWindow;
            if (!flag) {
                return delete we;
            } else {
                return delete window.block_b;
            }
        }

        function operation(method) {
            switch (method) {
                case 1:
                    window.moveTo(300, 400);
                    break;
                case 2:
                    window.moveBy(300, 400);
                    break;
                case 3:
                    window.resizeTo(100, 100);
                    break;
                case 4:
                    window.resizeBy(100, 100);
                    break;
            }
        }

        function viwObj(isWindow) {
            if (isWindow) {
                return b;
            } else {
                return window.b;
            }
        }

        function openWin(flag) {
            //不同情况对应不同方式
            switch (flag) {
                case 1:
                    window.open("http://www.baidu.com/", "_self");
                    break;
                case 2:
                    window.open("http://www.baidu.com/", "_blank");
                    break;
                case 3:
                    ajaxOpen(false);
                    break;
                case 4:
                    ajaxOpen(true);
                    break;
            }
        }

        //ajax掩饰执行
        function ajaxOpen(flag) {
            if (flag) {
                var newTab = window.open('about:blank');
            }
            $.ajax({
                url: "../../mock/index",
                data: {},
                type: "GET",
                dataType: 'json',
                success: function (json) {
                    if (flag) {
                        newTab.location.href = 'http://www.baidu.com/';
                    } else {
                        window.open("http://www.baidu.com/", "_blank");
                    }

                }
            });
        }

        //超时调用
        function timeOut(flag) {
            var timeoutId = setTimeout(function () {
                alert('100ms后执行该方法');
            }, 100);
            flag && clearTimeout(timeoutId);
        }

        var num = 0;
        var flags = false;
        //间歇调用
        function interval() {
            num++;
            if (flags) {
                clearInterval(intervalId);
            } else if (num < 3) {
                console.log('第' + num + '次执行')
            }else{
                clearInterval(intervalId);
            }

        }

        function inteHandler(flag) {
            num = 0;
            intervalId = setInterval(interval.bind(flag), 100);
        }
        function alerts(type){
            switch (type) {
                case 'alert':
                    alert('这是一个系统'+type+'提示框。。。');
                    break;
                case 'confirm':
                    confirm('这是一个系统'+type+'提示框。。。');
                    break;
                case 'prompt':
                    prompt('这是一个系统'+type+'提示框。。。');
                    break;
            }
        }
        var intNum = 3;
        function inter(){
            intNum--;
            if(intNum > 0){
                $('a[data-num="6_2"]').text('倒计时'+intNum+'秒');
            }else{
                $('.tip-2').css({display:'none'});
                $('a[data-num="6_2"]').text('点击显示提示，3秒后消失');
                clearInterval(interVal);
            }

        }
        //n秒后消失
        function showInfo(isShow){
            if(!isShow){
                var tip1 = $('.tip-1');
                tip1.css({display:'inline-block'});
                setTimeout(function(){
                    tip1.css({display:'none'});
                },3000);
            }else{
                var tip2 = $('.tip-2'),
                    num = 3,
                    link = $('a[data-num="6_2"]');
                tip2.css({display:'inline-block'});
                interVal = setInterval(inter,1000);
            }
        }


        //分发事件
        function switchHandler(num) {
            switch (num) {
                case '1_1':
                    alert('直接访问block_a:' + block_a);
                    break;
                case '1_2':
                    alert('访问window.block_a:' + window.block_a);
                    break;
                case '1_3':
                    alert('delete 变量 we:' + deleteObj(false));
                    break;
                case '1_4':
                    alert('delete window.block_b:' + deleteObj(true));
                    break;
                case '2_1':
                    operation(1);
                    break;
                case '2_2':
                    operation(2);
                    break;
                case '2_3':
                    operation(3);
                    break;
                case '2_4':
                    operation(4);
                case '3_1':
                    openWin(1);
                    break;
                case '3_2':
                    openWin(2);
                    break;
                case '3_3':
                    openWin(3);
                    break;
                case '3_4':
                    openWin(4);
                    break
                case '4_1':
                    timeOut(false);
                    break;
                case '4_2':
                    timeOut(true);
                    break;
                case '4_3':
                    flags = false;
                    inteHandler(false);
                    break;
                case '4_4':
                    flags = true;
                    inteHandler(true);
                    break;
                case '5_1':
                    alerts('alert');
                    break;
                case '5_2':
                    alerts('confirm');
                    break;
                case '5_3':
                    alerts('prompt');
                    break;
                case '6_1':
                    showInfo(false);
                    break;
                case '6_2':
                    showInfo(true);
                    break;
            }
        }

        bindevents();
    }
)
;