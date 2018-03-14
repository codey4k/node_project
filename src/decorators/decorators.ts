export default function ClassDecorator(target:Function) {
    target.prototype.saludo = function():void {
        console.log('Hello ' + this.nombre);
    }
}