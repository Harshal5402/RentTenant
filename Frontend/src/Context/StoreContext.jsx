import { createContext } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const url = "http://localhost:3000"


    const contextValue = {
        url
    }
    return(
        <StoreContextProvider value={contextValue}>
            {props.children}
        </StoreContextProvider>
    )

}

export default StoreContextProvider