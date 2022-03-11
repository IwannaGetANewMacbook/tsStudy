// 03.03
{
    console.log("\n", 1);
    console.log("<Type alias>");
    console.log("Type 변수 작명은 무조건 영어대문자가 국룰!!(일반 변수와 차별화.)");
    let animal;
    let animal2 = { name: "lion", age: 12 };
}
{
    console.log("\n", 2);
    console.log("const 자료형으로 변수를 선언하면 그 변수는 절대 바꿀 수 없다.(재할당 금지 신택스)");
    const region = "Busan";
    console.log("하지만 오브젝트 안에있는 자료들은 변경가능.");
    const region2 = {
        region: "seoul"
    };
    console.log(region2.region = "busan");
    console.log("하지만 Typrscript 쓰면 object 자료 수정도 막을 수 있음.");
    console.log("readonly 키워드 === 읽기전용");
    console.log("readonly 키워드로 선언한 변수는 절대 수정 불가!!");
    const gf = {
        name: "엠버"
    };
    // gf.name = "wdwd"
    console.log("Type 변수는 당연히 union type으로 합치기 가능!");
    const name = "타입변수 합치기 기능 수행 완료.";
    console.log("& 연산자로 object 타입 합치기.(Object 타입의 Extend)");
    let positon = {
        x: 123,
        y: 64
    };
    console.log(positon);
    console.log("(참고) 같은 이름의 type변수 재정의 불가능!!!");
}
{
    console.log("\n", 3);
    console.log(`
(숙제1) object 타입을 정의한 tpye alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
그건 여러분들이 한 번 테스트해보길 바랍니다.`);
    const user = {
        name: "김수현",
        age: 26,
        region: "Busan"
    };
    console.log(user);
}
{
    console.log("\n", 4);
    console.log(`
(숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.
1. 이 타입은 object 자료형이어야 합니다.
2. 이 타입은 color 라는 속석을 가질 수도 있으며 항상 문자가 들어와야 합니다.
3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야 합니다.
4. 이 타입은 position 이라는 변경불가능한 속성이 있어야 하며 항상 숫자가 담긴 array자료가 들어와야 합니다.
Type alias로 만들어 보셈.`);
    const object = {
        color: "red",
        size: 19,
        position: [12, 13]
    };
    // object.position[1] = 1234213 => readonly 선언으로 인한 에러코드.
    console.log(object);
}
{
    console.log("\n", 5);
    console.log(`(숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.  
3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. `);
    const user = { name: 'kim', phone: 123, email: 'abc@naver.com' };
    console.log(user);
}
{
    console.log("\n", 6);
    console.log(`(숙제4). 다음을 만족하는 type alias를 만들어보십시오.
1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.  
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.  
3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.`);
    const user = {
        name: "kimsuhyeon",
        phone: 57557503,
        email: "01057557503a@gmail.com",
        isAdult: true
    };
    console.log(user);
}
