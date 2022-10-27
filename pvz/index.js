const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = [...array1, ...array2];

const elenemt = Boolean("3" > 2);

const text = "codeacademy";

const deconstruction = text.slice(4, 10);

function Supplier() {
  this.supply = function () {
    return this;
  };
}

const supplier = new Supplier();
const supply = supplier.supply();
const comparison = supplier === supply;

console.log(comparison);
