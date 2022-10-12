/* 
    Write a Class Vec that represents
    a vector in 2D space. It takes x & y 
    parameters and saves them to properties of the same name.
    The prototype should have two methods, plus and minus
    that take another vector as a parameter & return
    a new vector that has the sum or diff
    of the two vectors' x & y values. 
    A getter property length finds the length
    of the vector point (x,y) from its origin.
*/ 

class Vec {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y)
    }
    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y)
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

console.log()