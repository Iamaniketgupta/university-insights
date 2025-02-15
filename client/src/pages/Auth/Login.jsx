import { Building2, GraduationCap, Loader } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axiosInstance from '../../config/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../../utils/cookiesApis';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/authSlice';

export default function Login({ loginType }) {
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!loginType) {
            toast.error("Kindly Select Login as type");
            return;
        }
        data.role = loginType;
        try {
            setLoading(true);
            // console.log(data);
            const res = await axiosInstance.post(`/user/login`, data);
            // console.log(res)
             dispatch(setUser(res?.data?.user));
            const token = res?.data?.token;
            setCookie('authToken', token);
            toast.success(res?.data?.message || 'Login Success');
            navigate('/dashboard');
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong');
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex max-w-xl flex-1 items-center justify-center'>
            <div className='p-10 border flex-1 max-w-xl border-slate-600 bg-slate-800 rounded-xl flex flex-col items-center justify-center'>

                <h3 className="text-2xl font-bold text-center text-white mb-8">
                    {loginType === 'admin' ? 'Admin Login' :
                        loginType === 'student' ? 'Student Login' :
                            'Agent Login'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 w-full">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            onChange={onChangeHandler}
                            className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg shadow-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={onChangeHandler}
                            name='password'
                            className="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg shadow-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-end">

                        <div className="text-sm">
                            {/* Not working right now Temporary */}
                            <p className="font-medium text-indigo-400 hover:text-indigo-300">
                                Forgot password?
                            </p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-2 px-4 rounded-lg shadow-sm text-sm font-medium text-white
                         gradient-bg hover:opacity-90 transition-opacity focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed
                          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {loading ? <Loader /> :
                            " Log in"}
                    </button>
                </form>

            </div>
        </div>
    )
}
