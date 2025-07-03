import { useStore } from "../../store/modalstore";
import DeleteEntryPopUp from "./components/DeleteEntryPopUp/DeleteEntryPopUp";
import LogOutPopUp from "./components/LogOutPopUp/LogOutPopUp";
import MainEntry from "./components/MainEntry/MainEntry";
import SidebarEntry from "./components/SidebarEntry/SidebarEntry";
import "./EntryPage.css";

export default function EntryPage(){
    const logoutPopState = useStore((state) => state.logoutpopup);
    const deleteEntryPopState = useStore((state) => state.deleteentrypopup);

    return <div className="entrypage-container">
        {logoutPopState && (<LogOutPopUp />)}
        {deleteEntryPopState && (<DeleteEntryPopUp />)}
        <SidebarEntry />
        <MainEntry />
    </div>
}