import styled from "styled-components";
import React, {useRef} from "react";


const NotesSectionStyle = styled.div`
  background: #e7eaee;
  padding: 10px 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
      line-height: 46px;
    }

    > input {
      display: block;
      width: 100%;
      background: none;
      line-height: 46px;
    }
  }
`
type Props = {
  node: string,
  onChange: (note:string) => void
}
const NotesSection: React.FC<Props> = (props) => {
  const note = props.node
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = () => {
    const node:HTMLInputElement | null = refInput.current
    if(node){
      console.log(node.value);
      props.onChange(node.value)
    }
  }

  return (
    <NotesSectionStyle>
      <label>
        <span>备注: </span>
        <input type="text" placeholder="添加备注"
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur}
        />
      </label>
    </NotesSectionStyle>
  )
}

export {NotesSection}