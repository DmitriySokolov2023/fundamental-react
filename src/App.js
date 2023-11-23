import {useMemo, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
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

    const [select, setSelect] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        console.log('отработала')
        if(select){
            return [...posts].sort((a, b) => a[select].localeCompare(b[select]))
        }
        return posts
    }, [select, posts])

    const sortedAndSearchPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.includes(searchQuery))
    }, [searchQuery, sortedPosts])


    const createPost = (post) => {
        setPosts([...posts, post])
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelect(sort)
    }



    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin:'15px 0px'}}/>
            <MyInput
                placeholder={'Поиск'}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <MySelect
                value={select}
                onChange={sortPosts}
                defaultValue={'Сортировка'}
                option={[
                {value:'title', name:'По названию'},
                {value:'body', name:'По описанию'},
            ]}

            />
            {sortedAndSearchPosts.length !== 0
                ?
                <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Список постов'}/>
                :
                <h1 style={{textAlign:"center"}}>Посты не найдены</h1>}

        </div>
    );
}

export default App;
