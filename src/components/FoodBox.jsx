// import { Card, Col, Button } from 'antd';
import { Card, Col, Button } from 'antd'
import React from 'react';



function FoodBox(props) {
    const food = props.food
    console.log(props)
    return(
        food.map((allFood) => {
            return(
        <Col>
            <Card title={allFood.name}
            style={{ width: 230, height: 300, margin: 10 }}>

                <img src={allFood.image} height={60}  alt='food' />
                <p>Calories: {allFood.calories}</p>
                <p>Servings: {allFood.servings}</p>
                

                <Button type="primary"> Delete </Button>
            </Card>

        </Col>)
        })
        )}  
    


export default FoodBox;