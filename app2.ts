// 타입스크립트 기본 타입 정리(primitive types)

{
  let name: string = "kim"
  let age: number = 50
  let isMarried: boolean = true
  let customers :(string | number)[] = ["kim", "park", "lee", 2] // 문자만 담긴 array만 가능!
  console.log(customers)
  let users: {member1: string, member2: string} = {member1: "su", member2: "hyeon"}
  
}

{
  // 오늘의 pro tip: 타입지정은 원래 자동으로 해줌.
  let 회원들 = "park"   // => 이처럼 타입을 손수 지정하지 않아도 TS가 알아서 string형식이라고 자동으로 타입을 지정해줌.
  // so that, 타입지정 문법 생략 가능!!!
  // 회원들 = 123 => 에러남!
}

{
  console.log("Q1. 여러분의 이름, 나이 출생지역을 변수로 각각 저장해봅시다.")
  // 일단 난 모든 변수에 타입을 지정할거임.

  const myName: string = "Suhyeon Kim"
  const myAge: number = 26
  const myHometown: string = "Busan"

  console.log(`A1.My name is ${myName}, I'm ${myAge} and My hometown is ${myHometown}`)
}
console.log()

{
  console.log("Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.")
  const myFavorite: {songName: string, artist: string} 
  = {
    songName: "abcdefu", artist: "GAYLE"
  }

  console.log(`My favorite: ${myFavorite.songName}-${myFavorite.artist}`)
}
console.log()
{
  console.log("Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.")

  // 보기문항
  let project = {
    member: ["kim", "park"],
    days: 30,
    started: true
  }

  // 타입지정 Go!
  let projectM: {member: string[], days: number, started: boolean} 
  = {
    member: ["kim", "park"],
    days: 30,
    started: true
  }
  
  console.log(projectM)

}