// JS는 Dynamic Typing 가능해서 편리하지만 코드를 길게 짤 땐 자유도 & 유연성은 오히려 쓰레기임.
// 브라우저는 무조건 JS파일만 읽을 수 있음., TS 파일은 읽지못해서 TS로 작성한 파일은
// JS로 변환된 후 브라우저에서 동작 됨 => TS에서 JS 파일로 변환하는 과정을 "컴파일" 한다 로 표현.
{
    let 이름 = "kim"; // 이 변수엔 string(문자)type만 들어올 수 있다! 라고 명시.
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
  `);
}
{
    // 이 변수엔 string이 담긴 array만 들어올 수 있음!
    let 이름 = ["kim", "park"]; // string형태의 array 라고 지정! 
    // 속성이 옵션널일땐 ? 를 붙여줌.
    let 이름2 = { name: "kim" };
    // 다양한 타입이 들어올 수 있게 지정하려면 "Union type" 형태로 씀!
    let 이름3 = 123;
    let 이름4 = 123;
}
{
    // 함수를 만들 때도 타입지정 가능함.
    function 함수(x) {
        return x * 2;
    }
    함수(123);
}
{
    let john = [123, true];
}
{
    let john = { name: "su" };
}
{
    // Class 구문에 타입지정 하는 범
    class User {
        name;
        constructor(name) {
            this.name = name;
        }
    }
}


