import { useReducer, useState } from "react";
import sample from "../../../../assets/images/sample.png";
import { IPost } from "../../../../interfaces/posts";
import { DropDown } from "../../../Common/DropDown";
import { actionTypes, modalReducer } from "../../../../reducers/modal";
import { Modal } from "../../../Common/Modal";
import { removePostReq, udpatePostReq } from "../../../../services/posts";
import { HttpStatus } from "../../../../constants/HttpStatusCodes";
import { Text } from "../../../Common/Form/Text";
import { TextArea } from "../../../Common/Form/TextArea";
import { ItemBody } from "./body";

export const Item: React.FC<IPost> = ({ id, userId, title, body, updateList }): JSX.Element => {
  const [post, setPost] = useState<IPost>({ id, userId, title, body })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null);
  const [modal, dispatch] = useReducer(modalReducer, {
    details: false,
    update: false,
    remove: false,
  })

  const removePost = async () => {
    setLoading(true)
    try {
      const response = await removePostReq(id!)
      if (response.status === HttpStatus.OK.code) {
        updateList && updateList('remove', id!)
        dispatch({ type: 'remove' })
      }
    } catch (error: any) {
      setError(error.response.data)
    } finally {
      setLoading(false)
    }
  }

  const updatePost = async () => {
    setLoading(true)
    try {
      const response = await udpatePostReq(id!, post)
      if (response.status === HttpStatus.OK.code) {
        updateList && updateList('update', id!, response.data)
        dispatch({ type: 'update' })
      }
    } catch (error: any) {
      setError(error.response.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative mb-3 p-4 shadow-card rounded-lg flex flex-col lg:flex-row items-center lg:items-start gap-4">
      <img src={sample} alt="post-image" className="w-36 h-36" />
      <ItemBody id={id} userId={userId} body={body} title={title} />
      <DropDown onAction={(type) => dispatch({ type })} />

      {modal.details && <Modal type={actionTypes.details} title="جزییات پست" onClose={(type) => dispatch({ type })}>
        <ItemBody id={id} userId={userId} body={body} title={title} />
      </Modal>}

      {modal.update && <Modal type={actionTypes.update} title="ویرایش پست" onClose={(type) => dispatch({ type })} buttonAction={updatePost} buttonText="ویرایش" isLoading={loading}>
        <Text name="title" id="title" hasLabel={true} label="Title" classes="w-full" type="text" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
        <TextArea name="body" id="body" hasLabel={true} label="Description" classes="w-full" value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} />
      </Modal>}

      {modal.remove && <Modal type={actionTypes.remove} title="حذف پست" onClose={(type) => dispatch({ type })} buttonAction={removePost} buttonText="حذف" isLoading={loading}>
        <p className="text-rose-700">
          آیا از حذف این پست مطمئن هستید؟
        </p>
      </Modal>}
    </div >

  );
};
