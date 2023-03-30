import { useEffect, useState, useContext } from "react";
import { getProducts } from "../services/api";
import CardSimple from "../components/cardSimple/cardSimple"
import { Pagination } from "react-bootstrap";
import { Context } from "../context/store"


const Products = () => {

    const [products, setProducts] = useState([]);

    const { setCart, cart, productsPageNo, setProductsPageNo } = useContext(Context);

    const pageQty = 10;

    useEffect(() => {
        getProducts(productsPageNo, pageQty)
        .then(res => {
            if (res.products) {
                setProducts(res.products);
            }
        })
    }, [productsPageNo])

    const handlePageDec = () => {
        setProductsPageNo(state => state -1);
    }

    const handlePageInc = () => {
        setProductsPageNo(state => state + 1);
    }

    const handleAddToCart = (product) => {
        const arr = [...cart];
        arr.push(product);
        setCart(arr);
    }

    return (
        <>
        <div className="product-page-container">
            {products.map(prod => (
                <CardSimple
                    key={prod.id}
                    imgSrcc={prod.thumbnail}
                    title={prod.title}
                    description={prod.description}
                    buttonLabel="Add to cart"
                    buttonOnClick={() => handleAddToCart(prod)}
                    />
            ))}
        </div>
        <div className="d-flex mb-3">
            <Pagination clasName="m-auto">
                <Pagination.Prev onClick={handlePageDec} disabled={productsPageNo === 0} />
                <Pagination.Item>{productsPageNo + 1}</Pagination.Item>
                <Pagination.Next onClick={handlePageInc}></Pagination.Next>
            </Pagination>
        </div>
        </>
    )
}

export default Products;