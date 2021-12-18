'use strict';

var obj = {
    firstName: 'Tarun',
    lastName: 'Chabarwal',
    
    set fullName(name) {
        let parts = name.split(" ")
        this.firstName = parts[0]
        this.lastName = parts[1]
    },

    get fullName() {
        return this.firstName + " " + this.lastName
    }
}

console.log(`firstname: ${obj.firstName}, lastName: ${obj.lastName}`);

console.log(obj.fullName)
obj.fullName = "Ram Singh"
console.log(obj.fullName)
console.log(`firstname: ${obj.firstName}, lastName: ${obj.lastName}`);