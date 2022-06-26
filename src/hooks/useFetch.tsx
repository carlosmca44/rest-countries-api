import { SetStateAction, useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                setData(data)
                setLoading(false)
            } catch (error: SetStateAction<any>) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
    }, [url])

    return { data, loading, error }
}

export default useFetch