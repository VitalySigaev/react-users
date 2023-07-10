import React from "react";
import s from './MyPosts.module.css'
import Post from "./post/Post";





const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        text = '';
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement} ></textarea>
                <br />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>

    )
}

export default MyPosts;