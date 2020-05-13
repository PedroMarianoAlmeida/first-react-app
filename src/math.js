var foo = 30; // does not create window.foo
export const sum = (a, b) => a + b;
export const numbers = [5, 10, 15, 20, 25, foo];
//export { sum, numbers }; //Outra forma de exportar