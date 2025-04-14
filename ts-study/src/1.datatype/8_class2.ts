/**
 * 각 동물들의 기본 정보
 * Dog
 * 속성:  이름, 혈액형, 색
 * 행위: 먹는다, 잔다
 * 
 * Cat
 * 속성:  이름, 혈액형, 색
 * 행위: 먹는다, 잔다
 * 
 * Rabbit
 * 속성:  이름, 혈액형, 색
 * 행위: 먹는다, 잔다
 * 
 * 손님 class처럼 animal 부모 클래스를 하나 생성해서 
 * 설계 진행. 일반화 시켜 연결하는 것 
 * 
 * Animal클래스를 생성하고...
 * Dog extends Animal 형식으로 연결해주는 것 
 * 부모의 속성과 상속을 상솓받아 사용할 수 있다.
 */

class Animal {
    name;
    blood;
    color;
    constructor(name:string, blood:string, color:string){
        this.name = name;
        this.blood = blood;
        this.color = color;
    }
    sleep():void{
        console.log(`${this.name}가 잠을 자요.`);
        
    }
};

class Dog extends Animal {
    type : string;

    // 부모 연결 전까지 오류가 없던 constructor 부분에 오류가 난다.
    constructor(name:string, blood:string, color:string, type:string){
        super(name, blood, color) // 부모와 연결! 부모의 생성자
        this.type = type; 
    }
    sleep():void{
        console.log(`${this.name}가 잠을 자요.`);
        
    }
};

class Cat extends Animal{
    type: string;

    constructor(name:string, blood:string, color:string, type:string){
        super(name, blood, color)
        this.type = type;
    }
    sleep(): void {
        console.log(`${this.name}가 잠을 자요.`); 
    }
}
class Rabbit extends Animal{
    type: string;

    constructor(name:string, blood:string, color:string, type:string){
        super(name, blood, color)
        this.type = type;
    }
    sleep(): void {
        console.log(`${this.name}가 잠을 자요.`); 
    }
}

// 상속관계의 Dog클래스 호출
const choco:Dog = new Dog("choco", "Atype", "🟫", "푸들");
console.log(choco.name);
console.log(choco.blood);
console.log(choco.color);
console.log(choco.type);
choco.sleep();
const pipi:Cat = new Cat("pipi", "Btype", "⬜", "페르시안");
console.log(pipi.name);
console.log(pipi.blood);
console.log(pipi.color);
console.log(pipi.type);
pipi.sleep();
const momo:Rabbit = new Rabbit("momo", "Otype", "⬛", "롭이어");
console.log(momo.name);
console.log(momo.blood);
console.log(momo.color);
console.log(momo.type);
momo.sleep();
