import { useState } from "react";
import { firestore } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

interface usePostProps {
  doc_: string;
}

const usePost = ({ doc_ }: usePostProps) => {
  const [postLoading, setPostLoading] = useState<boolean>(false);
  const [postSuccess, setPostSuccess] = useState<boolean>(false);

  const post = async (data: any) => {
    setPostLoading(() => true);
    try {
      await setDoc(doc(firestore, doc_), data);
      setPostSuccess(() => true);
    } catch (e) {
      setPostSuccess(() => false);
    } finally {
      setPostLoading(() => false);
    }
  };

  return { post, postLoading, postSuccess };
};
export default usePost;
