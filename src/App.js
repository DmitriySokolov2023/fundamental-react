import Posts from "./components/Posts";
import {useRef, useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java Script', body: 'Java Script - язык программирования'},
        {id: 2, title: 'C++', body: 'C++ - язык программирования'},
        {id: 3, title: 'Java', body: 'Java - язык программирования'},
        {id: 4, title: 'C#', body: 'C# - язык программирования'},
        {id: 5, title: 'Python', body: 'Python - язык программирования'},
        {id: 6, title: 'Go', body: 'GO - язык программирования'},
    ])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const addNewPost = (e) =>{
        e.preventDefault()

        const newPost = {
            id: Date.now(),
            title,
            body
        }

        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    type="text"
                    placeholder={'Название поста'}
                    onChange={e => setTitle(e.target.value)}
                />
                <MyInput
                    value={body}
                    type="text"
                    placeholder={'Описание поста'}
                    onChange={e => setBody(e.target.value)}
                />
                <MyButton
                    onClick={addNewPost}
                >
                    Add post
                </MyButton>
            </form>
            <PostList posts={posts} title={'Список постов 1'}/>
        </div>
    );
}

export default App;
