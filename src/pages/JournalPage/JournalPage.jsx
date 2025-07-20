import { useStore } from "../../store/modalstore";
import DeleteEntryPopUp from "../EntryPage/components/DeleteEntryPopUp/DeleteEntryPopUp";
import LogOutPopUp from "../EntryPage/components/LogOutPopUp/LogOutPopUp";
import SharePopUp from "../EntryPage/components/SharePopUp/SharePopUp";
import SidebarEntry from "../EntryPage/components/SidebarEntry/SidebarEntry";
// import "./components/MainjournalPage.css";
// import "../EntryPage/EntryPage";
import MainjournalPage from "./components/Mainjournalpage";

export default function JournalPage() {
  const logoutPopState = useStore((state) => state.logoutpopup);
  const deleteEntryPopState = useStore((state) => state.deleteentrypopup);
  const shareEntryPopState = useStore((state) => state.shareentrypopup);

  return (
    <>
      <div className={`entrypage-container`}>
        {logoutPopState && <LogOutPopUp />}
        {deleteEntryPopState && <DeleteEntryPopUp />}
        {shareEntryPopState && <SharePopUp />}
        <SidebarEntry />
        <MainjournalPage />
      </div>
    </>
  );
}
