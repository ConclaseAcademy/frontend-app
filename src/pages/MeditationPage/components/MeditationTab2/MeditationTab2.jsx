// import "MeditationTab2.css";
import Tab2BedReminder from "../Tab2BedReminder/Tab2BedReminder";
import { categoryData2 } from "../../categoryDataTab2";
import Tab2CategoryCard from "../Tab2CategoryCard/Tab2CategoryCard";
import '../../MeditationPage.css';
import { useStoreMeditationTab2 } from "../../../../store/modalstore";

export default function MeditationTab2(){
    const categoryState = useStoreMeditationTab2((state) => state.activeCategory);
    const setCategoryState = useStoreMeditationTab2((state) => state.setActiveCategory);

    return <div className='meditation-tab-2'>
                <h3>Sleep Stories</h3>
                <p>Gentle narratives to guide you into peaceful sleep</p>
                <Tab2BedReminder />
                <div className="meditation-tab-2-cont">
                    <h3>Categories</h3>
                    <div className='meditation-tab-2-grid'>
                        {categoryData2.map(item => {
                            return <Tab2CategoryCard key={item.name} {...item}
                            active={categoryState}
                            onClick={() => {
                                setCategoryState(item.name)
                            }}/>
                        })}
                    </div>
                </div>
            </div>
}