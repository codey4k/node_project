export default function ClassDecorator(target:Function) {
    return target.prototype.saludo = function() {
        console.log('Hello ' + this.nombre);
    }
}