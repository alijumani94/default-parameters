function car(name, model) {
    if (name === void 0) { name = "civic"; }
    if (model === void 0) { model = 2019; }
    return "my car is ".concat(name, ", its ").concat(model, " model.");
}
//let message= car("Alto", 2022); if i uncomment this statement the output will be "my car is Alto, its 2022 model" 
//as I changed the value of parameters.
var message = car();
console.log(message);
