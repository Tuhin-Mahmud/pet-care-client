import inspirationImg from '../../assets/images/category/cats/cat4.jpg'
import inspiration1 from '../../assets/images/inspawaration/inspiration1.jpg'
import inspiration2 from '../../assets/images/inspawaration/inspiration2.jpg'
import inspiration3 from '../../assets/images/inspawaration/inspiration3.jpg'
import inspiration4 from '../../assets/images/category/cats/inspiration6.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CoverImg from '../../components/common/CoverImg'
const Inspiration = () => {
    return (
        <div>

            <CoverImg image={inspirationImg} text={'inspiration Page'}></CoverImg>
            {/*---1---*/}
            <SectionTitle subHeading='We want to ensure  the happiness for the pets.' Heading='inspirational Image and text'></SectionTitle>
            <div className='w-3/4 mx-auto mb-10'>
                <img className=' rounded' src={inspiration1} alt="" />
                <div className='flex space-x-5 te mt-4 mb-5'>
                    <p className='text-sky-400 border-s-2 ps-2'>March 18 2024</p>
                    <p className='border-s-2 ps-2'>Pet care</p>
                    <p className='border-s-2 ps-2'>Pet Grooming</p>
                </div>
                <div className='space-y-3'>
                    <h2 className='text-4xl font-serif hover:text-sky-400 duration-500'>Online Pet Everything Your Pet Needs</h2>

                    <p>The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog&apos;s nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old.</p>
                    <p>Within a few hours 3-5 days after vaccion for the dog to begin developing immunity. Until a puppy has received its entire vaccine series, or until an adult dog is up to date on vaccines, their exposure to parvovirus should be minimized as much as possible.</p>
                </div>
            </div>
            {/* 2 */}
            <div className='w-3/4 mx-auto mb-10'>
                <img className=' rounded' src={inspiration2} alt="" />
                <div className='flex space-x-5 te mt-4 mb-5'>
                    <p className='text-sky-400 border-s-2 ps-2'>January 10 2024</p>
                    <p className='border-s-2 ps-2'>Pet care</p>
                    <p className='border-s-2 ps-2'>Pet Grooming</p>
                    <p className='border-s-2 ps-2'>4 comments</p>
                </div>
                <div className='space-y-3'>
                    <h2 className='text-4xl font-serif hover:text-sky-400 duration-500'> Some toughly useful much walking before</h2>

                    <p>By addressing these areas, you can ensure your cat leads a fulfilling and healthy life. Regularly observe your cat for any changes in behavior, appetite, or appearance, and consult your vet with any concerns.</p>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                </div>
                <div className='border my-3 border-sky-200 bg-slate-300 h-[150px] px-5 rounded hover:bg-slate-700 hover:text-white duration-700'>
                    <h4 className='text-xl text-sky-400 px-2'>Cat Safety:</h4>
                    <p className='text-lg font-bold px-2'> indoor vs outdoor</p>
                    <ul className='list-disc px-5'>
                        <li className=''><span className=' font-bold'>Indoor Living:</span>  Generally safer, protecting your cat from traffic, predators, and diseases.</li>
                        <li className=''><span className=' font-bold'>Outdoor Supervision:</span>  if your cat goes outside , ensure they are supervised or kept in a secure area like a catio.</li>
                    </ul>

                </div>
            </div>
            <div className='divider w-9/12 mx-auto'></div>
            {/* 3 */}
            <div className='w-3/4 mx-auto mb-10'>
                <img className=' rounded' src={inspiration3} alt="" />
                <div className='flex space-x-5 te mt-4 mb-5'>
                    <p className='text-sky-400 border-s-2 ps-2'>february 08 2024</p>
                    <p className='border-s-2 ps-2'>Pet care</p>
                    <p className='border-s-2 ps-2'>Pet Grooming</p>
                    <p className='border-s-2 ps-2'>1 comment</p>
                </div>
                <div className='space-y-3'>
                    <h2 className='text-4xl font-serif hover:text-sky-400 duration-500'>We want to ensure the happiness for the pets.</h2>

                    <p>The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog&apos;s nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old.</p>
                    <p>Within a few hours 3-5 days after vaccion for the dog to begin developing immunity. Until a puppy has received its entire vaccine series, or until an adult dog is up to date on vaccines, their exposure to parvovirus should be minimized as much as possible.</p>
                </div>
            </div>
            {/* 4 */}
            <div className='w-3/4 mx-auto mb-10'>
                <img className=' rounded' src={inspiration4} alt="" />
                <div className='flex space-x-5 te mt-4 mb-5'>
                    <p className='text-sky-400 border-s-2 ps-2'>april 05 2024</p>
                    <p className='border-s-2 ps-2'>Pet care</p>
                    <p className='border-s-2 ps-2'>Pet Grooming</p>
                    <p className='border-s-2 ps-2'>4 comment</p>
                </div>
                <div className='space-y-3'>
                    <h2 className='text-4xl font-serif hover:text-sky-400 duration-500'>Acute yellow re-laid less or affirmatively cats</h2>

                    <p>The domestic dog is a doiated dendant of the wolf. The dog derived from an ancient, extinct wolf, and the modern grey wolf is the dog&apos;s nearest living relative. The dog was the first species to be domesticated, by hunter–gatherers. These will include the core vaccines, which are administered in a series of three: at 6-, 12-, and 16 weeks old.</p>
                    <p>Within a few hours 3-5 days after vaccion for the dog to begin developing immunity. Until a puppy has received its entire vaccine series, or until an adult dog is up to date on vaccines, their exposure to parvovirus should be minimized as much as possible.</p>
                </div>
            </div>
        </div>
    );
};

export default Inspiration;