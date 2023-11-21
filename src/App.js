import { useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java Script', body: 'Java Script - язык программирования'},
        {id: 2, title: 'C++', body: 'C++ - язык программирования'},
        {id: 3, title: 'Java', body: 'Java - язык программирования'},
        {id: 4, title: 'C#', body: 'C# - язык программирования'},
        {id: 5, title: 'Python', body: 'Python - язык программирования'},
        {id: 6, title: 'Go', body: 'GO - язык программирования'},
    ])

    const [select, setSelect] = useState('')
    const createPost = (post) => {
        setPosts([...posts, post])
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin:'15px 0px'}}/>
            <MySelect
                value={select}
                onChange={sort => setSelect(sort)}
                defaultValue={'Сортировка'}
                option={[
                {value:'title', name:'По названию'},
                {value:'body', name:'По описанию'},
            ]}

            />
            {posts.length !== 0
                ?
                <PostList remove={removePost} posts={posts} title={'Список постов'}/>
                :
                <h1 style={{textAlign:"center"}}>Посты не найдены</h1>}

        </div>
    );
}

export default App;
