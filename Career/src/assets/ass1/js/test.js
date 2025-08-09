var person = /** @class */ (function () {
    function person(fName, lName, age) {
        this.fName = '';
        this.lName = '';
        this.age = 0;
        console.log(this.fName, this.lName, this.age);
    }
    return person;
}());
var person1 = new person("sara", "sara", 20);
person1.fName = "haneen";
person1.lName = "jaradat";
person1.age = 23;
var user = /** @class */ (function () {
    function user(fName, lName, password, age, adderss) {
        this.fName = '';
        this.lName = '';
        this.password = '';
        this.age = 0;
        this.address = '';
        this.dob = new Date;
        console.log(this.fName, this.lName, this.password, this.age, this.address);
    }
    user.prototype.print = function () {
        console.log(this.fName, this.lName, this.password, this.age, this.address);
    };
    return user;
}());
var user1 = new user("sara", "sara", "hhhhhh", 22, "irbid");
var user2 = {
    fName: '',
    lName: ''
};
console.log(user2);
