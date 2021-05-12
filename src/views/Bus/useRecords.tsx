import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";


type RecordsItem = {
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: number;
  createAt: string; //ISO 8601
  // updateAt:string;
}
type newRecordsItem = Omit<RecordsItem, 'createAt'>

const useRecords = () => {
  const [records, setRecords] = useState<RecordsItem[]>([])
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"))
  }, [])
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records) || '[]')
  }, [records])

  const addRecords = (newRecords: newRecordsItem) => {
    const record = {...newRecords, createAt: (new Date()).toISOString()}//ISO 8601
    setRecords([...records, record])
  }
  return { records, addRecords }
}

export { useRecords }