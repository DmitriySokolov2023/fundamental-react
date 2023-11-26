import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java Script', body: 'Java Script - язык программирования'},
        {id: 2, title: 'C++', body: 'C++ - язык программирования'},
        {id: 3, title: 'Java', body: 'Java - язык программирования'},
        {id: 4, title: 'C#', body: 'C# - язык программирования'},
        {id: 5, title: 'Python', body: 'Python - язык программирования'},
        {id: 6, title: 'Go', body: 'GO - язык программирования'},
    ])

    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {

        if(filter.sort){
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchPosts = useMemo(()=>{
        console.log('отработала')
        console.log(filter.query)
        return sortedPosts.filter(post => post.title.includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (post) => {
        setPosts([...posts, post])
        setModal(false)
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }





    return (
        <div className="App">
            <MyButton
                onClick={()=> setModal(true)}
                style={{marginTop:'30px'}}
            >Добавить пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов'}/>
        </div>
    );
}

export default App;
