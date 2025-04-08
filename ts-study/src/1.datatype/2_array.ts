/**
 * 타입스크립트 배열 형식
 * const(let) 배열변수명 : 타입정의 = []; = [데이터,...]
 * const(let) 배열변수명: Array<타입정의> = new Array();
 * 타입 정의를 신경쓰자 ! 
 */

// 1,2,3,4,5 숫자를 저장하는 배열 생성

const numArray1: number[] = [1, 2, 3, 4, 5]; //classtype
const numArray2: Array<number> = new Array(1, 2, 3, 4, 5); // Generics

console.log(numArray1[0]);
console.log(numArray2[3]);

//forEach, for ...in, for ...on, map...
numArray1.forEach((number) => console.log('numArray1===>', number));
numArray2.forEach((number) => console.log('numArray2===>', number));

for (const n of numArray1) console.log('for_of1---->', n);
for (const n of numArray2) console.log('for_of2---->', n); 