import {useState} from 'react';


const Tags = ()=>{
  const [tags, setTage] = useState<{ id:number, name:string }[]>([
    {id: 1, name: '房租'},
    {id: 2, name: '餐饮'}
  ]);
  return {tags, setTage}
};

export default Tags