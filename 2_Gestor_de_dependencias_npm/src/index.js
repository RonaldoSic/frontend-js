const nombres = [
  "Ana",
  "Juliana",
  "Raul",
  "Jonathan",
  "Rodrigo",
  "Elizabeth",
  "Ezequiel",
  "Maggie",
  "Carl",
  "Darrel",
  "Marcos",
  "Dallana",
];

const randomName = () => {
  const name = nombres[Math.floor(Math.random() * nombres.length)];
  console.log(name);
};

module.exports = { randomName };
