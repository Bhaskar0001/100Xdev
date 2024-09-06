class Rectangle{
    constructor (width, height, color){
        this.width= width;
        this.height= height;
        this.color = color;
}
area(){
    const area = this.width*this.height;
    return area;
}
paint(){
    console.log("painting with color" + this.color)
}
destroy(){

}
}

const rect = new Rectangle(2,4, "blue")
console.log(rect.width)
const area = rect.area();
const paint = rect.paint();
rect.destroy();
console.log(area)