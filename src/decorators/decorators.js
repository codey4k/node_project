"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ClassDecorator(target) {
    return target.prototype.saludo = function () {
        console.log('Hello ' + this.nombre);
    };
}
exports.default = ClassDecorator;
