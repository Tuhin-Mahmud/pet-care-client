import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import TeamCart from "./TeamCart";
// import Loading from "../../components/Loader/Loading";

const TeamMember = () => {
    const axiosPublic = useAxiosPublic()
    const [team, setTeam] = useState([])
    // const [loading, setLoading] = useState(true)
    useEffect(() => {
        axiosPublic('temMember')
            .then(res => {
                setTeam(res.data)
                // setLoading(true)
            })
    }, [axiosPublic])

    // if (loading) {
    //     return <Loading />
    // }

    return (
        <div className="my-10 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    team.map(member => <TeamCart
                        key={member._id}
                        member={member}
                    ></TeamCart>)
                }
            </div>
        </div>
    );
};

export default TeamMember;