import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState()
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState()
    const { user } = useAuth()
    const [transactionId, setTransactionId] = useState()

    useEffect(() => {
        axiosSecure.post('/create-payment-intent')
            .then(res => {
                console.log(res.data);
                setClientSecret(res.data.clientSecret)
            })

    }, [axiosSecure])






    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }

        // PAYMENT METHOD
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment method error', error);
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError('')
        }


        // // confirm payment
        // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //         card: card,
        //         billing_details: {
        //             email: user?.email || 'No email',
        //             name: user?.displayName || 'no name'
        //         }
        //     }
        // })

        // if (confirmError) {
        //     console.log('confirm error');
        // }
        // else {
        //     console.log('payment intent', paymentIntent);

        //     if (paymentIntent.status === 'succeeded') {
        //         console.log(paymentIntent.id);
        //         setTransactionId(paymentIntent.id)
        //         const payment = {
        //             //    
        //         }
        //         const res = await axiosSecure.post('/payments', payment)
        //         console.log('payment save', res.data);

        //         if (res.data?.paymentResult?.insertedId) {
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: "payment successfully",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //     }
        // }
        //         }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-info mt-6" type="submit" disabled={!stripe || clientSecret}>
                    payment Confirm
                </button>
                <p className="text-red-400">{error}</p>
                <p className="text-green-400">{transactionId}</p>
            </form>
        </div>
    );
};

export default CheckOutForm;