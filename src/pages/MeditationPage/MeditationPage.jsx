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
import MeditationDisplay from './components/MeditationDisplay/MeditationDisplay';
import MeditationTab1 from './components/MeditationTab1/MeditationTab1';
import { useStoreMeditation, useStoreMeditationTab2 } from '../../store/modalstore';
import Tab2BedReminder from './components/Tab2BedReminder/Tab2BedReminder';
import { categoryData2 } from './categoryDataTab2';
import Tab2CategoryCard from './components/Tab2CategoryCard/Tab2CategoryCard';
import MeditationTab2 from './components/MeditationTab2/MeditationTab2';
import { fetchDataTab2 } from './fetchDataTab2';
import MeditationCardTab2Item from './components/MeditationCardTab2Item/MeditationCardTab2Item';
import Tab2MedicalTips from './components/Tab2MedicalTips/Tab2MedicalTips';
import MeditationTab3 from './components/MeditationTab3/MeditationTab3';




export default function MeditationPage(){
    let UI;

    // tab 1 state
    const categoryState = useStoreMeditation((state) => state.activeCategory);
    const setCategory = useStoreMeditation((state) => state.setActiveCategory);
    const timeState = useStoreMeditation((state) => state.activeTime);
    const setTime = useStoreMeditation((state) => state.setActiveTime);
    const timeRangeState = useStoreMeditation((state) => state.activeTimeRange);
    const setTimeRange = useStoreMeditation((state) => state.setActiveTimeRange);

    // Display Tab 1
    UI = <MeditationDisplay onClick={() => {
                setCategory("All Categories");
                setTime("Any time")
                setTimeRange({lower:0, upper:0})
            }}
            />

    // simulatin fetching data based on filtering Tab 1
    const filteredData1 = fetchData.filter(item => {
        if(item.category == categoryState
            || categoryState == "All Categories"){
            return item
        }else{

        }
    });

    const filteredData2 = filteredData1.filter(item => {
        if(item.time >= timeRangeState.lower && item.time <= timeRangeState.upper
            || timeState == "Any time"
        ){
            return item
        }else{
            
        }
    });

    if(filteredData2.length > 0){
        UI = <div className='meditation-cards'>
         {filteredData2.map(item => {
                return <MeditationCardItem key={item.id} {...item} />
            })}
        </div>
    }

    // tab 2 state
    const categoryTab2State = useStoreMeditationTab2((state) => state.activeCategory);
    const setCategoryTab2State = useStoreMeditationTab2((state) => state.setActiveCategory);

    // tab 2 filter
    const filteredDataTab2 = fetchDataTab2.filter(item => {
        if(item.category == categoryTab2State
            || categoryTab2State == "All Stories"){
            return item
        }else{

        }
    })


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
                        <MeditationTab1 />
                        {UI}
                    </TabPanel>

                    <TabPanel>
                        <MeditationTab2 />
                        <div className='meditation-tab-2-cardlist'>
                            {filteredDataTab2.map(item => {
                                return <MeditationCardTab2Item key={item.id} {...item} />
                            })}
                        </div>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <Tab2MedicalTips />
                        </div>
                    </TabPanel>

                    <TabPanel> 
                        <MeditationTab3 />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
}