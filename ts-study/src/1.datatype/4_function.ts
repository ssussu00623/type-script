/**
 * 타입스크립트 함수 선언
 * 
 * 1. 기본함수 선언방식
 * function 함수명(파라미터: 파라미터 타입): 반환값 타입 {
 *          실행로직
 *  return 반환값;
 * }
 */

// greet1("홍길동"); ===> 화면 출력 : 반갑습니다. 홍길동님!!!

function greet1(pname: string) {
    console.log(`greet1. 반갑습니다. ${pname}님!!`);
}

greet1("홍길동");

// greet3("홍길동", 30); ===> 화면 출력 : 홍길동의 나이는 30입니다.

function greet2(pname: string, age: number): string {
    return `greet2. ${pname}의 나이는 ${age}입니다.`
}

const str: string = greet2("홍길동", 30);
console.log(str); // 다른 곳에서 활용 혹은 호출, 저장을 위해서는 변수 형태로 선언, 호출할 것. 
console.log(greet2("홍길동", 30)); // 단순 출력으로는 이 방법이 나을지도.

//greet3("Alice", "서울시 강남구") : 화살표 함수를 통해 '함수 표현식'(Arrow function)으로 생성\
// 이름-Alice, 주소-서울시 강남구
// age 나이를 입력받는 변수 매개변수 추가, 단, 타입은 정해지지 않음!!! 
const greet3 = (pname: string, addr: string, age: any) => {
    console.log(`greet3. 이름-${pname}, 주소-${addr}, 나이-${age}`);
}
greet3("Alice", "서울시 강남구", "삼십");
// 위와 같고 age는 필수 입력사항이 아닌 선택 사항임
const greet4 = (pname: string, addr: string, age?: any) => {
    console.log(`greet4. 이름-${pname}, 주소-${addr}, 나이-${age}`);
}
greet4("tom", "서울시 강남구");

// 삼항으로 바꿔보기 
const greet5 = (pname: string, addr: string, age?: any) => {
    age ?
        console.log(`greet5. 이름-${pname}, 주소-${addr}, 나이-${age}`) // age가 있으면 전문 출력
        : console.log(`greet5. 이름-${pname}, 주소-${addr}`); // 없으면 undefined인 나이를 제외하고 출력
}
greet5("tom", "서울시 강남구");

// greet6(1,2,3,4,5) 값을 입력받아 배열 객체로 화면 출력
const greet6 = (...parmas: any[]) => {
    console.log(parmas);
}
greet6('greet6', 1, 2, 3, 4, 5)
greet6('greet6. ❤', '🧡', '💛', '💚', '💜', '💙', '🤎', '🖤', '🤍')
/*
    const greet6 = (parmas:number[]) =>{
        console.log(parmas);
    }
    greet6([1,2,3,4,5])
    이렇게도 가능은 하지만 greet에 배열 객체 말고는 다른 게 들어갈 수 없음. 유동적인 처리를 위해 스프레드 연산자를 활용하는
    위의 방식을 사용한다.
*/