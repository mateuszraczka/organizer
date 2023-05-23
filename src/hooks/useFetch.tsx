import { useState, useEffect } from "react";
import { firestore } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

interface useFetchProps {
  collection_: "classes" | "exams";
  searchFor?: string;
  condition?: string;
}

const useFetch = ({
  collection_,
  searchFor = "",
  condition,
}: useFetchProps) => {
  const [data, setData] = useState<any>([]);
  const [fetchLoading, setFetchLoading] = useState<boolean>(true);
  const [fetchSuccess, setFetchSuccess] = useState<boolean>(false);

  const fetchDataWithCondition = async () => {
    setFetchLoading(true);
    try {
      const q = query(
        collection(firestore, collection_),
        where(searchFor, "==", condition)
      );
      const querySnapshot = await getDocs(q);
      const fetchedData: any = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push(doc.data());
      });
      setData(()=>fetchedData);
      setFetchSuccess(true);
    } catch (err) {
      console.log(err);
      setFetchSuccess(false);
    } finally {
      setFetchLoading(false);
    }
  };
  
  const fetchData = async () => {
    setFetchLoading(true);
    try {
      const q = query(collection(firestore, collection_));
      const querySnapshot = await getDocs(q);
      const fetchedData: any = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push(doc.data());
      });
      setData(()=>fetchedData);
      setFetchSuccess(true);
    } catch (err) {
      console.log(err);
      setFetchSuccess(false);
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    if (searchFor && condition) {
      fetchDataWithCondition();
    } else {
      fetchData();
    }
  }, []);

  return { data, fetchLoading, fetchSuccess };
};
export default useFetch;