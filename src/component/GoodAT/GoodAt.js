import React from 'react';
import js from '../../assets2/js.png'
import mongodb from '../../assets2/mongodb.svg'
import express from '../../assets2/express.png'
import react from '../../assets2/react.png'
import node from '../../assets2/node-js.png'
import html5 from '../../assets2/html5.png'
import css3 from '../../assets2/css3.png'
import firebase from '../../assets2/firebase.png'
import github from '../../assets2/github.png'
import vscode from '../../assets2/vscode.png'
import netlify from '../../assets2/netlify.png'
import vercel from '../../assets2/vercel.svg'
import ps from '../../assets2/ps.png'
import figma from '../../assets2/figma.svg'
import tailwind from '../../assets2/tailwind.png'
import bootstrap from '../../assets2/bootstrap.png'

import ImgaeCom from '../Hero/ImgaeCom';
import Textstyle from '../Textstyle';

const GoodAt = () => {
    return (
        <div className=' text-white flex justify-center flex-col items-center font-Righteous my-10 '>
            <Textstyle firstletter={'Core'} secondletter={'Skills'}/>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4 p-4 md:p-0">
                <ImgaeCom src={js} skill={"Javascript"}></ImgaeCom>
                <ImgaeCom src={react} skill={"React"}></ImgaeCom>
                <ImgaeCom src={node} skill={"Node js"}></ImgaeCom>
                <ImgaeCom src={express} skill={"Express js"}></ImgaeCom>
                <ImgaeCom src={mongodb} skill={"Mogodb"}></ImgaeCom>
                <ImgaeCom src={firebase} skill={"Firebase"}></ImgaeCom>
                <ImgaeCom src={html5} skill={"Html5"}></ImgaeCom>
                <ImgaeCom src={css3} skill={"Css3"}></ImgaeCom>
                <ImgaeCom src={tailwind} skill={"Tailwind"}></ImgaeCom>
                <ImgaeCom src={bootstrap} skill={"Bootstrap"}></ImgaeCom>
               
            </div>
            <Textstyle firstletter={'Tools'}/>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4 p-4 md:p-0">
            <ImgaeCom src={github} skill={"Github"}></ImgaeCom>
            <ImgaeCom src={vscode} skill={"Vs Code"}></ImgaeCom>
            <ImgaeCom src={figma} skill={"Figma"}></ImgaeCom>
            <ImgaeCom src={firebase} skill={"Firebase"}></ImgaeCom>
            <ImgaeCom src={netlify} skill={"Netlify"}></ImgaeCom>
                <ImgaeCom src={vercel} skill={"Vercel"}></ImgaeCom>
                <ImgaeCom src={ps} skill={"Photoshop"}></ImgaeCom>
            </div>
        </div>
    );
};

export default GoodAt;