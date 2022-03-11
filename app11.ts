// 03.07
// Protoype

class Customers {
  // 필드값
  // construtor에서 쓰는 변수들은 모두 필드값에 먼저 지정을 해주어야 한다. 
  // 타입지정도 해놓는게 좋음!!
  // 필드값은 var let const 등 자료형 키워드 안씀!!!
  tip = "TS는 필드값에 어쩌구가 미리 있어야 this.어쩌구 가능!!"
  data = 0

  name: string
  age: number
  live: string
  isMarried: boolean

  constructor(name: string, age: number, live: string, isMarried: boolean) {
    this.name = name
    this.age = age
    this.live = live
    this.isMarried = isMarried
  }
  
  // Customers 클래스의 Prototype 함수들은 여기다 정의해놓아야함!!
  transForMsrriage() :string{
    if (this.isMarried === true) {
      return "'여'"
    } else {
      return "'부'"
    }
  }

  toString(): void{
    console.log(`이 사람의 이름은 ${this.name} 나이는 ${this.age}살 사는곳은 ${this.live} 결혼여부는 ${this.transForMsrriage()} 입니다.`)
  }
}

const user1 = new Customers("김수현", 26, "부산", false)
user1.toString()
console.log(user1.data)
console.log(user1.tip)





console.log("Prototype은 '유전자' 라고 생각하자!!")


{
  console.log("\n", 1)
  console.log(`(숙제1) Car 클래스를 만들고 싶습니다.
1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요`)

  class Car {
    // 필드값 지정부분
    model: string
    color: string = "미정"
    price: number

    // 생성자 함수 부분.
    constructor(model: string, color: string, price: number) {
      this.model = model
      this.color = color
      this.price = price
    }

    // 프로토타입 함수 부분.
    tax():void {
      console.log(`이 차의 세금은 ${this.price / 10}만원 입니다.`)
    }

    toString():void {
      console.log(`이 차량의 모델은 ${this.model}이고 컬러는 ${this.color}, 가격은 ${this.price}만원, 세금은 ${this.price / 10}만원 입니다.`)
    }
  }

  let car1 = new Car("소나타", "red", 3000)
  console.log(car1)
  car1.tax()
  car1.toString()

}


{
  console.log("\n", 2)
  console.log(`(숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 `)

  class Word{
    num: number[] = []
    str: string[] = []
    bool: boolean[] = []
    a: any[]


    constructor(...a: any[]) {
      this.a = a


      a.forEach((v) => {
        if(typeof v === "number") {
          this.num.push(v)
        } else if (typeof v === "string") {
          this.str.push(v)
        } else {
          this.bool.push(v)
        }
      })
    }


  }


  let obj = new Word("kim", 3, 5, true, "park", 21321321, "김수현", 19, 245, true, false)
  console.log(obj.num)
  console.log(obj.str)
  console.log(obj.bool)
}
