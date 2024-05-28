import { useQuery } from '@tanstack/react-query';
import petListingImg from '../../assets/images/category/cats/details.jpg'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Loading from '../../components/Loader/Loading';
import CampaignCart from './CampaignCart';
import CoverImg from '../../components/common/CoverImg';
import CoverText from '../../components/common/CoverText';
const DonationCampaign = () => {
    const axiosPublic = useAxiosPublic()

    const { data: campaign = [], isLoading } = useQuery({
        queryKey: ['campaigns'],
        queryFn: async () => {
            const res = await axiosPublic('/api/v1/campaigns-read')
            return res.data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className=''>

            <CoverImg image={petListingImg} text={'donation campaigns'}></CoverImg>

            <CoverText heading={'donation campaigns collection'} subHeading={'donate pets'}></CoverText>
            {/* ----------------- */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    campaign.map(item => <CampaignCart
                        key={item._id}
                        item={item}
                    ></CampaignCart>)
                }
            </div>
        </div>
    );
};

export default DonationCampaign;