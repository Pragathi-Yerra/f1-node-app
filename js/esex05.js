'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Customer = function () {
    function Customer(cname, city, email) {
        _classCallCheck(this, Customer);

        this.cname = cname;
        this.city = city;
        this.email = email;
    }

    _createClass(Customer, [{
        key: 'getDetails',
        value: function getDetails() {
            console.log('Name: ' + this.cname + ',city:' + this.city + ',email;' + this.email);
        }
    }]);

    return Customer;
}();

var c1 = new Customer('sony', 'mpl', 'ysspragathi@gmail.com');
var c2 = new Customer('mony', 'mgl', 'yssmony@gmail.com');
c1.getDetails();
c2.getDetails();