import { useState } from "react";

const Accordion = () => {

    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const datas = [
        { title: 'Can I leave my pet in Pawsy Pet Care?', color: 'green', description: "Leaving your pet at Pawsy Pet Care can be a good decision if the facility meets your and your pet's needs. Here are some steps to help you decide if Pawsy Pet Care is a suitable choice" },

        { title: "How much does Pawsy's pet grooming cost?", color: 'sky', description: "The cost of grooming services at Pawsy Pet Care varies depending on the specific services you require and the size of your pet. Typically, basic grooming packages include services like a bath, haircut, nail trimming, ear cleaning, and sometimes anal gland expression. Prices can range from around $40 to $75 for standard grooming sessions. It's best to contact Pawsy Pet Care directly for the most accurate and detailed pricing tailored to your pet's needs​ (Paw's-n-Claw's Pet Care Palace)​​ (Paws Pet Resort)​​ (Pawspet)​." },

        { title: "How do I register with Pawsy Pet Care?", color: 'purple', description: "Complete the online registration form with your personal details, your pet’s information, and any specific care requirements. This usually includes your contact information, pet's breed, age, medical history, and any special needs or preferences." },

        { title: "What payment methods are available?", color: 'amber', description: "Stripe  payment methods for its services. You can use major credit cards, such as Visa, MasterCard, American Express, and Discover, which are commonly accepted. Additionally, Pawsy Pet Care supports payments via PayPal and Venmo, providing flexible options for different preferences. Some locations may also accept cash payments and checks, so it's best to confirm with your specific Pawsy Pet Care location to ensure they accept your preferred payment method" },

    ];
    return (
        <div>
            <div className="space-y-4 p-2 ">
                {datas?.map((data, idx) => (
                    <div key={idx}>
                        {/* header / Title */}
                        <div onClick={() => handleToggle(idx)} className={`px-4 md:px-8 py-6 ${idx === 0 ? 'bg-green-50 border-green-500' : idx === 1 ? 'bg-sky-50 border-sky-500' : idx === 2 ? 'bg-purple-50 border-purple-500' : idx === 3 ? 'bg-amber-50 border-amber-500' : idx === 4 ? 'bg-red-50 border-red-500' : 'bg-orange-50 border-orange-500'} border-l-[3px] cursor-pointer`}>
                            <div className="flex items-center">
                                <span>
                                    <svg className={`mr-4 ${idx === 0 ? 'fill-green-900' : idx === 1 ? 'fill-sky-900' : idx === 2 ? 'fill-purple-900' : idx === 3 ? 'fill-amber-900' : idx === 4 ? 'fill-red-900' : 'fill-orange-900'} shrink-0`} width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /><rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /></svg>
                                </span>
                                <h4
                                    className={`${idx === 0 ? 'text-green-900' : idx === 1 ? 'text-sky-900' : idx === 2 ? 'text-purple-900' : idx === 3 ? 'text-amber-900' : idx === 4 ? 'text-red-900' : 'text-orange-900'} text-xl`}>
                                    {data.title}
                                </h4>
                            </div>
                        </div>
                        {/* body / content  */}
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                <div className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  ${idx === 0 ? 'text-green-900 bg-green-50 border-green-500' : idx === 1 ? 'text-sky-900 bg-sky-50 border-sky-500' : idx === 2 ? 'text-purple-900 bg-purple-50 border-purple-500' : idx === 3 ? 'text-amber-900 bg-amber-50 border-amber-500' : idx === 4 ? 'text-red-900 bg-red-50 border-red-500' : 'text-orange-900 bg-orange-50 border-orange-500'} `}>
                                    {data?.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;