import { useState, useEffect } from "react";
import { getComments } from "../services/api";
import { Pagination } from "react-bootstrap";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        getComments(page, 10)
            .then(res => {
                if (res.posts) {
                    setComments(res.comments)
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
            <h1>Comments</h1>
            <div>
                {comments.map(comment => (
                    <div key={comments.id}>
                        <h3>{comment.user}</h3>
                        <p>{comment.body}</p>
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

export default Comments;