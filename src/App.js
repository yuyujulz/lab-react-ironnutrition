import foods from "./foods.json";
import './App.css';
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFood from './components/AddFoodForm'
import { Row, Divider, Button } from 'antd';

function App() {
const [food, setFood]= useState(foods)
 
  return (
    <div className="App">
      <h1>Welcome to IronNutrition!</h1>
      <Button> Hide Form / Add New Food </Button>
      <Divider>Food List</Divider>
      

    <Row style={{ width: '100%', justifyContent: 'center' }}> 
      <FoodBox food={food} />  {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;
