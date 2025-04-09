/**
 * 열거형으로 표현되는 데이터를 저장하는 형식
 * 정의 형식
 * const(let) 변수명 {
 *      enum item 1,    //인덱스 0
 *      enum item 2,    //인덱스 1
 *      ...
 * }
 */

const objLiteral = {
    name: "홍길동",
    age: 30,
    add: "서울시 강남구",
    army: true
}

enum objenum { // const 가 붙으면 변수 형태로 들어가기 때문에 자동 이터러블 적용이 안 됨 ! 
    typeScript = "타입스크립트", //0
    javaScript = "자바스크립트", //1
    react = "리액트" //2
}

console.log(objLiteral);
console.log(objenum.typeScript);

// 출력 형식의 차이점  ! ! 
// objLiteral --> for...in 사용 ❌, object.keys() : [name, age] ==> for...in을 적용해서 출력(mdn 확인)
const keys = Object.keys(objLiteral)
console.log(keys);
console.log(`keys.forEach---------------------------------->`);

keys.forEach((key) => {
    console.log(`{${key}:${objLiteral[key as keyof typeof objLiteral]}}`);
})

// // objenum --> for...in 사용⭕
console.log(`enum_for in---------------------------------->`);
for (const key in objenum) {
    console.log(`{${key}:${objenum[key as keyof typeof objenum]}}`);
    // typeScipt에선 &&으로 줄이지 못함! 풀어서 씀
}