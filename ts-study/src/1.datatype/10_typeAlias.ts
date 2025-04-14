/**
 * 타입 별칭 = 객체 타입을 정의함, 인터페이스와 같은 역할로 사용됨
 */

type AnimalType = {
    name:string;
    blood:string;
    color:string;
    sleep():void;
}

// 타입을 구현하기 위한 클래스 정의

class typeClass implements AnimalType { 
    // 똑같이 구현... 오버라이딩
    name:string;
    blood:string;
    color:string;
    constructor(name:string, blood:string, color:string){
        this.name = name;
        this.blood = blood;
        this.color = color;
    }
    sleep():void{
        console.log(`${this.name}가 잠을 자요.`); 
    }
    info():void{
        console.log(`${this.name}의 혈액형은 ${this.blood}이고, 색깔은 ${this.color}입니다.`);
    }
}

//AnimalType의 객체 생성
//AnimalType으로 연결해서 출력하면... 메모리엔 저장되어있어 sleep은 되지만
// info는 typeClass에서 생성되었기 때문에... typeClass로 연결해주어야 함
// const bucks: AnimalType = new typeClass("벅스", "A형", "🤎"); // ==> AnimalType이므로 info() 메소드 호출불가
const bucks: typeClass = new typeClass("벅스", "A형", "🤎"); // == >typeClass이므로 모든 메소드 호출 가능 
bucks.sleep(); 
bucks.info();  
