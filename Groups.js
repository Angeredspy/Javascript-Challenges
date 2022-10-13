/* 
    Define a Class Group. Group has 
    add, delete, and has methods. 
    Its constructor creates an empty group. An Add method adds 
    a value to the group, and a Delete method removes its 
    argument from the group and the 'has' method returns a Boolean 
    value indicating that the argument is a member of the group. 
    There is also a static (attached to the Class rather than instances of the Class) 
    'from' method that takes an iterable object, and creates a group 
    that has all the values produced from iterating over it.
*/ 

class Group {
    constructor () {
        this.group = [];
    }
    add(value) {
        if(!this.group.includes(value)) {
            this.group.push(value);
        }
    }
    delete(value){
        let index = this.group.indexOf(value);
        if (index !== -1) {
            this.group.splice(index, 1); 
        }
    }
    has(value) {
        return this.group.includes(value)
    }
    static from(iterable){
        let g = new Group();
        for (let everything of iterable) {
            g.add(everything)
        }
        return g;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));