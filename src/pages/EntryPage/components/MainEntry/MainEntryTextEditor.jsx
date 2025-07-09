import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useRef, useState } from 'react';
import "./MainEntryTextEditor.css";
import StarOffSrc from "../../assets/offstar.svg";
import saveSrc from "../../assets/save.svg";
import dateSrc from "../../assets/date.svg";
import uploadSrc from "../../assets/upload.svg";
import textEditorSrc from "../../assets/textformat.svg";
import menuEditorSrc from "../../assets/menueditor.svg";
import DropDownMenuTextEditor from './DropDownMenuTextEditor';
import DropDownMenuTextFormat from './DropDownMenuTextFormat';
import RippleEffectDropDown from '../../../../components/RippleEffectDropDown/RippleEffectDropDown';

export default function MainEntryTextEditor(){
  const [open, setOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);

    //   ref
    const menuDropDownTextEditor = useRef(null);

    // closing the popup when clicked on anywhere in the document
    useEffect(() => {
        document.addEventListener('click', (e) => {        
            if(menuDropDownTextEditor.current && !menuDropDownTextEditor.current.contains(e.target)){
                setOpenDropDown(false);
            }
        });

        return document.removeEventListener('click', (e) => {
            if(menuDropDownTextEditor.current && !menuDropDownTextEditor.current.contains(e.target)){
                setOpenDropDown(false);
            }
        });
    }, [])
  

  const editor = useEditor({
    extensions: [StarterKit],
    content: `<div>Your Entry</div>`,
  })

  return (
    <div className='mainentrytexteditor-container'>
        <div className='mainentrytexteditor-title'>
            <img  src={StarOffSrc} height={30} width={30} alt='star' />
            <input className='mainentrytexteditor-title-0' type='text'name='entrytitle' placeholder='Entry Title' />
            <div className='mainentrytexteditor-title-1'>
                <img src={saveSrc} alt='save it' height={30} width={30} />
                <p>Save now</p>
            </div>
        </div>
        <div className='mainentrytexteditor-date'>
            <div className='mainentrytexteditor-date-0'>
                <img src={dateSrc} alt='date' height={30} width={30} />
                <p>Fri.6/27/2025</p>
            </div>
            <div className='mainentrytexteditor-date-menu'>
                <div>
                    <RippleEffectDropDown>
                        <img src={uploadSrc} alt='upload' 
                        onClick={() => setOpen(!open)} height={30} width={30} />
                    </RippleEffectDropDown>
                </div>
                <div style={{position:'relative', cursor:'pointer'}}>
                    <RippleEffectDropDown>
                            <img src={textEditorSrc} alt='text editor' 
                        onClick={() => setOpen(!open)} height={30} width={30} />
                    </RippleEffectDropDown>
                    {open && (<DropDownMenuTextFormat />)}
                </div>
                <div style={{position:'relative', cursor:'pointer'}}>
                    <RippleEffectDropDown>
                        <img 
                        src={menuEditorSrc} 
                        height={30} width={30}
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropDown(prev => !prev)
                            }}  />
                    </RippleEffectDropDown>
                    {openDropDown && (<DropDownMenuTextEditor ref={menuDropDownTextEditor} />)}
                </div>
            </div>
        </div>
      <EditorContent editor={editor} className="my-editor" />
    </div>
  )
}
