
// banner image 
import banner1 from '../../../assets/images/banner/banner1.jpg'
import banner2 from '../../../assets/images/banner/banner2.jpg'
import banner3 from '../../../assets/images/banner/banner3.jpg'
import banner4 from '../../../assets/images/banner/banner4.jpg'
const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[500px] md:h-[600px]">
                    <img src={banner1} className=" md:w-full object-cover h-[500px] md:h-[600px] rounded-xl" />
                    {/* content */}
                    <div className="absolute flex items-center  left-0 right-5 top-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <div className=' md:w-1/2 ml-5 text-white space-y-2 md:space-y-5'>
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
                <div id="slide2" className="carousel-item relative w-full h-[500px] md:h-[600px]">
                    <img src={banner2} className="w-full object-cover h-[500px] md:h-[600px] rounded-xl" />
                    {/* content */}
                    <div className="absolute flex items-center  left-0 right-5 top-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <div className=' ml-5 text-white md:w-1/2 space-y-2 md:space-y-5'>
                            <h2 className='text-2xl md:text-5xl font-serif capitalize font-medium  '>Urban Companions<span className='text-sky-600'> The Resilient Beauty </span> <br />  of Pigeons</h2>
                            <p className='text-white '>
                                Pigeons: Graceful urban dwellers known for their adaptability, iridescent feathers, and timeless connection with city life.Pigeons, often seen as humble city dwellers, are fascinating birds with a rich history of companionship with humans. Known for their plump bodies, </p>
                            <div className='mt-3'>
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
                <div id="slide3" className="carousel-item relative w-full h-[500px] md:h-[600px]">
                    <img src={banner3} className="w-full object-cover h-[500px] md:h-[600px] rounded-xl" />
                    {/* content */}
                    <div className="absolute flex items-center  left-0 right-5 top-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <div className='ml-5  text-white md:w-1/2 space-y-2 md:space-y-5 '>
                            <h2 className='text-2xl md:text-6xl font-serif capitalize font-medium  '>Loyal Companions  of <span className='text-sky-600'>The Heart and Soul</span> <br /> Canine Friendship</h2>
                            <p className='mb-3'>
                                Cats are small, carnivorous mammals known for their agility, grace, and independent nature. They make delightful companions, offering affection and companionship. With their unique personalities, cats thrive in a variety .</p>
                            <div className=''>
                                <button className="btn btn-active btn-secondary ">book appointment</button>
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
                <div id="slide4" className="carousel-item relative w-full h-[500px] md:h-[600px]">
                    <img src={banner4} className="w-full object-cover h-[500px] md:h-[600px] rounded-xl" />
                    {/* content */}
                    <div className="absolute flex items-center  left-0 right-5 top-0  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <div className=' ml-5 md:w-1/2 text-white space-y-2 md:space-y-5 '>
                            <h2 className='text-2xl md:text-6xl font-serif capitalize font-medium'>The Charm and
                                <span className='text-sky-600'>Grace of</span>    Rabbits</h2>
                            <p className='mb-3'>
                                Gentle, curious creatures known for their soft fur, twitching noses, and playful hops, bringing a touch of nature&apos;s charm into our lives</p>
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