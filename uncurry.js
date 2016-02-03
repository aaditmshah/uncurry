(function (global, factory) {
    if (typeof define === "function" && define.amd) define(factory);
    else if (typeof module === "object") module.exports = factory();
    else global.$ = factory();
}(this, function () {
    "use strict";

    var $ = function (func) {
        return function () {
            var index  = 0;
            var result = func;
            var length = arguments.length;
            while (index < length) result =
                result(arguments[index++]);
            return result;
        };
    };

    return $;
}));
