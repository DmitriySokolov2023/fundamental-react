import {useEffect, useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
import PostService from "./API/PostService";
import MyLoader from "./components/UI/loader/MyLoader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount} from "./utils/pages";
import {usePagination} from "./hooks/usePagination";


function App() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const pagesArray = usePagination(totalPages)

    const [fetchPosts, isPostLoading, postError] = useFetching(async ()=>{
        const response = await  PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))

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

            <div className='page__wrapper'>
                {pagesArray.map(p=>
                    <span
                        className={page === p ? 'page page__current' : 'page'}
                        onClick={()=>setPage(p)}
                    >{p}</span>
                )}
            </div>

        </div>
    );
}

export default App;
