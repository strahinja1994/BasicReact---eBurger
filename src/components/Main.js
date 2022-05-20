import React from 'react';
import {burgersData} from './burgersData';
import {pizzaData} from './pizzaData';

export default function Main() {

    const pizzas = pizzaData.map((pizza,index) => {
        return(
            <div className='main__pizzas-pizza' key={index}>
                <img src={pizza.image} alt={pizza.title} className='main__pizzas-pizza--image'/>
                <h2 className='main__pizzas-pizza--title'>{pizza.title}</h2>
                <p className='main__pizzas-pizza--text'>{pizza.text}</p>
                <button className='main__pizzas-pizza--button'>Order</button>
            </div>
        )
    })

    const burgers = burgersData.map((burger,index) => {
        return(
            <div className='main__burgers-burger' key={index}>
                <img src={burger.image} alt={burger.title} className='main__burgers-burger--image'/>
                <h2 className='main__burgers-burger--title'>{burger.title}</h2>
                <p className='main__burgers-burger--text'>{burger.text}</p>
                <button className='main__burgers-burger--button'>Order</button>
            </div>
        )
    })

    return(
        <main className='main'>
            <h1 className='main__pizzas-title' id="pizzas">Pizzas</h1>
            <div className='main__pizzas'>
                {pizzas}
            </div>

            <h1 className='main__burgers-title' id="burgers">Burgers</h1>
            <div className='main__burgers'>
               {burgers}
            </div>
        </main>
    )
}