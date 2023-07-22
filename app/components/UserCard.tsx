import Image from "next/image";
import {BsHeart, BsEnvelope, BsInfoSquare} from "react-icons/bs";

type user = {
    user_id: number,
    email: string,
    first: string,
    last: string,
    avatar: string,
}

const UserCard = ({user_id, email, first, last, avatar}: user) => {
    return (
        <div className="bg-white/10 p-5 rounded-xl
            shadow-xl flex flex-col gap-4 relative overflow-hidden
            max-w-[380px]">
            <div className="absolute w-full h-[40%] top-0 left-0
                bg-gradient-to-br from-dark_blue to-light_blue -z-10">
            </div>
            <div className="flex justify-around gap-2 lg:gap-0 items-center bg-none">
                <div className="flex items-center">
                    <div className="rounded-full container mx-auto
                        h-20 w-20 overflow-hidden">
                        <Image src={avatar} alt="avatar"
                            className="h-auto w-20 mx-auto object-center"
                            width={100} height={100}/>
                    </div>
                </div>
                <div className="flex flex-col pt-2 gap-1">
                    <h1 className="text-[18px] font-[400] text-white">
                        {last}, 
                        <span className="text-black/20 text-[14px] ml-1 font-normal">
                            {first}
                        </span>
                    </h1>
                    <h1 className="text-[12px] text-dark_blue/70">
                        #{user_id}
                    </h1>
                </div>
            </div>
            <hr className="border-dark_blue"/>
            <div className="flex gap-3 items-center px-5">
                <BsEnvelope/>
                <h1 className="cursor-pointer text-[12px]">
                    {email}
                </h1>
            </div>
        </div>
    )
}

export default UserCard;