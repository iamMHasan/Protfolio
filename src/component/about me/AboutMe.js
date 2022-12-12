import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const AboutMe = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='md:w-[50%] mx-auto p-3'>
            <h1 className="text-2xl text-center font-semibold my-4">About me a little</h1>
            <Tabs className={'text-green-600'} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={'bg-black react-tabs__tab--selected my-4 '}>
                    <Tab >About Me</Tab>
                    <Tab>Education</Tab>
                    <Tab>Skills</Tab>
                </TabList>

                <TabPanel>
                    <h2>Hi! I am Mohammed Hasan, a web developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers. I enjoy creating beautifully designed, intuitive and functional websites.</h2>
                </TabPanel>
                <TabPanel>
                    <h2>BBA from National University</h2>
                </TabPanel>
                <TabPanel>
                    <ul>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Mongodb</li>
                        <li>Express js</li>
                    </ul>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AboutMe;