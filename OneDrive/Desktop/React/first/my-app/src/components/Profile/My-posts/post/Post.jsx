import s from "./Post.module.css";
const Post = (props) => {
    return (
        <div class={s.item}>
            <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2022/08/06/2-24.jpg" alt="" />
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;