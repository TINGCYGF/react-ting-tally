import {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';

export type RecordsItem = {
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: number;
  createAt: string; //ISO 8601
}
type newRecordsItem = Omit<RecordsItem, 'createAt'>
const  useRecords = () => {
  const [records, setRecords] = useState<RecordsItem[]>([])
  const history = useHistory()
  //初始化數據
  useEffect(() => {
    let localRecords = JSON.parse(window.localStorage.getItem("records") || "[]")
    if(localRecords.length === 0 ){
      localRecords = [
      {tagIds: [2], note: "初始化数据", category: "-", amount: 6, createAt: "2021-05-01T06:32:17.999Z"},
      {tagIds: [1], note: "可删除", category: "-", amount: 6, createAt: "2021-05-07T06:32:17.999Z"},
      {tagIds: [4], note: "", category: "-", amount: 3, createAt: "2020-09-18T06:32:23.813Z"},
      {tagIds: [8], note: "", category: "-", amount: 6, createAt: "2021-04-15T06:32:26.765Z"},
      {tagIds: [8], note: "", category: "-", amount: 6, createAt: "2020-10-23T06:32:26.765Z"},
      ]
      window.localStorage.setItem("records", JSON.stringify(localRecords))
    }
    setRecords(localRecords)
  }, [])
  const addRecords = (newRecords: newRecordsItem) => {
    const record = {...newRecords, createAt: (new Date()).toISOString()}//ISO 8601
    setRecords([...records, record])
    window.localStorage.setItem("records", JSON.stringify([...records, record]))
  }
  const findRecord = (createAt: string) => {
    return records.filter((record) => record.createAt === createAt)[0]
  }
  const findRecordIndex = (createAt: string) => {
    let result = -1;
    for (let i = 0; i < records.length; i++) {
      if (records[i].createAt === createAt) {
        result = i;
        break;
      }
    }
    return result;
  };
  const deleteRecord = (createAt: string) => {
    // 获取你要删的 Record 的下标
    const index = findRecordIndex(createAt);
    if(index >= 0){
      const recordsClone = JSON.parse(JSON.stringify(records))
      recordsClone.splice(index, 1)
      setRecords(recordsClone)
      window.localStorage.setItem("records", JSON.stringify(recordsClone))
      alert("删除成功")
    }else {
      alert("账单不存在")
    }
    history.push('/details')
  }
  const updateRecord = (createAt: string, obj:RecordsItem) =>{
    // 获取你要删的 Record 的下标
    const index = findRecordIndex(createAt);
    if(index >= 0){
      const recordsClone = JSON.parse(JSON.stringify(records));
      recordsClone.splice(index, 1, obj);
      setRecords(recordsClone)
      window.localStorage.setItem("records", JSON.stringify(recordsClone))
      alert("修改成功")
    }else {
      alert("账单不存在")
    }
    //路由跳转
    history.push('/details')
  }
  return { records, addRecords, findRecord, deleteRecord, updateRecord}
}
export { useRecords }