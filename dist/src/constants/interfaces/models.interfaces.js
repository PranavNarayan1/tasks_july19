"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REQUEST_STATUS = exports.ACTION_TYPE = void 0;
var ACTION_TYPE;
(function (ACTION_TYPE) {
    ACTION_TYPE["LIKE"] = "LIKE";
    ACTION_TYPE["COMMENT"] = "COMMENT";
})(ACTION_TYPE || (exports.ACTION_TYPE = ACTION_TYPE = {}));
var REQUEST_STATUS;
(function (REQUEST_STATUS) {
    REQUEST_STATUS["PENDING"] = "PENDING";
    REQUEST_STATUS["ACCEPTED"] = "ACCEPTED";
    REQUEST_STATUS["REJECTED"] = "REJECTED";
})(REQUEST_STATUS || (exports.REQUEST_STATUS = REQUEST_STATUS = {}));
