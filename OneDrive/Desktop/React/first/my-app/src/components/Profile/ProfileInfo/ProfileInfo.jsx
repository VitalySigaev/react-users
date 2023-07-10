import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src="https://mobimg.b-cdn.net/v3/fetch/b3/b3408c6e6ff5de76d852bc38518bdfc4.jpeg" alt="" />
            </div>
            <div className={s.descr}>
                ava + descr
            </div>
        </div>
    )
}




export default ProfileInfo;