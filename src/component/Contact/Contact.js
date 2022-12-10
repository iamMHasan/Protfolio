import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center flex-col items-center font-Righteous mt-4 p-8'>
            <h1 className="text-3xl md:text-4xl text-black">Right now i am looking for <span className='text-black/60'>oppurtunity</span></h1>
            <h1 className="text-xl md:text-2xl text-black">Reach me <span className='text-black/60'>at</span></h1>
            <form action="https://formsubmit.co/abcimhasanbro@gmail.com" method="POST" className='flex justify-center flex-col items-center '>
                <input required type="email" name='email' placeholder="your mail" className="input input-bordered border-success my-2 w-[40vw] mt-4" />
                <textarea required name='text' className="textarea textarea-success mb-4 w-[40vw]" placeholder="your message"></textarea>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default Contact;