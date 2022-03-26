import { faRandom, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import Order from '../Order/Order';
import './Cart.css'

const Cart = (props) => {
    const { cart, removeEverything,randomAdd,randomFood} = props
    return (
        <div className="shop-cart mt-5">
            <div>
                <h3>Order Summary</h3>
                <h4>Your Order:</h4>
            </div>
            <div>
                {
                    cart.map(food => <Order food={food}></Order>)
                }
                <div className='mb-2 mt-3'>
                    <Button onClick={()=>randomAdd(cart)} variant="primary">Choose one Randomly <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon> </Button>
                </div>
                <div>
                    <Button onClick={removeEverything} variant="success">Choose food again <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon> </Button>
                </div>
                <h4>Selected food for you</h4>
                <div className="d-flex justify-content align-items-center mt-3">
                    {
                        randomFood.img && <img className="rounded-circle selected-food" src={randomFood.img} alt=" "></img>   
                    }
                    <p className="ms-2 fw-bold">{randomFood.name}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;