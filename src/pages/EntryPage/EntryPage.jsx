import { useStore } from "../../store/modalstore";
import DeleteEntryPopUp from "./components/DeleteEntryPopUp/DeleteEntryPopUp";
import LogOutPopUp from "./components/LogOutPopUp/LogOutPopUp";
import MainEntry from "./components/MainEntry/MainEntry";
import SharePopUp from "./components/SharePopUp/SharePopUp";
import SidebarEntry from "./components/SidebarEntry/SidebarEntry";
import "./EntryPage.css";

export default function EntryPage(){
    // const logoutPopState = useStore((state) => state.logoutpopup);
    // const deleteEntryPopState = useStore((state) => state.deleteentrypopup);
    // const shareEntryPopState = useStore((state) => state.shareentrypopup);
    // const sideBarNavState = useStore((state) => state.sidebarnav);

    return <div className={`entrypage-container`}>
    {/* return <div className={`entrypage-container ${sideBarNavState?'entrypage-container-open':''}`}> */}
        {/* {logoutPopState && (<LogOutPopUp />)} */}
        <LogOutPopUp />
        <DeleteEntryPopUp />
        <SharePopUp />
        <SidebarEntry />
        <MainEntry />
    </div>
}