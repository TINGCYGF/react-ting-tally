import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";


export type RecordsItem = {
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: number;
  createAt: string; //ISO 8601
}
type newRecordsItem = Omit<RecordsItem, 'createAt'>

const useRecords = () => {
  const [records, setRecords] = useState<RecordsItem[]>([])
  useEffect(() => {
    let localRecords = JSON.parse(window.localStorage.getItem("records") || "[]")
    if(localRecords.length === 0 ){
      localRecords = [
      {tagIds: [3], note: "初始化数据", category: "-", amount: 6, createAt: "2021-05-13T06:32:17.999Z"},
      {tagIds: [2], note: "展示数据", category: "-", amount: 6, createAt: "2021-05-01T06:32:17.999Z"},
      {tagIds: [1], note: "可删除", category: "-", amount: 6, createAt: "2021-05-07T06:32:17.999Z"},
      {tagIds: [4], note: "", category: "-", amount: 3, createAt: "2020-09-18T06:32:23.813Z"},
      {tagIds: [8], note: "", category: "-", amount: 6, createAt: "2021-04-15T06:32:26.765Z"},
      {tagIds: [8], note: "", category: "-", amount: 6, createAt: "2020-10-23T06:32:26.765Z"},

      ]
    }
    setRecords(localRecords)
  }, [])

  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records) || '[]')
  }, records)

  const addRecords = (newRecords: newRecordsItem) => {
    const record = {...newRecords, createAt: (new Date()).toISOString()}//ISO 8601
    setRecords([...records, record])
    console.log("提交");
  }
  return { records, addRecords }
}

export { useRecords }