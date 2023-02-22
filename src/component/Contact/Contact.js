import React from 'react';
import Textstyle from '../Textstyle';

const Contact = () => {
    return (
        <div id='contact' className='flex justify-center flex-col items-center font-Righteous mt-4 p-8'>
            <Textstyle firstletter={'Reach'} secondletter={'Me'}></Textstyle>
            <form action="https://formsubmit.co/abcimhasanbro@gmail.com" method="POST" className='flex justify-center flex-col items-center '>
                <input required type="email" name='email' placeholder="your mail" className="input input-bordered border-success my-2  w-[90vw] md:w-[40vw] mt-4" />
                <textarea required name='text' className="textarea textarea-success mb-4 w-[90vw] md:w-[40vw]" placeholder="your message"></textarea>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default Contact;