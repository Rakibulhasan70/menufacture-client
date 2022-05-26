import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseToken from '../../Hooks/UseToken';
import login from '../../image/login.png'
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // const [token] = useToken(user || gUser)


    let signInError

    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/"

    if (user || gUser) {
        navigate(from, { replace: true });
    }

    if (user || gUser) {
        navigate('/home')
    }
    const [token] = UseToken(user || gUser)
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])




    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-12 justify-center items-center'>
                <div className="text-center lg:text-left  lg:max-w-sm ">
                    <img className='rounded-lg' src={login} alt="" />
                </div>
                <div className='flex justify-center items-center h-screen'>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">

                            <h2 className="text-center text-2xl font-bold">Please Login</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        placeholder="your email"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is require'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'provide a valid message'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                    </label>
                                </div>

                                {/* //////////////////////////////  PASSWORD FIELD  //////////////////////////////////////// */}

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">password</span>
                                    </label>
                                    <input type="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is require'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be six character or longer'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                    </label>
                                </div>

                                {signInError}
                                <input className='btn w-full max-w-xs' value='Login' type="submit" />
                            </form>
                            <p><small>New to Doctors portal ?? <Link to='/register' className='text-blue-700'>Create New Account</Link></small></p>

                            <div className="divider">OR</div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className='btn btn-outline'>SIGNIN WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;