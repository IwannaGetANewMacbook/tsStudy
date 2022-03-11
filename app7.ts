// 03.03
console.log("<Literal Types로 만드는 const 변수 유사폼.>")
{
  console.log("\n",1)
  // let 이름: string 보다 더 엄격한 타입지정 가능.
  console.log(`변수에 kim or park 의 문자열만 들어올 수 있다고 가정, => Literal Types`)
  let name: "kim" // => 이렇게하면 name 이라는 변수안에는 무조건 "kim"이라는 문자열만 들어올 수 있음.
  
  let itsMe: "suhyeon" | "solo"
  itsMe = "solo"
  console.log(`<Literal types의 장점>
  - 변수에 뭐가 들어올지 더 엄격하게 관리가능
  - 자동완성 힌트 굿.
  `)

  function func (x: "hello") {
    console.log(x)
  }
  func("hello")
}

{
  console.log("\n",2,"간단한 퀴즈")
  console.log(` Q. 이런 함수 어떻게 만들죠?
  1. 가위or바위or보 중 1개 입력가능
  2. 가위or바위or보 만 들어올 수 있는 array를 retrun 해야함.
  `)

  type RockPaperScissors = "rock" | "paper" | "scissors"
  function rockPaperScissors (x: RockPaperScissors): RockPaperScissors[] {
    return ["paper", "rock"]
  }

  console.log(rockPaperScissors("paper"))
}

{
  console.log("\n",3)
  console.log(` const 변수에 두 개 이상의 자료를 할당할 수 없다.
  그래서 Literal type은 const 변수의 업그레이드 버전임.
  => 자료를 여러개 저장할 수 있는 const변수라 생각하셈.`)

  var data = {
    name: "kim"
  } as const    // "이 object는 literal tpye지정 알아서 해주셈" 이라는 뜻.
  // 즉, name 이라는 속성은 무조건 "kim" 타입임.
  data.name


  function myFunction1(a: "kim") {
    console.log(a)
  }

  console.log(` Literal type의 문제점
  myFunction1(data.name)
  위의 함수는 겉보기에는 이상이 없지만 에러가 발생함.
  "kim"이라는 자료만 들어올 수 있습니다." X
  "Kim"이라는 타입만 들어올 수 있습니다." O 
  data.name은 타입이 string임.
  정리하자면 "kim"이라는 타입으로 지정해놨는데 string 타입이 들어왔기 때문에 에러발생!`)

  console.log()
  console.log(` <as const 구문의 효과>
  1. 타입을 object의 value로 바꾸어줌.
  2. object 안에 있는 모든 속성을 readonly로 바꾸어줌.(변경하면 에러나게)
  object를 잠그고 싶으면 as const를 활용할 수 있도록!`)
}


