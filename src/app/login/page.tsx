"use client"

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import axios from "axios";
import { BsArrowRightCircleFill } from 'react-icons/bs';
interface ILoginUserState {
    password: string,
    username: string
}
export default function LoginPage() {
    const useInput = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [user, setUser] = useState<ILoginUserState>({
        password: '',
        username: ''
    });

    const [buttonDisable, setButtonDisable] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (user.username.length > 0 && user.password.length > 0) {
            setButtonDisable(false);
        } else {
            setButtonDisable(true);
        }
    }, [user])

    useEffect(()=>{
        useInput.current?.focus();
    },[])

    async function onLogin() {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/login', user);
            console.log(response.data);
            router.push('/profile')
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="flex justify-center items-center h-screen flex-col bg-slate-800">
            <div className=" text-center w-3/5 h-3/5 bg-green-300 rounded-md">
                <h1 className="font-bold  my-4 text-3xl">Login Page</h1>
                <div className="flex justify-center items-center flex-col">
                    <label className="font-bold  text-center text-2xl mt-10">User Name</label>
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

                <div className="flex justify-center items-center flex-col mb-5">
                    <label className="text-center font-bold  text-2xl mt-4">Password</label>
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
                <div onClick={onLogin} className="flex justify-center items-center flex-col gap-3">
                    <button className="font-bold text-white p-3 rounded-md bg-slate-300 hover:bg-gray-600">{buttonDisable ? "No Login" : "Login here"}</button>
                    <div className="flex justify-center items-center gap-2">
                        <span className="hover:text-2xl"><BsArrowRightCircleFill /></span>
                        <Link className="font-semibold" href='/signup'>Visit to Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}



