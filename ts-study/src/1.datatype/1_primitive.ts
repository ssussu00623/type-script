/**
 *  타입스크립트의 primitive 데이터 타입 실습
 * 변수 정의 : const(let) 변수명
 */

//정수형 데이터
let number1: number = 100;
number1 = 200;
console.log(number1);

// 실수형
let dnumver1: number = 1.234;
console.log(dnumver1);


//불린
let flag: boolean = false;
const flag2: boolean = !flag; 
console.log(flag, flag2);

// 배열 : 문자열 타입 - 홍길동, 홍길순, 홍길영
const names = ['홍길동', '홍길순', '홍길영'];
console.log(names);

// const names: string = ['홍길동', '홍길순', '홍길영'];
// 이렇게 하면 객체의 주소 "타입"을 스트링으로 설정한 것과 같다. 주소는 이미 타입이 정해져있어서 수정 할 수 없음. 

const names2: string[] = ['홍길동', '홍길순', '홍길영']; 
//이런 식으로 객체 주소 안의 요소가 string이 될 수 있도록 설정해준다.

//초기값 : undefined, null
const intiName: undefined = undefined;
const intiArray: null = null;

console.log(intiName);
console.log(intiArray);

//문법을 정확하게 지키고 싶다면 타입을 선언할 수 있지만...실무에서는 undefined와 null은 설정하지 않아도 출력하기 때문에 유도리있게 설정할 것.

//type of
const x : number =100; 
const xx : number =100;

console.log('값의 비교>>', x == xx);
console.log('타입의 비교>>', typeof(x) == typeof(xx));
