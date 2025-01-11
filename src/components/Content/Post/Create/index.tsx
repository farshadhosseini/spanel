import { useState } from "react"
import { Text } from "../../../Common/Form/Text"
import { TextArea } from "../../../Common/Form/TextArea"
import { IPost } from "../../../../interfaces/posts"
import { Button } from "../../../Common/Form/Button/Action"
import { createPostReq } from "../../../../services/posts"
import { HttpStatus } from "../../../../constants/HttpStatusCodes"
import { useNavigate } from "react-router-dom"

export const NewPost = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null);
    const [post, setPost] = useState<IPost>({
        title: '',
        body: '',
        userId: 100
    })

    const handleForm = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setPost({ ...post, [name]: value })
    }

    const handleCreate = async () => {
        setLoading(true)
        try {
            const response = await createPostReq(post)
            if (response.status === HttpStatus.CREATED.code) {
                navigate('/', { state: { post: response.data } });
            }
        } catch (error: any) {
            setError(error.response.data)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="wrap-container shadow-container flex flex-col gap-2">
            <Text name="title" type="text" onChange={handleForm} value={post.title} hasLabel={true} label="Title" />
            <TextArea name="body" value={post.body} onChange={handleForm} hasLabel={true} label="Description" />
            <div className="flex self-end text-white">
                <Button text="تایید و ثبت سرویس" handleClock={handleCreate} isLoading={loading} />
            </div>
        </div>
    )
}