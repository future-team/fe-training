$('document').ready(
    function () {
        //绑定a事件：
        function bindevents() {
            var links = $('.block a'),
                parentDiv = $('.parentDiv');
            links.on('click', function (e) {
                var num = $(this).attr('data-num');
                console.log(num);
                num && e.preventDefault();
                switchHandler(num);
            });
            parentDiv.on('mouseover', function (e) {
                var currentNode = $(e.target);
                currentNode.css('background', 'red');
                currentNode.parent().css('background', 'blue');
                currentNode.children().css('background', 'green');
                currentNode.prev().css('background', 'yellow');
                currentNode.next().css('background', 'pink');
            });
            parentDiv.on('mouseout', function (e) {
                var currentNode = $(e.target);
                $('.node-demo').css('background', '#fff');
            });

        }

        //插入操作
        function operationDom(num) {
            var parentNode = $('.doPDiv')[0],
                childNode = $('.childPA')[0],
                insertNode = $('.childPB')[0];
            switch (num) {
                case 1:
                    parentNode.appendChild(insertNode);
                    break;
                case 2:
                    parentNode.insertBefore(insertNode, childNode);
                    break;
                case 3:
                    parentNode.replaceChild(insertNode, childNode);
                    break;
                case 4:
                    parentNode.removeChild(insertNode);
                    break;
                case 5:
                    var a = parentNode.cloneNode(false);
                    parentNode.appendChild(a);
            }
        }
        //获得偏移量，flag ＝＝true？ left：top
        function getOffDir(ele,flag){
            var dir = flag?'offsetLeft':'offsetTop';
            var actuDir = ele[dir],
                current = ele.offsetParent;
            if(current != null){
                actuDir = actuDir + current[dir];
                current = current.offsetParent;
            }
            return actuDir;
        }
        //偏移量计算
        function getOffset(num) {
            var div = document.getElementById('offsetDiv');

            var clientHeight = div.clientHeight;
            var clientWidth = div.clientWidth;
            div.innerHTML += 'clientHeight: ' + clientHeight + '<br/>';
            div.innerHTML += 'clientWidth: ' + clientWidth + '<br/>';

            var clientLeft = div.clientLeft;
            var clientTop = div.clientTop;
            div.innerHTML += 'clientLeft: ' + clientLeft + '<br/>';
            div.innerHTML += 'clientTop: ' + clientTop + '<br/>';

            var offsetHeight = div.offsetHeight;
            var offsetWidth = div.offsetWidth;
            div.innerHTML += 'offsetHeight: ' + offsetHeight + '<br/>';
            div.innerHTML += 'offsetWidth: ' + offsetWidth + '<br/>';

            var offsetLeft = div.offsetLeft;
            var offsetTop = div.offsetTop;
            div.innerHTML += 'offsetLeft: ' + offsetLeft + '<br/>';
            div.innerHTML += 'offsetTop: ' + offsetTop + '<br/>';

            var offsetParent = div.offsetParent;
            div.innerHTML += 'offsetParent: ' + offsetParent.id + '<br/>';
            var left = getOffDir(div,true);
            div.innerHTML += 'left: ' + left + '<br/>';
            var top = getOffDir(div,false);
            div.innerHTML += 'top: ' + top + '<br/>';
        }

        //getAttribute使用
        function getAttr(num) {
            var divNode = document.getElementById('attr');
            switch (num) {
                case 1:
                    divNode.innerHTML="id:"+divNode.getAttribute('id');
                    break;
                case 2:
                    //CSS返回的是字符串，而直接访问属性得到的是对象
                    divNode.innerHTML="style:"+divNode.getAttribute('style');
                    break;
            }
        }
        //动态加载js
        function loadJs(url){
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            document.body.appendChild(script);
        }
        function classL(flag){
            var div = document.querySelector('.aa');
            if(flag){
                div.classList.add('in');
                div.innerHTML = div.classList;
            }else{
                div.classList.remove('in');
                div.innerHTML = div.classList;
            }
        }

        //回流和重绘
        function reflow(){
            var s = document.body.style;
            s.padding = "2px"; // 回流+重绘
            s.border = "1px solid red"; // 再一次 回流+重绘
            s.color = "blue"; // 再一次重绘
            s.backgroundColor = "#ccc"; // 再一次 重绘
            s.fontSize = "14px"; // 再一次 回流+重绘
            // 不好的写法
            var left = 1;
            var top = 1;
            var el = $('.a');
            el.style.left = left + "px";
            el.style.top = top + "px";// 比较好的写法
            el.className += " className1";
            // 比较好的写法
            el.style.cssText += "left:" + left + "px top: " + top + "px";
            // 别这样写
            /*for(i<0) {
                el.style.left = el.offsetLeft + 5 + "px";
                el.style.top = el.offsetTop + 5 + "px";
            }*/

            // 这样写好点
            /*var left = el.offsetLeft,
                top = el.offsetTop,
                s = el.style;
            for (循环) {
                left += 10;
                top += 10;
                s.left = left + "px";
                s.top = top + "px";
            }*/
        }
        //遍历
        function iterator(){
            var div = $('.iter')[0];
            var iterator = document.createNodeIterator(div,NodeFilter.SHOW_ELEMENT,null,false);
            var node = iterator.nextNode();
            while(node != null){
                console.log(node.className);
                node = iterator.nextNode();
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
                case '2_1':
                    operationDom(1);
                    break;
                case '2_2':
                    operationDom(2);
                    break;
                case '2_3':
                    operationDom(3);
                    break;
                case '2_4':
                    operationDom(4);
                    break;
                case '2_5':
                    operationDom(5);
                    break;
                case '1_8':
                    operationDom(6);
                    break;
                case '3_1':
                    getOffset(1);
                    break;
                case '4_1':
                    //此处</script>要用＋分开写，否则会被认为是script代码块的结束
                    document.write("<sript><type=\"text/javascript\" src=\"a.js\">" + "</script>");
                    break;
                case '5_1':
                    getAttr(1);
                    break;
                case '5_2':
                    getAttr(2);
                    break;
                case '5_3':
                    //有空白间隔会默认有text子节点，ie中会忽略
                    alert($('.nodsNum1')[0].childNodes.length);
                    break;
                case '5_4':
                    //没有间隔，都忽略空白text
                    alert($('.nodsNum2')[0].childNodes.length);
                    break;
                case '5_5':
                    //分割text
                    $('.attrs')[0].childNodes[0].splitText(5);
                    break;
                case '5_6':
                    //合并text
                    $('.attrs')[0].normalize();
                    break;
                case '6_1':
                    loadJs('a.js');
                    break;
                case '6_3':
                    classL(true);
                    break;
                case '6_4':
                    classL(false);
                    break;
                case '6_5':
                    iterator();
                    break;
            }
        }


        bindevents();
    }
);