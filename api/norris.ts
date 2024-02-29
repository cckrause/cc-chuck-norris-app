import axios from 'axios'
import { QueryFunction } from '@tanstack/react-query'

const API_BASE_URL = 'https://api.chucknorris.io'

export type NorrisJoke = {
    id: string
    categories: NorrisCategories
    created_at: string
    icon_url: string
    updated_at: string
    url: string
    value: string
}

export type NorrisCategories = string[]

export const getCategories: QueryFunction<NorrisCategories> = async ({
    signal,
}) => {
    const res = await axios.get<NorrisCategories>(
        `${API_BASE_URL}/jokes/categories`,
        { signal } // pass in signal to enable aborting requests on refetch
    )
    return res.data
}

export const getJoke: QueryFunction<NorrisJoke> = async ({
    queryKey,
    signal,
}) => {
    const [category] = queryKey
    const url = new URL(`${API_BASE_URL}/jokes/random`)

    if (typeof category === 'string' && category !== 'all') {
        url.searchParams.append('category', category)
    }

    const response = await axios.get<NorrisJoke>(url.toString(), {
        signal,
    })

    return response.data
}
