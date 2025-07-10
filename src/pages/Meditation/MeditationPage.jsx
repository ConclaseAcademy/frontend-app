import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import './MeditationPage.css';
import SearchMeditationSrc from "./assets/meditationsearch.svg";
import {Fragment, useState} from 'react';
import { categoryData } from './categoryData';
import MeditationCategoryCard from './components/MeditationCategoryCard/MeditationCategoryCard';
import { navTabItemCategory } from './navTabItemCategory';
import { timeData } from './timeData';
import {fetchData} from './fetchData';
import MeditationCardItem from './components/MeditationCardItem/MeditationCardItem';



export default function MeditationPage(){
    const [activeCategory, setActiveCategory] = useState("All Categories");
    const [activeTime, setActiveTime] = useState("Any time");

    return <div className='meditation-container'>
            <div className='meditation-header'>
                <h3>Wellness Hub</h3>
                <img src={SearchMeditationSrc} />
            </div>

            <TabGroup className="meditation-tab" defaultIndex={0}>
                <TabList className="meditation-tablist">
                    {navTabItemCategory.map(item => {
                        return <Tab as={Fragment} key={item.id} >
                            {({hover, selected}) => (
                                <span className={`meditation-tabitem ${selected?"meditation-tabitem-active":""}`}>
                                    {item.navitem}
                                </span>
                            )}
                        </Tab>
                    })}
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div className='meditation-content-header'>
                            <h3>Meditation Library</h3>
                            <p>Find the perfect meditation for your needs</p>
                        </div>
                        <div className='meditation-main'>
                            <div className='meditation-content-body'>
                                <h2>Categories</h2>
                                <div className='meditation-content-body-main'>
                                    {categoryData.map(item => {
                                        return <MeditationCategoryCard key={item.name} 
                                        active={activeCategory}
                                        {...item}
                                        onClick={() => {
                                            setActiveCategory(item.name)
                                        }} />
                                    })}
                                </div>
                            </div>
                            <div className='meditation-content-body'>
                                <h2>Duration</h2>
                                <div className='meditation-content-body-main'>
                                    {timeData.map(item => {
                                        return <MeditationCategoryCard key={item.name} 
                                        active={activeTime}
                                        {...item}
                                        onClick={() => {
                                            setActiveTime(item.name)
                                        }} />
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className='meditation-cards'>
                            {fetchData.map(item => {
                                return <MeditationCardItem key={item.id} {...item} />
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel> cont 2</TabPanel>
                    <TabPanel> cont 3</TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
}