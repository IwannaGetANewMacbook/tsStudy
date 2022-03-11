// 함수에 타입 지정하는 법 & void 타입
{
    // 함수 만드는 방법
    function multiple(x) {
        return x * 2;
    }
    const output = multiple(100);
    console.log(output);
    // 결론: 함수는 파라미터, return값 타입지정 가능.
}
{
    console.log("함수를 만들 때 그함수가 리턴하는 값이 없다면 void타입 활용.");
    // void 타입을 활용하면 실수로 뭔가 return 하는걸 사전에 막을 수 있음.
    // 파라미터에 ? 옵션을 붙이면 해당 파라미터가 없어도 상관없다는 뜻(optional)
    function add(n) {
        console.log(n + n);
    }
    add(100);
    console.log("파라미터가 옵션일 경우엔 (파라미터변수? : 타입) 이렇게 활용.");
    console.log("****중요! (변수?: number) === (변수: number | undefined) 와 같음.");
}
{
    console.log(`
숙제1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
아무것도 파라미터로 입력하지 않고 함수를 사용할면 "이름이 없습니다"를 출력하는 함수를 만들어 봅시다.
파라미터와 retrun 타입지정도 잘 해봅시다.  
  `);
    function homework1(name) {
        if (typeof (name) === "string") {
            console.log(`안녕하세요 ${name}`);
        }
        else {
            console.log(`이름이 없습니다.`);
        }
    }
    console.log("My answer");
    homework1("홍길동");
}
console.log();
{
    console.log(`
숙제2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어 보십시오.
예를들어 '245'이런 문자를 입력하면 3이 retrun 되어야 합니다.
숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 retrun 되어야 합니다.
숫자 또는 문자 이외의 자료가 들어오면 안됩니다.
  `);
    function homework2(x) {
        if (typeof (x) === "number") {
            console.log(String(x).length);
        }
        else {
            console.log(x.length);
        }
    }
    homework2(9567);
    // 강사방식
    function 자릿수세기(x) {
        return x.toString().length;
    }
}
console.log();
{
    console.log(`
(숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
`);
    function canIgetMerried(wage, myHouse, attractiveP) {
        if (wage < 0) {
            console.log("월 소득을 똑바로 입력하십시오.");
            return;
        }
        const wagePoint = wage * 1;
        let housePoint;
        let attPoint;
        if (myHouse === true) {
            housePoint = 500;
        }
        else {
            housePoint = 0;
        }
        if (attractiveP === "상") {
            attPoint = 100;
        }
        else {
            attPoint = 0;
        }
        const totalPoint = wagePoint + housePoint + attPoint;
        if (totalPoint >= 600) {
            return "결혼가능";
        }
    }
    console.log(canIgetMerried(700, false, "중"));
    console.log(canIgetMerried(100, false, "상"));
}
{
}
