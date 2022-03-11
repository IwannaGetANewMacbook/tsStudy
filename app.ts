// JS는 Dynamic Typing 가능해서 편리하지만 코드를 길게 짤 땐 자유도 & 유연성은 오히려 쓰레기임.
// 브라우저는 무조건 JS파일만 읽을 수 있음., TS 파일은 읽지못해서 TS로 작성한 파일은
// JS로 변환된 후 브라우저에서 동작 됨 => TS에서 JS 파일로 변환하는 과정을 "컴파일" 한다 로 표현.


{
  let 이름: string = "kim"    // 이 변수엔 string(문자)type만 들어올 수 있다! 라고 명시.
  console.log(`
  타입 명칭에 들어갈 수 있는 데이터 타입:
  string,
  number,
  boolean,
  null,
  undefined,
  bigint,
  [],
  {}
  등
  `)
}


{
  // 이 변수엔 string이 담긴 array만 들어올 수 있음!
  let 이름: string[] = ["kim", "park"]  // string형태의 array 라고 지정! 

  // 속성이 옵션널일땐 ? 를 붙여줌.
  let 이름2: { name?: string } = { name: "kim" }  

  // 다양한 타입이 들어올 수 있게 지정하려면 "Union type" 형태로 씀!
  let 이름3: string | number | string[]  = 123

  // 꿀팁!! -- 타입은 변수에 담아쓸 수 있음.; Type alias
  // 타입 명 작문할 때는 첫글자는 무조건 대문자!!
  type Name = string | number
  let 이름4: Name = 123
}


{
  // 함수를 만들 때도 타입지정 가능함.
  function 함수(x: number) :number {    // 이 함수의 파라미터의 타입은 number이며 리턴값의 타입은 number이다.
    return x * 2  
  }
  함수(123)
}

{
  // "내가 array자료를 만들 때 이 자리에는 무조건 숫자가 들아와야 한다!" 라고 했을 때 타입지정 가능함.

  // array에 쓸 수 있는 tuple 타입
  type Member = [number, boolean]
  let john:Member = [123, true]
} 

{
  // 만약에 object 타입에 지정해야할 속성이 너무 많으면???
  type Member = { 
    [key: string]: string     // "[key: string]" 의미는 "모든 object속성"
    // "글자로 된 모든 object 속성의 타입: string" 이란 뜻.
  }

  let john: Member = {name: "su" }
}


{
  // Class 구문에 타입지정 하는 범
  class User {
    name :string
    constructor(name: string) {
      this.name = name

    }
  }
}