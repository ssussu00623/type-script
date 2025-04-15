import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import MenuList from './components/MenuList';
import './App.css';
import Employees from './components/Employee';
import LunchList from './components/LunchList'
import axios from 'axios';
import { get } from 'http';

function App() {
  // 1. 오브젝트 리터럴 방식 - 하나씩 있을 때는 좋지만... 많아진다면 배열로 넘기는 것이 효율적 
  // const menu = {
  //   name : "apple",
  //   emoji : "🍎" ,
  //   price : 3000,
  //   source: "청송"
  // };

  //2. 배열 방식
  /*
  const menus = [
    { name: "apple", emoji: "🍎", price: 3000},
    { name: "lemon", emoji: "🍋", price: 4000, source: "이탈리아" },
    { name: "cherry", emoji: "🍒", source: "미국" }
  ]
const employees = [
  { name: "부성길", age: 25, department: "구계장", emoji: "👦" },
  { name: "양관식", age: 19, department: "영부인" },
  { name: "이애순", age: 18, department: "대통령", emoji: "👧" },
  { name: "박영란", age: 18, department: "공인중개사"}
];
const foodList = [
  {name: "햄버거", emoji : "🍔", price : 100 },
  {name: "라멘", emoji : "🍜", text : "맛있는 라멘~"},
  {name: "핫도그", emoji : "🌭", price : 200 },
  {name: "도시락", emoji : "🍱", text : "가성비 짱 ! 도시락"},
  {name: "케이크", emoji : "🍰", text : "달콤한 케이크"},
  {name: "도넛", emoji : "🍩",  price : 300 }
]*/

// 3. json 끌어오기 
const [ts, setTs] = useState({})
const [menus, setMenus] = useState([])
const [employees, setEmployees] = useState([])
const [foodList, setFoodList] = useState([])

useEffect(()=>{
  axios('data/ts.json')
  .then((res)=>{
    setMenus(res.data.menus);
    setEmployees(res.data.employees);
    setFoodList(res.data.foodList);
  })
  .catch(error=> console.log(error))
}, [])

return (
  <div className="App">
    <h1>Hello~ Type Script~~~~ </h1><hr />
    <MenuList
      menus={menus}
    />
    <Employees employees={employees} />
    <LunchList foodList = {foodList} />
  </div>
);
}

export default App;
