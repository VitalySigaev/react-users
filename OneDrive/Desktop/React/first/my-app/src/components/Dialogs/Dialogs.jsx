import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";




const Dialogs = (props) => {
    
let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
let messagesElement = props.state.messages.map(m => <Message message={m.message} />);

    return (

        <div className={s.dialogs}>
            <div class={s.dialogsitem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs;
