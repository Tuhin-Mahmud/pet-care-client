
const Choice = () => {
    return (
        <div className="my-10">
            <h1 className="text-4xl font-medium font-serif text-center mb-5">Your Budget, Your Choice</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-3 lg:px-0 shadow-lg">
                {/* 1 */}
                <div className="group relative md:max-w-[350px] h-[180px] overflow-hidden bg-gradient-to-r from-[#96C9F4] via-[#48CFCB] to-[#4FB5FF] px-6 py-6 text-white  rounded-tr-2xl items-center flex justify-center  md:ml-0 ">

                    <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#0064c2] via-[#4FB5FF] to-[#4FB5FF] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                    {/* <div className="relative z-20 space-y-6"></div> */}
                    <div className="text-center">
                        <h2 className="text-5xl font-serif mb-2 font-bold">$8</h2>
                        <p className="text-3xl">Basic</p>
                    </div>
                </div>
                {/* 2 */}
                <div className="group relative md:max-w-[350px] h-[180px] overflow-hidden bg-gradient-to-r from-[#96C9F4] via-[#4FB5FF] to-[#4FB5FF] px-6 py-6 text-white shadow rounded-tr-2xl items-center flex justify-center ">

                    <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#0064c2] via-[#4FB5FF] to-[#4FB5FF] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                    {/* <div className="relative z-20 space-y-6"></div> */}
                    <div className="text-center">
                        <h2 className="text-5xl font-serif mb-2 font-bold">$15</h2>
                        <p className="text-3xl">Silver</p>
                    </div>
                </div>
                {/* 3 */}
                <div className="group relative md:max-w-[350px] h-[180px] overflow-hidden bg-gradient-to-r from-[#96C9F4] via-[#4FB5FF] to-[#4FB5FF] px-6 py-6 text-white shadow rounded-tr-2xl items-center flex justify-center ">

                    <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#0064c2] via-[#4FB5FF] to-[#4FB5FF] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                    {/* <div className="relative z-20 space-y-6"></div> */}
                    <div className="text-center">
                        <h2 className="text-4xl font-serif font-bold">$28</h2>
                        <p className="text-2xl">Gold</p>
                    </div>
                </div>
                {/* 4 */}
                <div className="group relative md:max-w-[350px] h-[180px] overflow-hidden bg-gradient-to-r from-[#96C9F4] via-[#4FB5FF] to-[#4FB5FF] px-6 py-6 text-white shadow rounded-tr-2xl items-center flex justify-center ">

                    <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#0064c2] via-[#4FB5FF] to-[#4FB5FF] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                    {/* <div className="relative z-20 space-y-6"></div> */}
                    <div className="text-center">
                        <h2 className="text-4xl font-serif font-bold">$35</h2>
                        <p className="text-2xl">Platinum</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choice;