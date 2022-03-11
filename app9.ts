// 03.04
// <함수와 method에 alias 지정하는 법.>
{
  console.log("\n",1)
  console.log(`(숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오.
- plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
- changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다.  
- type 키워드를 쓰든 말든 알아서 합시다. `)

  type UserInfo = {
    name: string,
    age: number,
    plusOne: (x: number) => number,
    changeName: (x?: string | number) => void
  }
  // code // 
  let userInfo: UserInfo = {
    name : 'kim',
    age : 30,
    plusOne (x) {
      return x + 1
    },
    changeName: () => {
      console.log('안녕')
    }
  }
  console.log(userInfo.name)
  console.log(userInfo.age)
  console.log(userInfo.plusOne(2))
  console.log(userInfo.changeName())

}

{
  console.log("\n",2)
  console.log(`(숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다.`)

  type CutZero = (s: string) => string

  const cutZero: CutZero = function (s) {
    if(s.slice(0, 1) === "0") {
      return s.slice(1)
    } else {
      return s
    }
  }
  console.log(cutZero("0My name is Kimsuhyeon and I'm 26"))


  type RemoveDash = (s: string) => number

  const removeDash: RemoveDash = function(s) {
    const output = s.replace(/-/gi, "")
    return parseInt(output)
    
  }

  console.log(removeDash("010-5755-7503"))



  console.log("\n",3)
  console.log(`
  (숙제3) 함수에 함수를 집어넣고 싶습니다.
숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
이 함수는 어떻게 만들면 될까요?
둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해보삼`)

  function mine(a: string, b: (s: string) => string, c: (s: string) => number): void{
    const result1 = b(a)
    const result2 = c(result1)
    console.log(result2)
  }

  // 실행예시
  mine("010-1111-2222", cutZero, removeDash)
}