import React, { useState, useRef } from 'react';

const SubscriptionForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const subscribeButton = useRef();

  const subscribeHandler = (e) => {
    e.preventDefault();
    subscribeButton.current.className = 'subscription done';
  };

  return (
    <div className="flex justify-center m-5">
      <div className="hover:border-dashed border-8 border-t-indigo-400 border-r-sky-400 border-b-emerald-400 border-l-amber-400 h-70 w-3/5">
        <div className="container-subscribe flex flex-col items-center justify-center">
          <h5 className="mt-5 mb-4 text-center font-semibold text-xl tracking-wider">NEW USERS ONLY:</h5>
          <div className="mt-2 mb-4 flex justify-center">
            <span className="border-gray-500 text-lg">
              GET <strong>£5 OFF</strong> ON ORDERS 25+
            </span>
            <div className="ml-2 mr-2 flex items-center">
              <span className="border-l-2 border-gray-500 pl-2 text-lg">
                <strong>FREE DELIVERY</strong> ON ORDERS £9.99+
              </span>
            </div>
          </div>
          <div className="mt-4 content">
            <form className="subscription" ref={subscribeButton}>
              <input className="add-email" type="email" placeholder="Enter email address" />
              <button className="submit-email hover:bg-gray-800" type="button" onClick={subscribeHandler}>
                <span className="before-submit text-base">Subscribe</span>
                <span className="after-submit text-base">Thank you for subscribing!</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
