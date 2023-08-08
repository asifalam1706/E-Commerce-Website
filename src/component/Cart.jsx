import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem, addItem } from '../redux/actions/index';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      dispatch({ type: 'SET_CART', payload: JSON.parse(cartItems) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state));
  }, [state]);


  const handleClose = (product) => {
    dispatch(delItem(product));
  };
  const handleButton = (product) => {
    dispatch(addItem(product));
  };

  const renderCartItem = (product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(product)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row">
            <div className="col-md-4">
              <img src={product.image} alt={product.title} height="200px" width="180px" />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                 Price: ${product.price}
              </p>
              
              
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderEmptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const renderButton = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
            Proceed To checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && renderEmptyCart()}
      {state.length !== 0 && state.map(renderCartItem)}
      {state.length !== 0 && renderButton()}
    </>
  );
};

export default Cart;
