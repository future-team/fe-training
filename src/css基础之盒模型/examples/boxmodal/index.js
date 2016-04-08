(function(w,d){

    var container = $('#container');

    var currentX = 0,
        currentY = 0,
        timeoutObj= null,
        isMove = false;

    var numx= 0,numy= 0;

    $('.stage').on({
        'mousedown':function(e){
            currentX = e.pageX;
            currentY = e.pageY;
            isMove = true;
        },
        'mouseup':function(e){
            isMove = false;
            console.dir('mouse-up');
        },
        'mousemove':function(e){
            if(isMove ){

                var x = e.pageX;
                var y = e.pageY;

                position(x,y);

            }

        }
    });

    var style = ['translateZ(125px)'];

    $('.a').dblclick(function(){
        style.push('scale(2,2)');
        container.css({
            transform:style.join(' ')
        });
        $(".box:not('.box2')").hide();
    });

    $(document.body).on('click',function(e){
        console.dir('document.body.click');
        console.dir(e.target);
        console.dir($(e.target).parents('.stage').size());
        if($(e.target).parents('.stage').size()<=0 ){
            $(".box:not('.box2')").show();
            style = style.filter(function(item){
                return item!='scale(2,2)';
            });
            container.css({
                transform:style.join(' ')
            });
        }
    });

    $('#showInfo').on('click',function(){
        $('.info').slideDown();
    });

    function position(x,y){

        if(!isMove){
            return false;
        }


        //判断方向
        if(x!=currentX){
            //往右
            if(currentX < x){
                numx += x-currentX;

            }else if(currentX > x){
                //往左
                numx -=currentX-x;
            }
            style = style.filter(function(item){
                return item.match('rotateY')==null;
            });
            style.push("rotateY("+numx+"deg)");
        }
        if(y!= currentY){
            if(currentY < y){
                //往上
                numy += y-currentY;
                //console.dir(-y);
            }else if(currentY > y){
                //往下
                numy -= currentY-y;
            }
            style = style.filter(function(item){
                return item.match('rotateX')==null;
            });
            style.push("rotateX("+numy+"deg)");
        }
        //transform:rotateY(360deg)
        if(style.length > 0){
            container.css({
                transform:style.join(' ')
            });

        }
    }

})(window,document);