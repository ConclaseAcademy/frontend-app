import { categoryData } from '../../categoryData';
import { timeData } from '../../timeData';
import MeditationCategoryCard from '../MeditationCategoryCard/MeditationCategoryCard';
import '../../MeditationPage.css';
import { useStoreMeditation } from '../../../../store/modalstore';



export default function MeditationTab1(){
    const categoryState = useStoreMeditation((state) => state.activeCategory);
    const setCategory = useStoreMeditation((state) => state.setActiveCategory);

    
    const timeState = useStoreMeditation((state) => state.activeTime);
    const setTime = useStoreMeditation((state) => state.setActiveTime);

    
    const timeRangeState = useStoreMeditation((state) => state.activeTimeRange);
    const setTimeRange = useStoreMeditation((state) => state.setActiveTimeRange);


    return <>
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
                                        active={categoryState}
                                        {...item}
                                        onClick={() => {
                                            setCategory(item.name)
                                        }} />
                                    })}
                                </div>
                            </div>
                            <div className='meditation-content-body'>
                                <h2>Duration</h2>
                                <div className='meditation-content-body-main'>
                                    {timeData.map(item => {
                                        return <MeditationCategoryCard key={item.name} 
                                        active={timeState}
                                        {...item}
                                        onClick={() => {
                                            setTime(item.name)
                                            setTimeRange(item.range)
                                        }} />
                                    })}
                                </div>
                            </div>
                        </div>

    </>

}