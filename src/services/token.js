export const setToken = (token)=>{
    window.localStorage.setItem("Exclusive", token)
}

export const getToken = ()=>{
    return window.localStorage.getItem("Exclusive")
}