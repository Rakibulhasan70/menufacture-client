import React from 'react';
import img from '../../image/query.jpg'

const Query = () => {
    return (
        <div>
            <h2 className='text-3xl text-center font-semibold my-5'>Have Any Question</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-12'>
                <div><img className='w-1/2' src={img} alt="" /></div>
                <div>
                    <form>
                        <input type="text" placeholder="Name" class="input input-bordered input-primary w-full max-w-md" />
                        <br />
                        <textarea type="text" placeholder="Details" class="input input-bordered input-primary w-full max-w-md py-2 mt-3" />
                        <br />
                        <input type="submit" placeholder="Sumbit " class="input input-bordered input-primary w-full max-w-md mt-3 text-blue-600 text-bold text-xl hover:bg-accent" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Query;