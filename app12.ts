// 03.08
// Object에 타입지정방법 - interface

// Object 자료의 경우에는 Type Ailias 방법이 2가지
// 1. type 키워드
// 2. interface 키워드
// e.g.
interface Rectangle {color: string, width: number}
// interface 이용시 등호 필요없음!!(class 만드는 법이랑 유사함!!!)

let rectangle = {
  color: "red",
  width: 100
}

// What's the difference between type keyword and interface keyword?
// 나중에 배워보자!! ㅋㅋㅋㅋ

// Quiz. - 이런 object들이 있다고 치고 타입지정 해보자(wiht interface keyword)
let student: Student = {name: "kim", score: 100} 
let teacher: Teacher = {name: "kim", age: 20, score: 100}

// My answer.
interface Student {name: string}


// ***** interface 키워드의 장점.
// 1. extends로 복사가능!!
interface Teacher extends Student{age: number}  // 이로케!


// 근데 type 키워드도 exteds 가능
type Animalll = {name: String}
type Cattt = Animalll & {age: number}
let cat: Cattt = {
  name: "dwdw",
  age: 12
}      
// 이처럼 &기호(intersection type)을 써서 extends기능을 수행하긴 하는데 약간 의미가 다름.
// &기호(intersection type)는 두 타입을 전부 만족하는 타입이라는 뜻.
// interface 키워드 또한 &기호 사용가능.


// What's the difference between type keyword and interface keyword?
// interface -- 중복선언가능!
// type -- 중복선언 불가능!!

interface Student {
  score: number
} // => 이렇게 Student라는 interface를 중복선언하면 이제 Student interface는
// name 속성과 score 속성  두가 지를 다 가지는 것이다.
// 중복선언시 두 개가 합쳐짐. 즉, 자동extends 가 된다는 것임.

// interface 와 type 정리.
// interface는 유연함.
// type은 엄격함.

// 외부 라이브러리 같은 경우 interface로 도배되어있음! (유저의 커스텀을 고려해서.)
// 다른사람이 이용많이할 것 같으면 object타입 정할때 아싸리 interface 키워드 쓰자!!

{
  console.log("\n","숙제1 - interface 이용해서 간단하게 타입을 만들어봅시다.")
  // 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
  // 무슨 타입일지는 알아서 기입합시다.
  interface Product {brand: string, serialNumber: number, model: string[]}
  let product: Product = 
  { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] }
  console.log(product)
}

{
  console.log("\n","숙제2 - array안에 object 여러개가 필요합니다.")
  // 쇼핑몰 장바구니를 구현하려고 하는데
  // 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야 할까요?
  // 오늘 배운 interface 문법을 써봅시다.
  let shoppingList: ShoppingList = [ 
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 }
  ]
  
  // 내 답안.
  interface ShoppingList {
    [index: number]: {product: string, price: number}
  }

  // 강사답안
  interface Cart {
    product: string
    price: number
  }

  let cartList: Cart[] = [
    { product: "청소기", price: 7000 }, 
    { product: "삼다수", price: 800 }
]

  console.log(shoppingList)
  console.log(cartList)



  console.log("\n","숙제3 - 위에서 만든 타입을 extends 해봅시다.")
  // 갑자기 서비스가 업데이트 되어서 일부 상품은 card 속겅이 들어가야 합니다.
  interface UpdadeForCartlist extends Cart {
    card: boolean
  }

  let updatedCart: UpdadeForCartlist[] = [
    {product: "청소기", price: 70000, card: false}
  ]

  console.log(updatedCart)
}

{
  console.log("\n","숙제4 - Object 안에 함수를 2개 넣고 싶은데요")
  // 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 retrun 해줍니다.
  // 이 object 자료는 minus() 함수를 내ㅑ부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 retrun 해줍니다.
  // 이 object 자료를 어떻게 만들면 될까요?
  // interface를 이용해서 object에 타입지정도 해보십시오.

  interface MyObj {
    plus: (x:number, y: number) => number,
    minus: (x: number, y: number) => number
  }


  let myObj: MyObj = {
    plus: function(x, y) {
      return x + y
    },

    minus: function(x, y) {
      return x - y
    }
  }

  console.log(myObj.minus(2, 1))
  console.log(myObj.plus(2, 1))

}

