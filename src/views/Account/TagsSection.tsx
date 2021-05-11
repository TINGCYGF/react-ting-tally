import styled from "styled-components";
import React, { useState } from "react";

const TagsSectionStyle = styled.div`
  flex-grow: 1;
  background: #FFF;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ul{
    display: flex;
    margin: 0 -12px;
    >li{
      background: aquamarine;
      border-radius: 18px;
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background: blue;
      }
    }
  }
  >button{
    background: none;
    padding: 0 4px;
    border-bottom: 1px solid #333;
    color: #666
  }
`

const TagsSection: React.FunctionComponent = (props) => {
  const [tags, setTage] = useState<string[]>(['房租', '餐饮']);
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const onAddTag = () => {
    const tagName = window.prompt("新标签名为")
    if (tagName !== null){
      setTage([...tags, tagName])
    }
  };

  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if(index >= 0){
      setSelectedTags(selectedTags.filter(t => t !== tag));
    }else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  return (
    <TagsSectionStyle>
      <ul>
        {
          tags.map(tag => {
            return (
              <li key={tag}
                  onClick={() => {onToggleTag(tag)}}
                  className={selectedTags.indexOf(tag)>=0 ? "selected" : ''}
              >{tag}</li>
            )
          })
        }
      </ul>
      <button onClick={onAddTag}>新增标签</button>
    </TagsSectionStyle>
  )
}

export { TagsSection }