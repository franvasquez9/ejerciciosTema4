//Ejercicios condicion if
console.log("Ejercicio condicion if");
const numerolf = 5;

if (numerolf < 0) {
    console.log('el numero es negativo');
}else if (numerolf > 0) {
    console.log('el numero es positivo');
}else{
    console.log('el numero es cero');
};

//Ejercicios ciclo While
console.log("Ejercicio ciclo While");

numeroWhile = 0;

while (numeroWhile < 3) {
    console.log(numeroWhile);
    numeroWhile ++;
};

//Ejercicios ciclo Do While
console.log("Ejercicio ciclo Do While");
numeroDoWhile = 0;
do{
    console.log('esta condicion se ejecuta 1 vez');
}while (numeroDoWhile > 0);


//Ejercicios ciclo For
console.log("Ejercicio ciclo For");
for (numeroFor = 0; numeroFor <= 3; numeroFor ++){
    console.log(numeroFor);
};

//Ejercicios Switch
console.log("Ejercicio Switch");

const estacion = 'primavera';

switch (estacion) {
    case 'primavera':
        console.log('Es primavera');    
    break;
    case 'verano':
        console.log('Es verano');    
    break;
    case 'invierno':
        console.log('Es invierno');    
    break;
    case 'otoño':
        console.log('Es otoño');    
    break;
    default :
        console.log('NO es una estacion')
    break;
}