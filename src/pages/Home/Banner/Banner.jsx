
// banner image 
import banner1 from '../../../assets/images/banner/banner1.jpg'
import banner2 from '../../../assets/images/banner/banner2.jpg'
import banner3 from '../../../assets/images/banner/banner3.jpg'
import banner4 from '../../../assets/images/banner/banner4.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[700px]">
                    <img src={banner1} className=" md:w-full object-cover h-[700px] rounded-xl" />
                    {/* content */}
                    <div className="absolute flex flex-col  transform -translate-y-1/2 left-5 right-5   bottom-0 ">
                        <div className=' space-y-5 text-stone-800 md:w-1/2'>
                            <h2 className='text-3xl md:text-6xl font-serif capitalize font-medium  '>best  <span className='text-sky-600'>friend with</span> <br /> happy time</h2>
                            <p>
                                Cats are small, carnivorous mammals known for their agility, grace, and independent nature. They make delightful companions, offering affection and companionship. With their unique personalities, cats thrive in a variety .</p>
                            <div>
                                <button className="btn  btn-secondary">book appointment</button>
                                <button className="btn  bg-sky-500 ml-5">Explore more</button>
                            </div>
                        </div>

                    </div>

                    {/* circle button */}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-sky-500">❯</a>
                    </div>

                </div>

                {/* slide 2 */}
                <div id="slide1" className="carousel-item relative w-full h-[700px]">
                    <img src={banner2} className="w-full object-cover h-[700px] rounded-xl" />
                    {/* content */}
                    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5   bottom-0 ">
                        <div className=' space-y-5 text-stone-800 md:w-1/2'>
                            <h2 className='text-6xl font-serif capitalize font-medium  '>best  <span className='text-sky-600'>friend with</span> <br /> happy time</h2>
                            <p>
                                Cats are small, carnivorous mammals known for their agility, grace, and independent nature. They make delightful companions, offering affection and companionship. With their unique personalities, cats thrive in a variety .</p>
                            <div>
                                <button className="btn btn-active btn-secondary">book appointment</button>
                                <button className="btn btn-active bg-sky-500 ml-5">Explore more</button>
                            </div>
                        </div>
                    </div>

                    {/* circle button */}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-sky-500">❯</a>
                    </div>

                </div>
                {/* slid 3 */}
                <div id="slide1" className="carousel-item relative w-full h-[700px]">
                    <img src={banner3} className="w-full object-cover h-[700px] rounded-xl" />
                    {/* content */}
                    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5   bottom-0 ">
                        <div className=' space-y-5 text-stone-800 md:w-1/2'>
                            <h2 className='text-6xl font-serif capitalize font-medium  '>best  <span className='text-sky-600'>friend with</span> <br /> happy time</h2>
                            <p>
                                Cats are small, carnivorous mammals known for their agility, grace, and independent nature. They make delightful companions, offering affection and companionship. With their unique personalities, cats thrive in a variety .</p>
                            <div>
                                <button className="btn btn-active btn-secondary">book appointment</button>
                                <button className="btn btn-active bg-sky-500 ml-5">Explore more</button>
                            </div>
                        </div>
                    </div>

                    {/* circle button */}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-sky-500">❯</a>
                    </div>

                </div>
                {/* slide 4 */}
                <div id="slide1" className="carousel-item relative w-full h-[700px]">
                    <img src={banner4} className="w-full object-cover h-[700px] rounded-xl" />
                    {/* content */}
                    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5   bottom-0 ">
                        <div className=' space-y-5 text-stone-800 md:w-1/2'>
                            <h2 className='text-6xl font-serif capitalize font-medium  '>best  <span className='text-sky-600'>friend with</span> <br /> happy time</h2>
                            <p>
                                Cats are small, carnivorous mammals known for their agility, grace, and independent nature. They make delightful companions, offering affection and companionship. With their unique personalities, cats thrive in a variety .</p>
                            <div>
                                <button className="btn btn-active btn-secondary">book appointment</button>
                                <button className="btn btn-active bg-sky-500 ml-5">Explore more</button>
                            </div>
                        </div>
                    </div>

                    {/* circle button */}
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-sky-500">❯</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;