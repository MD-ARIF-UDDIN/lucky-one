import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';

const Shop = () => {
    const [foods, setFoods] = useState([])
    const [cart, setCart] = useState([])
    const [randomFood,setRandomFood]=useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [])

    const handleAddToCart = (foodItem) => {

        const exists = cart.find(food => food.id === foodItem.id)
        if (exists) {
            alert('this food already exist in cart')
            return
        }
        if (cart.length === 4) {
            alert('Maximun number of food added')
            return
        }

        const newCart = [...cart, foodItem]
        setCart(newCart)
    }

   
    
    const randomAdd=(foods)=>{
        const random=Math.floor(Math.random()*foods.length)
        const randomSelect=(foods[random])
        setRandomFood(randomSelect)
    }

    const removeEverything=()=>{
        const emptyCart=[]
        setCart(emptyCart)
        setRandomFood(emptyCart)
    }


    return (
        <div className='row container mx-auto'>
            <div className='col-lg-9 col-sm-6 order-lg-1 order-sm-2'>
                <div className='row ms-4'>
                    {
                        foods.map(food => <Food
                        key={food.id}
                            food={food}
                            handleAddToCart={handleAddToCart}

                        ></Food>)
                    }
                </div>
            </div>
            <div className='col-lg-3 col-sm-6 cart-container order-lg-2 order-sm-1'>
                <Cart
                    cart={cart}
                    removeEverything={removeEverything}
                    randomAdd={randomAdd}
                    randomFood={randomFood}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;