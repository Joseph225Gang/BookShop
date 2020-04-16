const books = [
  {
    id: 1,
    title: "Javascript",
    author: "Joseph",
    price: 300
  },
  {
    id: 2,
    title: "React",
    author: "Joseph",
    price: 250
  },
  {
    id: 3,
    title: "Angular",
    author: "Joseph",
    price: 200
  }
];
// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  books
};
