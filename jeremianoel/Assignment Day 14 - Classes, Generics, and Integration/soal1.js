"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFullName = function (person) {
    var hasilConcatenasi = person.firstName + " " + person.lastName;
    return hasilConcatenasi;
};
console.log(getFullName({
    firstName: "Jeremia",
    lastName: "Noel"
}));
