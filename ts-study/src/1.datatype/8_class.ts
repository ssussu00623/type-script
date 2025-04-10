/**
 * 타입스크립트의 클래스 타입
 * 클래스는 객체 타입으로 OOP의 Encapsulation(캡슐화)이 적용된 타입이다.
 * 클래스간의 상속이 가능하며, 이를 통해 확장성이 높다. 단, 메모리 효율성이 좋지 않다.
 * 클래스의 실행은 인스턴스를 생상하여 사용되며, new 라는 키워드를 통해 실행된다. 
 * 클래스 정의 형식
 * class 클래스명 {
 *      fields(필드명:변수) 선언
 *      construcot(생성자) 선언
 *      function(함수) 선언
 * }
 * 인스턴스 생성 형식
 * class의 인스턴스 이름 = nuw class의 생성자함수();
 * ❗❗ class의 생성자 함수는 클래스 이름과 동일❗❗
 */

//객체 설계 : 객체는 실세계를 기준으로 정해지는 구체적인 값을 일반화하여 추상화하는 개념 
// 하나의 커다란 개념... 한 키워드를 모든 사람이 같은 값을 떠올리는게 아닌 것처럼 해석하기 나름
// --> 고객, 카페, 카페메유
// --> 고객 : 이름, 나이, 메뉴, 금액, 주문한다
// --> 카페: 이름, 메뉴리스트, 음료를 만든다.
// --> 카페메뉴 : 메뉴명, 가격

// 메뉴(Menu) 클래스 선언
class Menu {
    name: string;
    price: number

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}
// 고객(Customer) 클래스 선언
class Customer {
    //fields
    name: string;
    age: number;
    menu: Menu;
    money: number
    //constructor
    constructor(name: string, age: number, menu: Menu, money: number) {
        this.name = name;
        this.age = age;
        this.menu = menu;
        this.money = money;
        console.log(`---------------------------------------------------------`);
        console.log(`\t\t  ${this.name}님이 입장!!!`);
        console.log(`---------------------------------------------------------`);

    }
    //function
    // order():void {
    //     console.log(`${this.name}이/가 ${this.menu.name}을/를 주문한다. 가격은 ${this.menu.price}원 이다.`);
    // }

    addExtraChange(money: number): void {
        this.money += money; // this.money = this.money + money;
    }
    receiveOrderMenu(orderMenu:string): void{
        console.log(`---------------------------------------------------------`);
        console.log(`\t\t 음료 전달`);
        console.log(`---------------------------------------------------------`);
        console.log(`👋 감사합니다. ${this.name}님! 다음에 또 방문해주세요!\n`);
        
        
    }
}

// 인스턴스 생성
// 인스턴스가 없으면 저장매체가 없어 출력되는 게 ㅇ벗음 ! 
// const hong: Customer = new Customer("홍길동", 30, new Menu("아이스아메리카노", 10), 100);

// console.log(hong);
// console.log(hong.name);
// console.log(hong.age);
// console.log(hong.menu);
// console.log(hong.money);

// hong.order();
// 고객 : 클래스... 생성X
// 구매자 ==> 객체 = 인스턴스 : 메모리 생성 
/**
 * 부상길씨가 출근 전 메가커피에서 아이스아메리카노를 주문한다.
    1. 메가커피 영업 시작 --> 메뉴판 출력
    2. 부상길씨가 입장
    3. 메뉴 선택 후 주문
    4. 주문확인 - 주문메뉴, 결제금액 확인  
        결제 불가 --> 결제 금액 부족 메세지 전달
        결제 가능 --> 5번 실행
    5. 주문 메뉴 제조 --> 메뉴 완료 메세지 전달
    부상길씨가 받고 퇴장

    만든다고 했을 때... for문은 반복 횟수가 정해져있을 때
    while은 문은 조건식이 true 일 경우에 계속해서 반복.
    카페처럼 주문 받는 것에 한계가 정해져있지 않을 때 while을 쓰는 것.
 */

//카페 기본 설정

class Cafe {
    name: string;
    menus: Menu[];
    orderMenu? : Menu; // takeOeder일 때만 필요하므로 조건으로 ? 생성한다.
    constructor(name: string, menus: Menu[]) {
        this.name = name;
        this.menus = menus;
        console.log(`*********************************************************`);
        console.log(`\t\t 영업시작`);
        console.log(`*********************************************************`);
        this.showMenu()
    }
    showMenu(): void {
        console.log(`---------------------------------------------------------`);
        console.log(`\t\t  메뉴안내`);
        console.log(`---------------------------------------------------------`);
        this.menus && this.menus.map((menu, index) => {
            menu.name.length > 5 ? console.log(`${index + 1}\t${menu.name}\t${menu.price}`)
                : console.log(`${index + 1}\t${menu.name}\t${menu.price}`);
            console.log(`---------------------------------------------------------`);
        })
    }
    takeOrder(name: string, orderMenu: Menu, payment: number) { 
        this.orderMenu = orderMenu;
        //4. 주문 확인 (가능/불가 여부 확인) 
        let orderCheckResult: boolean = false;
        const Omenu = this.menus.find((menu) => { menu.name === orderMenu.name })
        if (payment >= orderMenu.price) {
            console.log(`\n---------------------------------------------------------`);
            console.log(`\t\t 접수 확인`);
            console.log(`---------------------------------------------------------`); 
            console.log(`✅ 주문 확인 완료!`);
            console.log(`💬 ${name}님이 주문한 메뉴: ${orderMenu.name} (${orderMenu.price}원)`);
            console.log(`💰 지불 금액: ${payment}원`); 
            orderCheckResult = true;
        } else {
            console.log(`\n---------------------------------------------------------`);
            console.log(`\t\t 접수 확인`);
            console.log(`---------------------------------------------------------`); 
            console.log(`❌ ${name}님, 금액이 부족합니다. 결제가 불가능합니다.`);
            console.log(`💰 잔액을 충전해주세요.`);
        }
        return orderCheckResult;
    }

    makeMenu(name : string): void {
        console.log(`\n---------------------------------------------------------`);
        console.log(`\t\t 음료 제조 중....`);
        console.log(`---------------------------------------------------------`);
        console.log(`🥤 음료를 제조 중입니다...`); 
        
    }

    getOrderMenu(name: string): string {
        console.log(`✔️ ${this.name} 완성! ${name}님!!! 음료가 준비되었습니다.`);
        const menuName: string = this.orderMenu ? this.orderMenu.name : '';
        return menuName;
    }
}
const menuData: { name: string, price: number }[] = [
    { name: "아메리카노", price: 1700 },
    { name: "아이스 아메리카노", price: 2000 },
    { name: "바닐라라떼", price: 3000 }
];

const menus: Menu[] = menuData.map((menu) => { return new Menu(menu.name, menu.price) });

//1. 메가커피 영업 시작 --> 메뉴판 출력
const megacoffee: Cafe = new Cafe("메가커피☕", menus);

//2. 고객 입장 - 고객 리스트 생성: 부상길(아아), 애순(바닐라), 양관식(아메리카노)
const customers:{name:string, age:number, menu:Menu, money: number}[]=[ 
    {name: "부상길👨", age: 40, menu: new Menu(menuData[1].name,menuData[1].price), money: 1000}, 
    {name: "오애순👧", age: 32, menu: new Menu(menuData[2].name,menuData[2].price), money: 5000}, 
    {name: "양관식🧑", age: 40, menu: new Menu(menuData[0].name,menuData[0].price), money: 4000}, 
]

customers.map((customerData) => {
    const customer: Customer = new Customer(customerData.name, customerData.age, 
                                            customerData.menu, customerData.money); 

    let orderFlag = true;
    while (orderFlag) {
        if (megacoffee.takeOrder(customer.name, customer.menu, customer.money)) {
            orderFlag = false;
        } else {
            console.log(`\n---------------------------------------------------------`);
            console.log(`\t\t 결제금액 부족! 충전 진행`);
            console.log(`---------------------------------------------------------`);
            console.log(`💸 잔액을 충전합니다...`);
            customer.addExtraChange(customer.money);
            console.log(`💸 충전 완료! `);
        }
    }

    customer.receiveOrderMenu(megacoffee.getOrderMenu(customer.name)); 
});




// const sang: Customer = new Customer("부상길👨", 40, new Menu("아이스 아메리카노", 2000), 500); 
// const ohoh: Customer = new Customer("오애순👧", 24, new Menu("바닐라라떼", 3000), 10000);
// (name:string, age:number, menu:Menu, money:number)

//3. 메뉴 선택 후 주문 : 고객 <=====> 카페 
// let orderFlag = true; //처음은 무조건 확인해야하니 true로 하고 확인
// while (orderFlag) {
//     if (megacoffee.takeOrder(sang.name, sang.menu, sang.money)) {  
//         orderFlag = false;
//     } else {
//         // 결제 금액 부족 ===> 고객이 추가 지불
//         console.log(`\n---------------------------------------------------------`);
//         console.log(`\t\t 4. 결제금액 부족! 충전 진행`);
//         console.log(`---------------------------------------------------------`); 
//         console.log(`💸 잔액을 충전합니다...`);
//         sang.addExtraChange(1000)
//         console.log(`💸 충전 완료! `); 
//     }
// }

// 부상길 씨가 받고 퇴장



