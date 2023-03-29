var Cat = /** @class */ (function () {
    function Cat(_name) {
        this._name = _name;
    }
    Cat.prototype.sayMyName = function () {
        console.log("My name is " + this._name);
    };
    return Cat;
}());

var myCat = new Cat("blinky");
console.log(myCat.sayMyName());
console.log(myCat);
