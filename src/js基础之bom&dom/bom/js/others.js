/**
 * Created by panqianjin on 16/4/15.
 */
$('document').ready(
    function () {
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

        //改变url
        function changeUrl(num) {
            var url = $('#url').val();
            switch (num) {
                case 1:
                    location.assign(url);
                    break;
                case 2:
                    location.href = url;
                    break;
                case 3:
                    location.pathname = url;
                    break;
                case 4:
                    location.host = url;
                    break;
                case 5:
                    location.search = url;
                    break;
                case 6:
                    location.replace(url);
                    break;
            }
        }

        //history事件
        function hsiHandler(num) {
            switch (num) {
                case 1:
                    //history.go(-1);
                    history.back();
                    break;
                case 2:
                    history.go(1);
                    //history.forward();
                    break;
                case 3:
                    history.go(-2);
                    break;
                case 4:
                    history.go(2);
                    break;
            }
        }

        //根据不同情况匹配侧边栏
        function activeLi(url) {
            $('.active').removeClass('active');
            if (url) {
                var items = location.pathname.split('/');
                var length = items.length;
                var activeLi = items[length-1];
                $('li a').each(function(index,val){
                    if(activeLi == $(val).attr('href')){
                        $(val).addClass('active');
                    }
                });
            } else {
                var keys = location.search;
                var activeLi = keys.split('=')[1];
                $('li a').each(function(index,val){
                    if(activeLi == $(val).attr('data-key')){
                        $(val).addClass('active');
                    }
                });
            }
        }

        //分发事件
        function switchHandler(num) {
            switch (num) {
                case '1_1':
                    alert('文件路径:' + location.pathname);
                    break;
                case '1_2':
                    alert('查询字符:' + location.search);
                    break;
                case '1_3':
                    changeUrl(1);
                    break;
                case '1_4':
                    changeUrl(2);
                    break;
                case '1_5':
                    changeUrl(3);
                    break;
                case '1_6':
                    changeUrl(4);
                    break;
                case '1_7':
                    changeUrl(5);
                    break;
                case '1_8':
                    changeUrl(6);
                    break;
                case '3_1':
                    hsiHandler(1);
                    break;
                case '3_2':
                    hsiHandler(2);
                    break;
                case '3_3':
                    hsiHandler(3);
                    break;
                case '3_4':
                    hsiHandler(4);
                    break
                case '4_1':
                    activeLi(true);
                    break;
                case '4_2':
                    activeLi(false);
                    break;
            }
        }
        //document.write("<script type=\"text/javascript\" src=\"a.js\">"+"</script>");
        bindevents();
    }
)
;