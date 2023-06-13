"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Myclass = function () {
    function Myclass() {
        _classCallCheck(this, Myclass);
    }

    _createClass(Myclass, [{
        key: "mymethod",
        value: function mymethod() {
            console.log("hello from method 1..");
        }
    }]);

    return Myclass;
}();

var o1 = new Myclass();
o1.mymethod();