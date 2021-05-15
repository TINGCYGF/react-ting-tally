import React from "react";
import { useParams } from "react-router-dom";
import {RecordsItem, useRecords} from "../Bus/useRecords";
import Layout from "../../components/Layout";
import {Content} from "./Content";

type Params = {
  id: string
}
const Detail: React.FC = () => {
  const { findRecord } = useRecords()
  let {id: tiString} = useParams<Params>();
  const record: RecordsItem | undefined = findRecord(tiString);


  return (
    <Layout name="Details">
      {
        record ? <Content record={record}> </Content> : '账单不存在'
      }
    </Layout>
  )
}

export { Detail }