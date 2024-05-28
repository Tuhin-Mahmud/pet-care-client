import { FaUserCheck } from "react-icons/fa";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useState } from "react";


const PetLisModal = () => {
    const [amount, setAmount] = useState()
    // ----------------------------
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY)




    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn bg-sky-400 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Donated Amount</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                {/* content here */}
                <div className="modal-box">
                    <h3 className="font-bold text-xl font-mono flex items-center text-sky-400 capitalize"><FaUserCheck className="mr-2" /> Please payment Confirm</h3>
                    <div className="divider  divide-dashed"></div>
                    {/* form here */}

                    <div className="p-5">
                        <input onChange={(e) => setAmount(e.target.value)} name="amount" type="text" className="py-2 px-3 border w-full mb-5 outline-none rounded-lg" placeholder="Donated Amount $" />
                        <Elements stripe={stripePromise}>
                            <CheckOutForm ></CheckOutForm>
                        </Elements>
                    </div>


                    {/* ------------------ */}


                    <div className="modal-action">

                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default PetLisModal;