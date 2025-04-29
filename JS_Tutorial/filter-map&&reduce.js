const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//let userBooks = books.filter( (bk) => bk.genre === 'History')

let userBooks = books.filter( (bk) => {
    return bk.publish <= 2000 && bk.genre === "Non-Fiction"
})

//console.log(userBooks)

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newMaps = myNumbers.map( (num) => {
//  return num + 10
//})

//console.log(myNumbers)
//console.log(newMaps)

const newMap = myNumbers
.map( (num) => {  return num * 10 })
.map( (num) => {return num + 1 })
.filter( (num) => { return num >= 50})

//console.log(newMap);

const shoppingCart = [
  {
    name: "JS Course",
    price: "$9"
  },
  {
    name: "Web Dev Course",
    price: "$29"
  },
  {
    name: "DSA Course",
    price: "$49"
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)

console.log(priceToPay)

