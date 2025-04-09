/**
 * 배열(Array) : 동일한 데이터 타입을 가진 값들을 물리적으로 연속해서 저장해놓은 객체로 Heap에 저장됨
 * 튜플(Tuple) : 다양한 데이터 타입을 가진 값들을 물리적으로 연속해서 저장함. Heap에 저장됨.
 *              인덱스별로 데이터 타입을 정의.(이래서 다양한 타입을 저장할 수 있는 것) 
 * 튜플 정의 형식
 * const(let) 변수명 : [데이터타입, 데이터타입, ....] = [데이터값1,...]
 */

const num: number = 100;
const numArray: number[] = [1, 2, 3, 4, 5];
// const numTuple: [number, string, boolean, number] = [1, "hong", true, 3]; < 정석은 이렇지만 생략해도 오류는 나지 않는다.
const numTuple = [1, "hong", true, 3];

// const [] = 함수명ㅣ 구조분해 할당을 이용하여 인덱스 별로 튜플에 저장함
const [a,b,c,d] = numTuple;
console.log(num);
console.log(numArray);
console.log(numTuple);
console.log(a,b,c,d);
