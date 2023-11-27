import {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
import PostService from "./API/PostService";
import MyLoader from "./components/UI/loader/MyLoader";
import {useFetching} from "./hooks/useFetching";


function App() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)
    const [countPosts, setCountPosts] = useState(0)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostLoading, postError] = useFetching(async ()=>{
        const response = await  PostService.getAll()
        setPosts(response.data)
        setCountPosts(response.headers['x-total-count'])


        console.log(response.headers['x-total-count'])
    })

    useEffect(() => {
        fetchPosts()
    }, []);

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
            {postError &&
                <h1>Произошла ошибка</h1>
            }
            {isPostLoading
                ? <MyLoader/>
                : <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов'}/>
            }

        </div>
    );
}

export default App;
