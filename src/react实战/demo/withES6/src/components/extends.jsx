class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toString(){
        return('x:'+this.x+' ; y:'+this.y);
    }
}
export default class ColorPoint extends Point{
    constructor(x,y,color){
        super(x,y);
        this.color=color;
    }
    toString(){
       return super.toString()+' ;color:'+this.color;
    }
}