'use client'

import Image from "next/image";
import { BsEnvelope } from "react-icons/bs";
import { useState, useEffect } from 'react'

type user = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}

const UserCard = ({id, email, first_name, last_name, avatar}: user) => { 
    const [randomText, setRandomText] = useState('')

    useEffect(() => {
        setRandomText(makeid((Math.random() * 20) + 100))
    }, [])

    function makeid(length: number) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    return (
        <div className="bg-white/10 rounded-xl
            shadow-xl flex flex-col gap-4 relative overflow-hidden
            max-w-[380px]">
            <div className="flex gap-5 items-center 
                bg-gradient-to-br from-dark_blue to-light_blue p-3">
                <div className="flex items-center">
                    <div className="rounded-full container m-auto
                        h-20 w-20 overflow-hidden">
                        <Image src={avatar} alt="avatar"
                            className="h-full w-full object-center object-cover"
                            quality={100} width={100} height={100}
                            loading="eager" priority={true}/>
                    </div>
                </div>
                <div className="flex flex-col pt-2 gap-1">
                    <h1 className="text-[18px] font-[400] text-white">
                        {last_name}, 
                        <span className="text-black/20 text-[14px] ml-1 font-normal">
                            {first_name}
                        </span>
                    </h1>
                    <h1 className="text-[12px] text-dark_blue/70">
                        #{id}
                    </h1>
                </div>
            </div>
            <hr className="border-dark_blue"/>
            <div className="px-5 pb-5">
                <div className="flex gap-3 items-center px-5">
                    <BsEnvelope/>
                    <h1 className="cursor-pointer text-[12px]">
                        {email}
                    </h1>
                </div>
                <p className="text-sm break-all mt-5">
                    {randomText}
                </p>
            </div>
        </div>
    )
}

export default UserCard;