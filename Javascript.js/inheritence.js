class shape{
constructor(color){
    this.color=color;
}
paint(){
    console.log("Color of shape is "+ this.color)
}
area(){
    throw new Error('this is is error');
    
}
getdescription(){
    return 'a shape of color' + this.color;
}
}

const baba = new shape("blue")
console.log(baba.color)
const paint = baba.paint()
console.log(paint);
// const area = baba.area()
// console.log(area);
class Rectangle extends shape{
    constructor (width, height, color){
        this.width= width;
        this.height= height;
        super(color);
}
area(){
    const area = this.width*this.height;
    return area;
}
paint(){
    console.log("painting with color" + this.color)
}

}
class Circle extends shape {
    constructor(radius, color) {
        super(color);  // Call the parent class constructor to set the color
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    getDescription() {
        return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}


const circle = new Circle(20);
console.log(circle.area());

