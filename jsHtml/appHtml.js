// let title = document.querySelector("#title")
// Element 타입이라고 사기치기!(title변수에 null이 들어와도 title변수는 무조건 Element 타입!!)
let title = document.querySelector("#title");
// id를 잘못 찾을경우 title 변수는 null 값이 됨.
// TS는 이런 애매한거 개싫어해서 바로 유니온타입으로 결정함.
// 그래서 결국 narrowing이 필요함.
if (title !== null) {
    title.innerHTML = "김수현짱짱맨!!!";
}
// narrowing 방법 두 번째.
if (title instanceof Element) { // title이란 object가 Element(클래스)의 자식이면 true.
    title.innerHTML = "반가워요!";
}
let link = document.querySelector(".link");
// a태그 같은 경우에는 반드시 HTMLAnchorElement로 narrowing을 해주어야 함.
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}
let button = document.querySelector("#button");
if (button instanceof HTMLButtonElement) {
    button.innerHTML = "버튼버튼버튼";
}
let counter = 1;
button?.addEventListener("click", () => {
    // 씨발 여기도 narrowing 필요함.
    // 근데 저기 button변수에 ? 붙이고 접근하면 ㅈ같은 narrowing 할 필요없음.
    if (counter < 110) {
        console.log("그만눌러라");
    }
    else if (counter > 110 && counter < 120) {
        alert(`씨발년 말 존나 안듣네 ${10}번째 뒤엔 꺼질꺼임.`);
    }
    counter += 1;
});
