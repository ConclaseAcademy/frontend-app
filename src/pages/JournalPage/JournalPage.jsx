import EntrySection from "./components/Entrysection";
import MiddleSection from "./components/MiddleSection";
import TopBar from "./components/TopBar";
import "./components/TopBar.css"




export default function JournalPage(){
    return (
        <>
        <TopBar/>

<MiddleSection/>
<EntrySection/>
        </>
        
    )
}