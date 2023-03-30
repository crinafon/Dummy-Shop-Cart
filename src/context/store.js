import { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({children}) => {
    const [cart, setCart] = useState([]);
    const[ productsPageNo, setProductsPageNo] = useState(0);

    return <Context.Provider value={{cart, setCart, productsPageNo, setProductsPageNo}}>{children}</Context.Provider>
}

export default Provider;