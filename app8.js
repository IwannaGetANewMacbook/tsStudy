// 03.03
// 함수와 method에 type alias 지정하는 법
{
    console.log("참고: () => {} 이러한 arrow funtion에서 리턴값만 있으면 {} 생략가능!");
    console.log(`
  함수를 만들 때 두가지 방법 있음.
  1. function 함수명 () {}        --> 함수 선언식
  2. let 함수명 = function() {}   --> 함수 표현식
  함수에 type alias를 적용하려면 함수 표현식을 써야함!!!!
  `);
}
{
    console.log("\n", 1);
    console.log("함수 전체를 type alias 로 활용할 수 있음.");
    // 매개변수는 string 타입이고 리턴값은 number 타입임을 명시해준 것.
    let testFunction = function (sdsadasd) {
        return 10;
    };
}
{
    console.log("\n", 2);
    console.log("object안에 함수 저장 가능.");
    let user = {
        name: "김수현",
        age: 26,
        toStr() {
            console.log(`이 유저의 이름은 ${this.name}, 나이는 ${this.age}살 입니다.`);
        },
        internationalAge(age) {
            return age - 1;
        }
    };
    user.toStr();
    console.log(user.internationalAge(26));
}
