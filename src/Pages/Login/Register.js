import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import signup from '../../image/registraton.png'
import { useForm } from 'react-hook-form';
import UseToken from '../../Hooks/UseToken';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    let signInError

    if (loading || gLoading || updating) {
        // return <Loading></Loading>
    }

    const [token] = UseToken(user || gUser)
    if (token) {
        navigate('/home')
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        console.log('update done');
        navigate('/home')
    };
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-12 justify-center items-center">
                <div class="text-center lg:text-left  lg:max-w-lg ">
                    <img className='rounded-lg' src={signup} alt="" />
                </div>
                <div className='flex justify-center items-center  '>
                    <div className="card lg:w-3/4 w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold">Please Register</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* //////////////////// name field ///////////////////// */}

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        placeholder="your Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is require'
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                                    </label>
                                </div>

                                {/*///////////////////////// Email part /////////////////////////////// */}

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
                                                value: +6,
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
                                <input className='btn w-full max-w-xs' value='Register' type="submit" />
                            </form>
                            <p><small>Already have an account? <Link to='/login' className='text-blue-700'> Please Login</Link></small></p>

                            <div className="divider">OR</div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className='btn btn-outline'>SIGNIN WITH GOOGLE </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;