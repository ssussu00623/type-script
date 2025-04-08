/**
 * 타입스크립트 함수 선언 확장
 */

//함수 선언 후 차후 구현하는 방법 : 함수표현식(화살표 함수)
// greet7("홍길동") 화면 출력 : 이름 - 홍길동
let greet7: (pname: string) => string;
greet7 = (pname: string): string => {
    return `이름 - ${pname}`;
}

console.log(greet7("홍길동"));


// 함수의 오버로딩(Overloading) : 가상함수로 정의(abstract function)
// 오버로딩(Overloading) : 동일한 이름의 함수가 여러 개 존재하는 것. 
// 단, 함수의 파라미터(매개변수)의 갯수와 타입은 달라야 한다. (중요!)

// add(100, 200); add();

/** 반드시 가상함수를 기본 함수 형식으로 정의해야 함 ! ! ! **/

function add(p1: number, p2: number): number; // {} = body(구현부) 없이 header만 선언 
function add(ps1: string, ps2: string): string;

function add(p1: any, p2: any): any {
    return p1+p2;
}

console.log(add(100, 200));
console.log(add("홍", "길동"));


// 💥 함수에서의 제너릭(Generic): 객체 타입의 제한을 두는 경우
// 함수 선언시 제너릭을 사용하여, 매개변수와 리턴타입을 통일할 수 있음
// 제너릭을 통해 함수를 선언하는 경우 매개변수 이름은 중립적으로 정의하는 것을 권장 (필수는 아님!)
// 원시타입 string, number, boolean 타입은 Wapper Class 형식으로 빌트인 정의되어 있음.

function greet8<T>(vlaue: T):T { // 타입이 name 인지 age인지 정해진게 아니니 value로 두고 출력하는 것을 권장한다는 뜻. 
    return vlaue;
};

console.log(greet8<string>("Generic= 홍길동")); //console.log(greet8<String>("Generic= 홍길동"));인게 정석이지만, 빌트인 정의되어있어 오류는 나지 않는다.
console.log(greet8<number>(100)); // 마찬가지로 원시타입인 number타입의 Wapper Class인 Number 클래스로 자동변환 
console.log(greet8<boolean>(true)); //Boolean
console.log(greet8<Array<number>>([1, 10, 100]));
console.log(greet8<Array<number>>(new Array(100, 10, 1))); // 11.2.0 이상에서 실행되므로 버전 이슈 발생함. 
