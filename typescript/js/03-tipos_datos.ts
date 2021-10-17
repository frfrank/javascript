//string 
let cadena: string | number = "Francisco Luis";
// string | number --> esta expresion me permite decirle a la variable que puede aceptar esos dos tipos de datos
cadena = 50;
//Number

let numero: number =12;

//Valor de tipo booleano
let valorBoolean : boolean = true;

//valor de cualquier tipo
let cualquierValor : any = "cualquiercosa";

//arrays
var lenguajes: Array<string>  = ["php", "JS", "HTML"];

let years: number[] = [10,20,30,50]; //forma de aclarar un array de tipo collection

console.log(cualquierValor, lenguajes, years);