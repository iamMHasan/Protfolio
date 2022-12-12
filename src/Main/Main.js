import React from 'react';
import Navabar from '../component/navbar/Navabar';
import {Outlet} from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Navabar/>
            <Outlet/>
        </div>
    );
};

export default Main;