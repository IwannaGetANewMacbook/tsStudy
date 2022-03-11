// 2.22
// <Narrowing & Assertion>
{
    console.log("\n", 1);
    console.log("Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing 써야함.");
    console.log("Type Narrowing === 타입을 거른다, 타입을 하나 정한다.");
    function myFunction(x) {
        // Type Narrowing 예제1
        if (typeof x === "number") {
            return x * x;
        }
        else {
            x = Number(x);
            return x * x;
        }
    }
    const output = myFunction(100);
    console.log("Type Narrowing 예제1 : ", output);
    // Type Narrowing 예제2 
    function myFunction2(x) {
        let arr = [];
        // Type Narrowing ; 타입을 하나로 딱 정한다.
        if (typeof x === "number") {
            arr[0] = x;
            return arr;
        }
    }
    const output2 = myFunction2(12);
    console.log("Type Narrowing 예제2 : ", output2);
}
{
    console.log("\n", 2);
    console.log(`Narrowing으로 판정해주는 문법들:
typeof 변수
속성명 in 오브젝트자료
인스턴스 instanceof 부모 
 => 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정해줌!!!`);
}
{
    console.log("\n", 3);
    console.log("<assertion 문법>---> 타입을 잠깐 덮어 씌우기.");
    function myFunction3(x) {
        let arr = [];
        // 이것이 바로 "Assertion!!"
        arr[0] = x; // 의미-"왼쪽에 있는 변수를 number로 덮어 써주세용!"
    }
    console.log(`빠다 안맞기 위한 assertion(as) 문법의 용도.
  1. Union 타입을 하나의 타입으로 확정하고 싶을때 말고는 사용하면 안됨!!
  2. 내가 어떤 타입이 들어올 지 확실히 알고있을 때 사용.
  3. Assertion(as)문법은 Narrowing(if) 문보다 불안정함. 그래서 평소에 쓰지마삼!!(비상용!!)`);
}
{
    console.log("\n", "(숙제1)");
    function cleanForNumber(x) {
        let list = [];
        x.forEach((v, i, a) => {
            if (typeof v === "string") {
                list.push(Number(v));
            }
            else {
                list.push(v);
            }
        });
        return list;
    }
    const output = cleanForNumber(["1", 2, "3", 4, 5, 6, "123", "3", 123]);
    console.log(output);
}
{
    console.log("\n", "(숙제2)");
    let ChulSu_t = { subject: "math" };
    let YoungHee_t = { subject: ["science", "english"] };
    let MinSu_t = { subject: ["science", "art", "korean"] };
    function lastSubReturn(ob) {
        if (typeof ob.subject === "string") {
            return ob.subject;
        }
        else if (Array.isArray(ob.subject)) {
            return ob.subject[ob.subject.length - 1];
        }
        else {
            return "TypeError";
        }
    }
    console.log(lastSubReturn(ChulSu_t));
    console.log(lastSubReturn(YoungHee_t));
    console.log(lastSubReturn(MinSu_t));
}
