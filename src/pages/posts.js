import { useState, useEffect } from "react";
import { getPosts } from "../services/api";
import { Pagination } from "react-bootstrap";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        getPosts(page, 10)
            .then(res => {
                if (res.posts) {
                    setPosts(res.posts)
                }
            })
    }, [page])

    const handlePageDec = () => {
        setPage(state => state - 1);
    }

    const handlePageInc = () => {
        setPage(state => state + 1);
    }

    return (
        <div className="p-3">
            <h1>Posts</h1>
            <div>
                {posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
            <div className="d-flex mb-3">
                <Pagination className="m-auto">
                    <Pagination.Prev onClick={handlePageDec} disabled={page === 0} />
                    <Pagination.Item>{page + 1}</Pagination.Item>
                    <Pagination.Next onClick={handlePageInc} />
                </Pagination>
            </div>
        </div>
    )
}

export default Posts;