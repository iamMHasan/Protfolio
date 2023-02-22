import React from 'react';
import ImgaeCom from '../Hero/ImgaeCom';
import Textstyle from '../Textstyle';
import whatsapp from '../../assets2/whatsapp.png'
import email from '../../assets2/gmail.png'

const Contact = () => {
    return (
        <div id='contact' className='flex justify-center flex-col items-center font-Righteous mt-4 p-8'>
            <Textstyle firstletter={'Reach'} secondletter={'Me'}></Textstyle>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                <form action="https://formsubmit.co/abcimhasanbro@gmail.com" method="POST" className='flex justify-center flex-col items-center '>
                    <input required type="email" name='email' placeholder="your mail" className="input input-bordered border-success my-2  w-[90vw] md:w-[40vw] mt-4" />
                    <textarea required name='text' className="textarea textarea-success mb-4 w-[90vw] md:w-[40vw]" placeholder="your message"></textarea>
                    <button className="btn btn-success">Submit</button>
                </form>
                <div className='border border-r-2 border-dotted h-48'></div>
                <div className='text-white flex flex-col justify-start items-start space-y-2'>
                    <ImgaeCom src={whatsapp} skill={'880 1647572449'} />
                    <ImgaeCom src={email} skill={'hasan.mohammed4040@gmail.com'} />
                </div>
            </div>
        </div>
    );
};

export default Contact;