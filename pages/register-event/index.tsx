import { RegisterEvent } from '@/components/organism/register';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { AuthContext } from 'utils/authcontext';
import {API} from '../../utils/api';
function SubmitRegisterForm() {
    const router=useRouter();
    const {user}=useContext(AuthContext);

    useEffect(()=>{
        if(!user){
            router.push("/login")
        }
    },[user])
    return (
        <div>
            <RegisterEvent/>
        </div>
    )
}

export default SubmitRegisterForm