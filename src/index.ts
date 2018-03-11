interface Persona {
    nombre:string;
}

class App implements Persona {
    
    nombre:string;
    
    constructor(n:string){
        this.nombre = n;
    }
    
    
    public getNombre():string {
        return this.nombre;
    }
}

let persona = new App("Y4k")

console.log(persona.getNombre())

