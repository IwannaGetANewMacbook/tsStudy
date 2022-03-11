// 03.08
// 함수 rest파라미터, destructuring 할 때 타입지정.

// rest parameter 는 항상 매개변수 제일 뒤에 위치해야 함!!
// rest parameter 는 매개변수로 받은 인수들은 전부 array로 받는다.


let output = 0
function adadad(...a: (number)[])  {
  a.forEach((v) => {
    output += v 
  })
  return output
} 

adadad(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(output)


// ...연산자의 2가지 용도
// 1. 함수의 매개변수 안에서 사용할 때는 rest parameter 의 역할.
// 2. 전개 연산자의 역할(Spread Operation)
// 2번용도 사용 예시.
let arr = [1, 2 ,3]
let arr2 = [4, 5]
let arr3 = [...arr, ...arr2]
console.log(arr3)


// Destructuring
console.log("\n", "<객체 destructuring>")
const des = {
  name1: "su",
  age: 26,
  live: "경산",
  hobby: "soccer"
}

// 객체 destructuring 타입 지정하는 법.
// 근데 이름이 객체안의 속성들과 같은이름 쓰면 굳이 타입지정 안해줘도 됨.
const { name1: name1, age: age, live: live, hobby: hobby } = des
console.log(name1)
console.log(age)
console.log(live)
console.log(hobby)


console.log("\n", "<배열 destructuring>")

const dess = [
  "김", 123, "rlatngus", true, false, "dwdsd", 23
]
let [첫, 둘] = dess

console.log(첫)
console.log(둘)



function mmm (a, b) {
  console.log(a, b)
}

mmm(name1, age)

{
  let 오브젝트 = { student: true, age: 20}
  function mm (a, b) {
    console.log(a, b)
  }
  const {student, age} = 오브젝트
  mm(student, age)
}

{
  console.log("\n", "Q.위의 함수 파라미터에 타입지정 해보도록 합시다.")
  // 힌트는 object처럼 생긴건 항상 object처럼 타입지정하면 됩니다. 알아서 해보십시오.

  let person = { student : true, age : 20 }


  interface Fun {student: boolean, age: number}
  function 함수({student, age}: Fun){
    console.log(student, age)
  }
  함수({ student : true, age : 20 })
}

{
  console.log("\n", "(숙제1) 숫자 여러개를 입력하면 최댓값을 retrurn 해주는 함수를 만들어봅시다.")
  // 최대값(6,3,7,2) 이렇게 쓰면 7이 return 되어야 합니다.
  // (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만가능함.
  // (조건2) Math.max() 사용금지 반복문이나 쓰셈.

  type GetMax = (...x: number[]) => number

  const getMax:GetMax = function(...x) {
    let output = 0
    x.forEach((v, i, a) => {
      if (v > 0 && output < v) {
        output= v
      }
    })
    return output
  }

  console.log(getMax(-123, -7564,-2938, 2232))

}

{
  console.log("\n", "(숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어 봅시다.")
  // 함수( { user: "kim", comment: [3, 5, 4], admin: false } )
  // 어떻게 코드를 짜야할까여?
  // (조건1) 오늘배운 파라미터 destructuring 문법을 써봅시다.
  // (조건2) 함수실행시 입력한 파라미터의 value들(kim, [3, 5, 4] 이런거)을 전부 콘솔창에 출력해줘야 합니다.

  const obj = { user: "kim", comment: [3, 5, 4], admin: false }
  const {user, comment, admin } = obj
  

  const myFF = function (user: string, comment: number[], admin: boolean) {
    console.log(user, comment, admin)
  }
  myFF(user, comment, admin )
  
}

{
  console.log("\n", "(숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어 봅시다.")
  // 함수( [40, "wine", false] )
  // 어떻게 코드를 짜야할까여?
  // (조건1) 오늘배운 파라미터 destructuring 문법을 써봅시다.
  // (조건2) 함수실행시 입력한 파라미터의 value들(kim, [3, 5, 4] 이런거)을 전부 콘솔창에 출력해줘야 합니다.

  type MyFFF = any[]

  const myFFF = function([a, b, c]: MyFFF) {
    console.log(a, b, c)
  }

  myFFF( [40, "wine", false] )
}


