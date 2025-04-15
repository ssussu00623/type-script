import React from 'react';
import { Menu, MenuPrice, MenuSource } from '@interfaces/common';
// ----------------자바스크립트 문법

// import React from 'react';

// export default function MenuList() {
//     return (
//         <div>

//         </div>
//     );
// }

/* ----------------tsx형식 
props 타입을 체크해서 받는게 가장 중요
: property와 데이터 타입이 동일해야함 
- interface, type으로!

밖에서 선언해야한다. 밖에서 체크하고 통과하면 넘겨준다는 느낌.
*/

// 1. interface에서 type을 넣고 체크하여 출력하는 방법
/*
interface MenuListProps {
    menus: {
        name: string, //name: 이 프로퍼티
        emoji: string, // string이 데이터타입
        price?: number, // 필수항목이 아닐 경우 ?를 붙이면 된다.
        source?: string
    }[]// 넘어오는 데이터가 배열 형태
    // 하나씩만 체크할 때는 필요 없지만 배열로 넘어온다면 꼭 추가.
};
*/


// 2. props 타입을 체크 : interface + type 객체 재사용성을 높일 수 있음
/*
interface Menu {
    name:string, //name: 이 프로퍼티
    emoji:string, // string이 데이터타입
    price?:number, // 필수항목이 아닐 경우 ?를 붙이면 된다.
    source?:string
} 
type MenuListProps = {
    menus : Menu[]; 
};
*/


// 3. 점정 OOP 형식 : interface(부모, 자식 관계 도출) + type 
// 중복 최소화가 타입스크립트의 가장 중요한 점 
/*
interface Menu {
    name: string,
    emoji: string,
}
interface MenuPrice extends Menu {
    price?: number;
}
interface MenuSource extends Menu {
    source?: string
}
type MenuListProps = {
    menus: (Menu | MenuPrice | MenuSource)[];
};
*/

//조건과 체크가 길어지면... 리딩하기 불편함 그 부분을 개선한 버전 << 가장 권장
// 4. interface또는 typeAlias를 별도의 파일로 저장 후 import해서 사용함
// tscomfig.json 파일에 저장된 파일의 경로를 path와 별칭으로 추가한 후 import
// 타입스크립트를 자바스크립트로 변환 시키는 컴파일 설정을 한꺼번에 정의 해놓는 파일
type MenuListProps = {
    menus: (Menu | MenuPrice | MenuSource)[];
};

const MenuList: React.FC<MenuListProps> = ({ menus }) => {
    return (
        <div>
            <h2>MenuList</h2>
            <ul>
                {
                    menus.map((menu) => (
                        <li> {menu.name} /
                            {menu.emoji} /
                            {/* {'price' in menu && menu.price}
                    {'source' in menu && menu.source} */}
                            {'price' in menu ? menu.price : 'source' in menu ? menu.source : ''}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default MenuList;