import { createContext, useContext, useState } from "react";

const ToDoContext = createContext({ list: [], modifyList: () => {} });

export function useToDoListContext() {
    return useContext(ToDoContext);
}

export function ToDoProvider({children}) {

    const [list, setList] = useState([]);

    const modifyList = (newList) => {
        setList(newList);
    };

    return (
        <ToDoContext.Provider value={ {list, modifyList }}>
            {children}
        </ToDoContext.Provider>
    );
}
    

export default ToDoContext;
