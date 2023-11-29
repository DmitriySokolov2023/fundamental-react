import {useEffect, useState} from "react";
import {usePosts} from "../hooks/usePost";
import PostService from "../API/PostService";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyLoader from "../components/UI/loader/MyLoader";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";
import {getPageCount} from "../utils/pages";
import {useFetching} from "../hooks/useFetching";



function Posts() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)


    const [fetchPosts, isPostLoading, postError] = useFetching(async ()=>{
        const response = await  PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))

    })

    const changePage = (page) => {
        setPage(page)
    }



    useEffect(() => {
        fetchPosts()
    }, [page]);

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
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Posts;
