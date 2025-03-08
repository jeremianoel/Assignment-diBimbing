"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFullName = function (person) {
    return person.firstName + " " + person.lastName;
};
console.log(getFullName({
    firstName: "Jeremia",
    lastName: "Noel"
}));
