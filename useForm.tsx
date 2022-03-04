import { useState } from "react";

export const useForm = <T extends Object>(initialState:T) => {
 
    const [valueInput, setValues] = useState(initialState);
    const onChange=(value:string,field:keyof T)=>{
        setValues({
            ...valueInput,
            [field]:value
        });
    }

    return {
        ...valueInput,
        onChange
    };
}
