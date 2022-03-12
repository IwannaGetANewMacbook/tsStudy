// 03.12
// class에서 사용가능한 protected, static 키워드

// 클래스 복사하고싶네? 할 때 갖다쓰는 문법 있음
class User1 {
  x = "User1의 변수입니다."
}

// User1의 클래스를 NewUser1 클래스로 복사한것.(extends 문법)
class NewUser1 extends User1 {

}

const indi = new NewUser1()
console.log(indi)

// 복습! private 붙이면 해당 클래스 내부에서만 사용가능



// private과 유사한 protected 키워드
//                <protected 키워드>                
class User11 {
  protected x = "User11 에서 만든 x 변수"
  // private, protected 붙이면 클래스 내부에서만 사용가능!
  // 근데 private보다 약간 더 확장성을 제공해준다고 생각하면 됨.
  
}

class NewUser11 extends User11{
  // extends 한 클래스 내부에 private속성이 부여된 변수나 함수가 있다면
  // 해당 클래스에서는 private 변수, 함수를 사용하지 못함!
  // 하지만 protected 키워드는 extends 해도 사용가능!!
  doThis() {
    console.log(this.x)
  }
}

const persoon = new NewUser11()
persoon.doThis()


// 정리!
// private: extends된 class는 사용불가능, 자식들 사용불가능!
// protected: extends된 class는 사용가능, 자식들 사용불가능!








//                <static 키워드>           
// static 키워드
// static 키워드 붙이면 부모class에 직접 부여됨.(자식들이 물려받지 못하게 방어해주는 쉴드.)
// + 자식에게 안물려줌, extends 하면 잘 따라옴.
// private / protected / public + static 가능!!

class Test {
  static x = 10   // 이렇게 static 이 붙으면 부모만 갖다쓸 수 있음.
  y = 20
  
  static skill = "js"   // 자식들이 건들이길 원하지 않기때문에 static 붙임!
  intro = `${Test.skill} 전문가입니다.`
 

}

const ddd = new Test()
//  console.log(ddd.x) => 에러남. static 키워드가 붙은 x에 접근했기 때문.
console.log(Test.x)   // => 에러안남. static 키워드는 부모만 쓸 수 있기 때문. 

Test.skill = "TS"

let sss = new Test()

console.log(sss)

// 그래서 static 언제쓰냐?
// 주로 class안에 간단한 메모를 하거나, 기본 설정값을 입력하거나
// class 로부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을때 사용.


console.log("\n", "(숙제1)다음 x, y, z, 속성의 특징을 설명해보십시오.")
// 누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요.
class HW1 {
  private static x = 10
  public static y = 20
  protected z = 30
}

console.log(`private static x = 10 경우 해당 클래스로부터 파생된 인스턴스가
x라는 변수를 쓰지 못하도록 막아논 다음 변수 x 는 부모클래스만 쓸 수 있게 만들어 논거.

public static y 의 경우, 자식 인스턴스도 y의 속성을 가지고 부모 클래스도 y속성 가짐.

protexted z 의 경우, prviate속성과 같이 자식들은 못쓰지만 extends를 하게되면
extends 한 클래스에서는 z변수 사용가능!
`)


console.log("\n", "(숙제2)x 속성에 숫자를 더해주는 함수가 필요합니다.")
// 저렇게 User.addOne() 쓸 때마다 x 가 증가하는 함수는 어떻게 만들 수 있을까요?
// 그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어 보십시오.
// (조건) private static x = 10 이 코드 수정금지

class HW2 {
  private static x = 10
  public static y = 20

  static addOne(a: number):number {
    return a + this.x
  }

  static printX() {
    console.log(this.x)
  }
  
}



console.log(HW2.addOne(3)) // 이렇게 하면 x가 3 더해져야 함.
console.log(HW2.addOne(4)) // 이렇게 하면 x가 4 더해져야 함.
HW2.printX() // 이렇게 콘솔창에 x값이 출력되어야 함.




console.log("\n", "(숙제2)x 속성에 숫자를 더해주는 함수가 필요합니다.")
// 웹 요소 애니메이팅하는거 이런 것의 기초 격인데
// 이렇게 네모.draw() 를 할 때마다
// index.html에 가로 30px, 세로 30px, 배경색이 "red"의 <div> 박스가
// 가로 400px 세로 400px 공간 안에 무작위로 배치되어야 합니다.

