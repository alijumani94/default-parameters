function car(name: string= "civic", model: number= 2019){
    return `my car is ${name}, its ${model} model.`
}
 
//let message= car("Alto", 2022); if i uncomment this statement the output will be "my car is Alto, its 2022 model" 
//as I changed the value of parameters.
let message= car();
console.log(message);
