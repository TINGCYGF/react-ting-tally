import styled from "styled-components";
import React from "react";
import useTage from "../Bus/useTage";
import {createId} from "../Bus/lib-create-id";

const TagsSectionStyle = styled.div`
  border: 1px red;
  flex-grow: 1;
  background: #ffffff;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ul {
    display: flex;
    margin: 0 -12px;
    flex-wrap: wrap-reverse;
    justify-content: center;

    > li {
      background: #dfe4ea;
      border-radius: 18px;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;
      white-space: nowrap;

      &.selected {
        background: #2f3542;
        color: #e5e4e4;
      }
    }
  }

  > button {
    margin: 6px auto;
    background: none;
    padding: 0 4px;
    border-bottom: 1px solid #333;
    color: #666
  }
`
type Props = {
  value: number[];
  onChange: (selected:number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTage} = useTage()
  const selectedTagIDs = props.value
  const onAddTag = () => {
    const tagName = window.prompt("新标签名为")
    if (tagName !== null){
      setTage([...tags, {id: createId(), name: tagName}])
    }
  };

  const onToggleTag = (tagID: number) => {
    const index = selectedTagIDs.indexOf(tagID);
    if(index >= 0){
      props.onChange(selectedTagIDs.filter(t => t !== tagID));
    }else {
      props.onChange([...selectedTagIDs, tagID])
    }
  }

  return (
    <TagsSectionStyle>
      <ul>
        {
          tags.map(tag => {
            return (
              <li key={tag.id}
                  onClick={() => {onToggleTag(tag.id)}}
                  className={selectedTagIDs.indexOf(tag.id)>=0 ? "selected" : ''}
              >{tag.name}</li>
            )
          })
        }
      </ul>
      <button onClick={onAddTag}>新增标签</button>
    </TagsSectionStyle>
  )
}

export { TagsSection }