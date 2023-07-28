import { createContext } from "react";

const userContext=createContext({
    user:"DEMO USER",
    email:"dummy@dummy.com"
})

export default userContext;