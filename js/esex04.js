"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        _classCallCheck(this, Person);
    }

    _createClass(Person, [{
        key: "setDetails",
        value: function setDetails(pname, gender, age) {
            this.pname = pname;
            this.gender = gender;
            this.age = age;
        }
    }, {
        key: "getDetails",
        value: function getDetails() {
            console.log("name: " + this.pname + ",Gender: " + this.gender + ",Age:" + this.age);
        }
    }]);

    return Person;
}();

var p1 = new Person();
p1.setDetails("sony", "female", 20);
p1.getDetails();