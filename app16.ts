// 03.12
// public, private

class User {
  // 이렇게 변수는 미리 필드에 정의되어 있어야 함.
  name: string
  private familyName: string = "김"
  constructor(a) {
    this.name = a
  }

  public 이름변경함수(aa: string) {
    this.familyName = aa
    return this.familyName
  }
}
let user11 = new User("park")
user11.name = "수현"
console.log(user11)
console.log(user11.name + user11.이름변경함수("박"))


//        <class에서 쓰는 public 키워드>
// public 붙으면 모든 자식들이 이용가능.
// 사실 public 키워드는 안쓰면 생략되어 쓰여짐.
// public 키워드는 필드와 함수 모두 사용가능!





//          <class에서 쓰는 private 키워드>
// private 붙으면 class안에서만 수정, 이용가능!
// user11 을 출력해보면 private이 붙은 familyName이 출력되긴 하나 접근은 불가능함!!

// public 키워드는 클래스 안에서 수정이 가능하기 때문에 만약 private이 붙은 변수를
// 변경하고 싶다면 클래스 내부에 변수변경 함수를 만들어 수행하면 됨.


// public 키워드 쓰면 this.어쩌구 생략가능!!
class person { 
  // public name => 이 자리에 들어온 파라미터는 자식의 name 속성에 기입해 주세여! 라는 뜻
  constructor(public name: string) {

  }
}

const 자식 = new person("kim")
console.log(자식)