import React, { useState } from "react"
import { Text } from "../Form/Text"
import { useSelector } from "react-redux"
import { RootState } from "../../../app/store"

export const Search = () => {
    const [query, setQuery] = useState<string>('')
    const { posts } = useSelector((state: RootState) => state.posts)
    let timer: NodeJS.Timeout

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <div className="relative">
            <Text classes="w-full" type="text" placeholder="جستجو کنید ..." onChange={search} value={query} name="serach" />
            <div className="absolute text-black bg-slate-200 z-10 mt-1 rounded-md w-full p-2">
                test
            </div>
        </div>
    )
}