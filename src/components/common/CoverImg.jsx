/* eslint-disable react/prop-types */
const CoverImg = ({ image, text }) => {
    return (

        <div>
            <div className=' mb-40'>
                <img className='h-[450px] w-full object-cover rounded-xl ' src={image} alt="" />

                <h2 className='-mt-36 ml-24 uppercase text-white text-5xl'> {text} </h2>
            </div>
        </div>
    );
};

export default CoverImg;