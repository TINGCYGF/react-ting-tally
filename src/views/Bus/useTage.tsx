import {useState} from 'react';
import {createId} from "./lib-create-id";

const list = [
  {id: createId(), name: '房租'},
  {id: createId(), name: '餐饮'}
]

const Tags = () => {
  const [tags, setTage] = useState<{ id: number, name: string }[]>(list);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i
        break
      }
    }
    return result;
  };
  const editLabel = (id: number) => {
    const newLabel = window.prompt('请输入新标签名');
    let result = -1;
    if (newLabel && newLabel !== '') {
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].name === newLabel) {
          result = i
          break
        }
      }
      if (result >= 0) {
        window.alert('标签名不能重复')
      } else {
        const index = findTagIndex(id)
        let tagsClone: { id: number, name: string }[] = JSON.parse(JSON.stringify(tags))
        tagsClone.splice(index, 1, {id: id, name: newLabel})
        window.alert("修改标签成功");
        setTage(tagsClone)
      }
    }
  };
  const deleteLabel = (id: number) => {
    if (tags.length <= 1) {
      window.alert('最后一个标签不可删除');
    } else {
      const index = findTagIndex(id)
      const newLabels = JSON.parse(JSON.stringify(tags));
      newLabels.splice(index, 1);
      window.alert("删除标签成功");
      setTage(newLabels);
    }
  };
  return {tags, setTage, findTag, editLabel, deleteLabel}
}

export default Tags