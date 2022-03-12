// 03.11
// Narrowing 할 수 있는 방법 더 알아보기

// 간단한 테크닉.
// null & undefined 타입체크하는 경우 매우 잦음.

function hamsu(a: string | undefined) {
  // 매겨변수 a의 타입이 2가지일 경우 조건문 2개를 써야함.
  // 근데 조건문 하나로 줄일 수 있는 테크닉 있음.
  if(a && typeof a === "string") {
    // a에 undefined 가 들어오게 되면 if문은 실행안됨!
    // a에 "string"이 들어오면 if문 실행됨.
    // null 또한 이 조건식에 유효함.
  }
}


type Fish = {swim: string}
type Bird = {fly: string}

function hamsuu(animal: Fish | Bird) {
  // 이렇게 같은 objcet타입일 경우 in 키워드로 narrowing 가능!
  if("swim" in animal) {
    // "swim"이란 속성이 aniaml이란 object에 들어있냐?
    // 이 if문은 Fish 타입인지 아닌지 검사하는 구문.
  }
}

// <instanceof 연산자>
// 사용방법. --> 오브젝트 instanceof 부모클래스
// 해당 오브젝트의 부모가 누군지 검사해주는 키워드.

// 이런식으로 사용가능!
// let date = new Date()
// if (data instanceof Date) {

// }
///////////////////////////////////////////////////////////////////////////
type Car = {
  wheel: "4EA", // wheel 이라는 속성에 강제로 literal 타입을 만든거임. narrowing 할라고
  color: string
}

type Bike = {
  wheel: "2EA" , // 여기도 wheel 이라는 속성에 강제로 literal 타입만든거.
  color: string
} 

function mmmm (x: Car | Bike) {
  // 여기서 in 키워드로 narrowing 할려해도 서로 똑같은 속성이라 사용불가..
  if (x.wheel === "4EA" ) {
    // x의 wheel이 4개이면, 즉 x 가 Car 타입이면 실행시키는 if문.
    console.log("x는 Car 타입이에요.")
  }
}

// pro tip: 비슷한 object 타입이 많다? 그러면 literal type 넣어보셈!!
// one line summary: 논리적으로 이 타입인지 특정지을 수 있다면 다 narrowing으로 인정해줌!!

// pro tip:
// && 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면
// && 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남겨줍니다.
// falsy 값은 false와 유사한 기능을 하는 null, undefined, NaN 이런 값들을 의미합니다.