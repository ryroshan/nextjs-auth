"use client"

import { useEffect, useRef, useState } from "react"
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Dropdown from "../components/Dropdown";

interface ISignUpUserState {
    email: string,
    username: string,
    password: string
}
export default function SignUpPage() {
    const useInput = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [user, setUser] = useState<ISignUpUserState>({
        email: '',
        password: '',
        username: ''
    });

    const [loading, setLoading] = useState(false);
    const [buttonDisable, setButtonDisable] = useState(false);

    useEffect(() => {
        if (user.email.length > 0 && user.username.length > 0 && user.password.length > 0) {
            setButtonDisable(false);
        } else {
            setButtonDisable(true)
        }
    }, [user])

    useEffect(()=>{
        useInput.current?.focus();
    },[])


    async function onSignUp() {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/signup', user);
            toast.success("Done!");
            console.log(response.data);
            router.push('/login')
        } catch (error) {
            console.log(error)
            toast.error("Failed!")
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex justify-center items-center h-screen flex-col  bg-slate-800">
            <div className="text-center w-3/5 h-4/6 bg-green-300 rounded-md">
                <div className="flex justify-end gap-x-48">
                 <Dropdown />
                </div>
                <h1 className="font-bold my-4 text-3xl">SignUp Page</h1>
                <div className="flex justify-center items-center flex-col">
                    <label className="font-bold text-center text-2xl mt-10">User Name</label>
                    <br />
                    <input
                        className="p-2 rounded-md border-white"
                        id="username"
                        ref={useInput}
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="type User Name here..."
                    />
                </div>

                <div className="flex justify-center items-center flex-col">
                    <label className=" font-bold text-center text-2xl mt-4">Email</label>
                    <br />
                    <input
                        className="p-2 rounded-md border-white"
                        id="email"
                        type="text"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="type Email here..."
                    />
                </div>

                <div className="flex justify-center items-center flex-col mb-5">
                    <label className="font-bold text-center text-2xl mt-4">Password</label>
                    <br />
                    <input
                        className="p-2 rounded-md border-white"
                        id="passsword"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="type Password here..."
                    />
                </div>
                <div className="flex justify-center items-center flex-col gap-3">
                    <button onClick={onSignUp} className="font-bold text-white p-3 rounded-md bg-slate-300 hover:bg-gray-600">{buttonDisable ? "No Signup " : "SignUp here"}</button>
                    <div className="flex justify-center items-center gap-3">
                       <span className="hover:text-2xl"> <BsArrowRightCircleFill /></span>
                        <Link className="font-semibold" href='/login'>Visit to login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

