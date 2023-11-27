import {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
import axios from "axios";


function App() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    async function fetchPosts(){
        const response = await  axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [filter]);

    const createPost = (post) => {
        setPosts([...posts, post])
        setModal(false)
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }





    return (
        <div className="App">
            <button onClick={fetchPosts}>GET LIST POSTS</button>
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
