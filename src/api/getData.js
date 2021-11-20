
export const getData = async (value = "", index = 1) => {
        const url =`https://www.googleapis.com/books/v1/volumes?q='${value}'&maxResults=40&startIndex=${index}`
        const res = await fetch(url);
        const result = await res.json()
        if(result.status >= 400) {
            throw Error('Something wrong')
        }
    return result
}