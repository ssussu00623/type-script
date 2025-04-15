import React from 'react';
import { Food, FoodListPrice, FoodListText } from '@interfaces/common';

// interface LunchListProps {
//     foodList: (Food | FoodListPrice | FoodListText)[];
// } 

// 인터페이스 정의 (Employees 구조 기반)


type LunchListProps = {
    foodList: (Food | FoodListPrice | FoodListText)[];
}

const LunchList: React.FC<LunchListProps> = ({ foodList }) => {
    return (
        <div>
            <h2>LunchList</h2>
            <ul>
                {
                    foodList.map((food, index) => (
                        <li key={index}>
                            {food.name} / {food.emoji} /
                            {'price' in food ? food.price : 'text' in food ? food.text : ''}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default LunchList;
