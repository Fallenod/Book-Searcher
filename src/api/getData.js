
export const getData = async (value = "", index = 1, max = 20) => {
        const url =`https://www.googleapis.com/books/v1/volumes?q='${value}'&maxResults=${max}&printType=books&startIndex=${index}`
        console.log(url)
        const res = await fetch(url);
        const result = await res.json()
        if(result.status >= 400) {
            throw Error('Something wrong')  
        }
        return result
}





