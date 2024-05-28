/* eslint-disable react/prop-types */

const GalleryCart = ({ photo }) => {

    return (
        <div className=" border drop-shadow-xl ">
            <img className="h-[420px] w-full p-5 object-cover  rounded-md" src={photo.image} alt="" />
        </div>
    );
};

export default GalleryCart;