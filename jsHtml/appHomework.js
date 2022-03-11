let img = document.querySelector("#image");
if (img instanceof HTMLImageElement) {
    img.src = "new.jpg";
}
let naver = document.querySelectorAll(".naver");
naver.forEach((v, i, a) => {
    if (v instanceof HTMLAnchorElement) {
        v.href = "https://kakao.com";
    }
});
