import "./DropDownMenuTextFormat.css";

export default function DropDownMenuTextFormat(){
    return  <div className="dropdownmenutextformat-container">
          <button onClick={() => editor.chain().focus().toggleBold().run()}>
            Bold
          </button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()}>
            Italic
          </button>
          <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
            Underline
          </button>
        </div>
}