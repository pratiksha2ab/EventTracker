import { SubmitEvent } from '@/components/organism/submit'
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { AuthContext } from 'utils/authcontext';
import {API} from '../../utils/api';

function SubmitEventForm() {
    const router=useRouter();
    const {user}=useContext(AuthContext);

    useEffect(()=>{
        if(!user){
            router.push("/login")
        }
    },[user])
    return (
        <div>
            <SubmitEvent/>
        </div>
    )
}

export default SubmitEventForm
