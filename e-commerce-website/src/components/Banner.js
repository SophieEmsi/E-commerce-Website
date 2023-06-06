
import React,{useRef} from 'react';

export default function Banner() {
  const subscribeButton = useRef()
  const subscribeHandler = (e) => {
    
    e.preventDefault()    
    subscribeButton.current.className = 'subscription done'
    //setVal(e.target.value)
  };
  return (
    <div className="bg-gradient-to-r from-rose-400 to-orange-300 py-3 sm:py-1">
       <div className="mt-3 mb-3 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center text-gray-900">UP TO 50% OFF SELECTED ITEMS!</h2>
        <h3 className="text-xl text-center text-gray-900 mt-3">Limited time only. </h3>
      </div>
      <span className="d-block my-3 text-center">Subscribe to our newsletter in order not to miss new arrivals promotions and discounts of our store</span>

<div className="content">
  <form className="subscription" ref={subscribeButton}>
    <input className="add-email" type="email" placeholder="Enter email address" />
    <button className="submit-email" type="button" onClick={subscribeHandler}>
      <span className="before-submit">Subscribe</span>
      <span className="after-submit">Thank you for subscribing!</span>
    </button>
  </form>
</div>
    </div>
  );
}