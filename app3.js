// 타입을 미리 정하기 애매할 때(union tpye, any, unknown)
// 문자or 숫자가 들어올 수 있는 변수는 어떻게 만듦?
// 이런걸 전문용어로 => "Union Type."(타입을 2개이상 합침.)
{
    let members = 123;
    console.log(`
${members}
이렇게 3가지 타입을 설정하고 변수에 value를 할당하면 이 변수의 타입은 할당받은 value의 자료형으로 고정된다.
`);
}
{
    // 숫자 or 문자가 가능한 array 타입지정은?
    let members = [1, 2, 3, "Kim", "Lee", 123, "park"];
    console.log(members);
    console.log();
    // 숫자 or 문자가 가능한 object 타입지정은?
    let object = { a: "123" };
    console.log(object);
    console.log("any 타입");
    let name; // any타입, 모든 자료형 허용해줌.
    name = 123;
    name = true;
    console.log("하지만 any타입을 쓰게되면 TS쓰는 의미가 없어짐");
    console.log("any타입 => 타입실드 해제문법임.");
    console.log("그래서 타입관련 버그가 나도 잡아주지 않음.");
    console.log("But 최신TS에서는 any타입과 비슷한 'unknown' 타입을 지원해줌");
    console.log("'unknown'타입 - 모든 자료형 허용해주나 any타입보다 더 안전함!");
    console.log("'unknown타입'은 수학적 계산을 할 수 없을정도로 엄격하다.");
    console.log("사실 ts는 간단한 수학연산도 타입이 맞아야 처리해준다.");
    let name1;
}
{
    console.log(`
  ****착각하면 안되는거: union 타입은 타입2개이상을 합친 새로운 타입임!!
  `);
    let age;
    age + '1';
}
{
    // 아래 코드는 에러발생코드
    // var 어레이: number[] = [1,'2',3]
    // var 오브젝트: {data : number} = { data : '123' }
    console.log("array와 object 자료에 number또는 string이 들어올 수 있게 타입을 고쳐보기.");
    let array = [1, "2", 3];
    let object = { data: "123" };
    console.log("A1.", array, "\n", object);
}
{
    console.log();
    console.log("숙제1 다음 변수 4개에 타입을 지정해봅시다.");
    let user = "kim";
    let age = undefined;
    let married = false;
    let 철수 = [user, age, married];
    console.log(철수);
}
{
    console.log("숙제2 학교라는 변수에 타입지정해보십시오.");
    let 학교 = {
        score: [100, 97, 84],
        teacher: "Phil",
        friend: "Jogn"
    };
    학교.score[4] = false;
    학교.friend = ["Lee", 학교.teacher];
    console.log(학교);
}
