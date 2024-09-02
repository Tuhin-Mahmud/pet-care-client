const Budget = () => {
    return (
        <div className="my-10">
            <h1 className="text-xl md:text-4xl font-serif  text-center mb-5">Why Trust Us with <br /> Your Pet&apos;s Care?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center  ">
                {/* ---1--- */}
                <div className="border p-4">
                    <h1 className="text-5xl font-serif  ">3000</h1>
                    <div className="divider w-28 mx-auto divide-dotted divide-teal-400"></div>
                    <p className="text-xl text-gray-400 font-serif">Milions Dolars Saved</p>
                </div>
                {/* ---2--- */}
                <div className="border p-4">
                    <h1 className="text-5xl font-serif  ">1368</h1>
                    <div className="divider w-28 mx-auto"></div>
                    <p className="text-xl text-gray-400 font-serif">Successful Deals</p>
                </div>
                {/* ---3--- */}
                <div className="border p-4">
                    <h1 className="text-5xl font-serif  ">0700</h1>
                    <div className="divider w-28 mx-auto"></div>
                    <p className="text-xl text-gray-400 font-serif">Advisions & Experts</p>
                </div>
                {/* ---4--- */}
                <div className="border p-4">
                    <h1 className="text-5xl font-serif">3228</h1>
                    <div className="divider w-28 mx-auto"></div>
                    <p className="text-xl text-gray-400 font-serif">Happy Customers</p>
                </div>
            </div>
        </div>
    );
};

export default Budget;