/**
 * class Animal {
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

    이런식으로... 호출되는게 없는데 들어가있는 정보를 보다 깔끔하게 (body없이 정의하는 것)
 */

/**
 * 인터페이스 - 클래스 형식의 객체 타입 정의, body 없이 header만 정의, 메모리 생성 불가❌
 */

interface AnimalInteface {
    name:string, 
    blood:string,
    color:string
    
    sleep():void;
};

// const at:AnimalInteface = new AnimalInterface(); 
// AnimalInterface 💥단독으로 객체 생성 불가!!!!!!💥 외워야 함.  

// interface 상속시 implements
// 속성과 함수를 모두 반드시 💥오버라이딩(Overriding)💥 해야함!!!!
// 오버라이딩은 부모가 가지고 있는 속성과 함수를 그대로 상속받아 구현하는 것을 의미함 

interface DogInterface extends AnimalInteface { 
    type : string; 
};


// 구현 클래스 정의
class Implclass implements DogInterface {
    name:string;
    blood:string;
    color:string;
    type:string
    constructor(name:string, blood:string, color:string, type:string){
        this.name = name;
        this.blood = blood;
        this.color = color;
        this.type = type;
    }
    sleep(): void {
        console.log(`${this.name}가 잠을 자요.`); 
    }
}


const haha:DogInterface = new Implclass("하하", "Otype", "🤍", "리트리버");
console.log(haha.name);
console.log(haha.blood);
console.log(haha.color);
console.log(haha.type);
haha.sleep();