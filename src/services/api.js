export const getProducts = async (pageNo, pageQty) => {
    const skip = pageNo * pageQty
    try {
        const res = await fetch (`https://dummyjson.com/products?skip=${skip}&limit=${pageQty}`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        return error 
    }
}

export const getPosts = async (pageNo, pageQty) => {
    const skip = pageNo * pageQty
    try {
        const res = await fetch(`https://dummyjson.com/posts?skip=${skip}&limit=${pageQty}`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        return error
    }
}

export const getComments = async (pageNo, pageQty) => {
    const skip = pageNo * pageQty
    try {
        const res = await fetch(`https://dummyjson.com/comments?skip=${skip}&limit=${pageQty}`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        return error
    }
}