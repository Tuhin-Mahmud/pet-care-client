
const Choice = () => {
    return (
        <div>
            <h1 className="text-4xl font-medium font-serif">Your Budget, Your Choice</h1>
            <div>
                <div className="group relative max-w-[350px] overflow-hidden bg-gradient-to-r from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] px-6 py-6 text-white shadow">
                    {/* <span className="bg-gradient-to-r from-[#0064c2] via-[#49aef7] to-[#c7e0f1] duration-300 group-hover:blur-sm"></span>
                    <span className="bg-gradient-to-tr from-[#0064c2] via-[#4FB5FF] to-[#4FB5FF] duration-300 "></span> */}
                    {/* <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#0064c2] via-[#49aef7] to-[#c7e0f1] duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span> */}
                    <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#0064c2] via-[#4FB5FF] to-[#4FB5FF] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                    <div className="relative z-20 space-y-6"></div>
                    <div>
                        <h2 className="text-4xl font-serif">$8</h2>
                        <p className="text-2xl">Basic</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choice;