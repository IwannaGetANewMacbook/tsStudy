let product: Product = { 
  brand: "samsung", serialNumber: 1360, model: ["tv", "phone"]
}

interface Product {
  brand: string,
  serialNumber: number,
  model: string[]
}

console.log(product)



let cart: Cart[]= [
  { product: "청소기", price: 7000 }, 
  { product: "삼다수", price: 800 } 
]

interface Cart { product: string, price: number }



interface Updated extends Cart {
  card: boolean
}
let updated: Updated[]= [
  { product: "청소기", price: 7000, card: false }, 
  { product: "삼다수", price: 800, card: true } 
]
console.log(updated)

const mymy: Mymy = {
  plus: function (x, y) {
    return x + y
  },
  
  
  minus: function (x, y) {
    return x - y
  }


}

interface Mymy {
  plus: (x: number, y: number) => number,
  minus: (x: number, y: number) => number
}

console.log(mymy.plus(1,2))
console.log(mymy.minus(3, 1))


function qqq (...a: (number|string|boolean)[]) {
  console.log(a)
}

qqq(2,14824,723,97,5234,891,43,7264,85,23,9857,498,53,90, true)
