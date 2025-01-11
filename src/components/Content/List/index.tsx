import { useEffect, useState } from "react";
import { Item } from "./Item";
import { IPost } from "../../../interfaces/posts";
import { HttpStatus } from "../../../constants/HttpStatusCodes";
import { getPostsReq } from "../../../services/posts";
import { messages } from "../../../constants/messages";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { setPosts, addPost, removePost, updatePost } from "../../../features/postSlics";
import { useLocation, useNavigate } from "react-router-dom";
import { Paginate } from "../../Features/Paginate";

export const List: React.FC = (): JSX.Element => {
  const { posts } = useSelector((state: RootState) => state.posts)
  const dispatch = useDispatch();
  const location = useLocation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null);
  const [listUpdate, setListUpdate] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const newPost = location.state?.post

  const getPosts = async (currentPage: number) => {
    setLoading(true)
    try {
      const response = await getPostsReq(currentPage)
      if (response.status === HttpStatus.OK.code) {
        dispatch(setPosts(response.data));
      }
    } catch (error: any) {
      setError(error.response.data)
    } finally {
      setLoading(false)
    }
  }

  const updateList = (action: string, id: number, post: IPost | undefined) => {
    setListUpdate(!listUpdate)
    switch (action) {
      case 'remove':
        dispatch(removePost(id))
        break;
      case 'update':
        dispatch(updatePost(post!))
        break;
      default:
        return
    }
    setListUpdate(!listUpdate)
  }

  const changPage = (page: number) => {
    setPage(page)
    getPosts(page)
  }

  useEffect(() => {
    if (newPost) {
      dispatch(addPost(newPost))
      navigate("/", { replace: true });
    }
    if (!posts.length) getPosts(page)
  }, [listUpdate])

  return (
    <div className="m-4">
      {loading && <div>{messages.general.loading}</div>}
      {error && <div>{messages.general.error}</div>}
      {!loading && !error && posts.length === 0 && <div>{messages.posts.noContent}</div>}
      {!loading && posts.map((post) => {
        return <Item key={post.id} {...post} updateList={updateList} />
      })}
      {posts.length ? <Paginate page={page} changePage={(page: number) => changPage(page)} /> : null}
    </div>
  );
};
