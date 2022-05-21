import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='px-12'>
            <h2 className='text-center text-4xl mt-5'>Rakibul Hasan Sohag</h2>
            <p className='text-center '>Email : rakibulhasansohag5@gmail.com</p>
            <div>
                <p className='text-2xl font-semibold'>Education:</p>
                <p>I am a student of Applied Chemistry in Noakhali College. </p>
            </div>
            <br />
            <p className='text-2xl font-semibold'>Uses of Technology:</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <p>1.HTML5</p>
                    <p>2.CSS3</p>
                    <p>3.Bootstrap</p>
                    <p>4.Tailwind</p>
                    <p>5.Javascript</p>
                    <p>6.Daisui</p>
                    <p>7.React</p>
                    <p>8.React-Hook-form</p>
                </div>
                <div>
                    <p>9.React-Hooks</p>
                    <p>10.Rest Api</p>
                    <p>11.NodeJS</p>
                    <p>12.MongoDB</p>
                    <p>13.ExpressJs</p>
                    <p>14.Github</p>
                    <p>15.FIrebase</p>
                    <p>16.Heroku</p>
                </div>
            </div>
            <div>
                <h1 className='text-center text-2xl font-semibold mt-5'>My Website Link</h1>
                <p>1.My Gym Center <a className='text-blue-500' href="https://assignment-10-eecce.web.app/">LiveSite Link</a></p>
                <p>2.My Electronc Shop <a className='text-blue-500' href="https://assignment-11-client-a557f.web.app/">LiveSite Link</a></p>
                <p>3.BMW Top Speed</p>
            </div>
        </div>
    );
};

export default Portfolio;