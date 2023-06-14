import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSelectclass from '../../../Hooks/useSelectclass';
import { loadStripe } from '@stripe/stripe-js';
import useAuth from '../../../Hooks/useAuth';
import CheckoutForm from './PaymentMethod/CheckoutForm';
import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from 'react-helmet-async';

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const {user, loading}=useAuth();
    const {id}=useParams();
    const [refetch, selectClass]=useSelectclass();
    const [specificPay, setSpecificPay]=useState();
    const [price, setPrice] = useState(0);
   
    useEffect(()=>{
        const fetchSpecificClass = async () => {
            try {
              await refetch();
              const payClass = selectClass.find((item) => item._id === id);
              if (payClass) {
                setSpecificPay(payClass);
                setPrice(parseFloat(payClass.price));
              }
            } catch (error) {
              console.error('Error fetching specific class:', error);
            }
          };
        
          fetchSpecificClass();
    },[id, refetch, selectClass])
   
    // if(loading){
    //     return <div><span className="loading loading-ring loading-xs"></span></div>;
    // }
    console.log(specificPay);
    return (
        <div>
                <Helmet>
          <title>LanguageLadder | Payment</title>
        </Helmet>
            <h2 className="text-xl font-bold mt-5"> Payment section</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm specificPay={specificPay} price={price} id={id} refetch={refetch}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;