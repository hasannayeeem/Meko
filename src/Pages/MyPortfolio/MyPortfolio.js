import React from 'react';
import { Link } from 'react-router-dom';
import me from '../../assets/images/me.jpg'
const MyPortfolio = () => {
    return (
        <div className='px-20 py-12'>
            <div className="text-5xl py-12 text-center">About Me</div>
            <div className="text-3xl font-semibold py-3">Personal Info</div>
            <div class="card rounded-none lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-72 h-96' src={me} alt="Nayeem Hasan"/></figure>
                <div class="card-body h-96">
                    <div className="text-xl  text-neutral">Name: <span className='font-semibold'>Nayeem Hasan</span></div>
                    <div className="text-xl  text-neutral">Date of birth: <span className='font-semibold'>16 Sep 2001</span></div>
                    <div className="text-xl  text-neutral">Nationality: <span className='font-semibold'>Bangladeshsi</span></div>
                    <div className="text-xl  text-neutral block">Location: <span className='font-semibold'>Osmaninagar, Sylhet, BD</span></div>
                    <div className="text-xl  text-neutral block"><small>Email: <span className='font-semibold'>hasannayeeem@gmail.com</span></small></div>
                    <div className="text-xl  text-neutral"><small>Phone: <span className='font-semibold'>+8801764546296</span></small></div>
                    <div className="text-xl  text-neutral"><small>Linkedin: <span className='font-semibold'>/hasannayeeem</span></small></div>
                    <div className="text-xl  text-neutral"><small>Github: <span className='font-semibold'>/hasannayeeem</span></small></div>
                </div>
                <div class="card-body">
                    <div className="text-2xl font-bold">SKILL</div>
                    <div className="text-xl  text-neutral"><i><span className='font-semibold'>ReactJS, Nodejs(express), Mongodb, Firebase(authentication), Bootstrap, <br/> tailwind,
                    DaisyUI, CSS, Html </span></i></div>
                    <div className="text-2xl font-bold">PROJECTS</div>
                    <div className="text-xl  text-neutral">Autostars: <a className='text-primary' target="_blank" href='https://autostars.netlify.app'>https://autostars.netlify.app</a></div>
                    <div className="text-xl  text-neutral">Travelu: <a className='text-primary' target="_blank" href='https://traveluu.netlify.app'>https://traveluu.netlify.app</a></div>
                    <div className="text-xl  text-neutral">GamesReview: <a className='text-primary' target="_blank" href='https://gamesreview.netlify.app'>https://gamesreview.netlify.app/</a></div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;