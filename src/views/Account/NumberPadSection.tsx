import React, {useState} from "react";
import styled from "styled-components";

const NumberPadSectionStyle = styled.div`
  display: flex;
  flex-direction: column;

  > .output {
    display: flex;
    flex-direction: row;
    background: white;
    font-size: 36px;
    line-height: 76px;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25);

    > .text {
      font-weight: bold;
      white-space: nowrap;
    }

    > .number {
      flex-grow: 1;
      text-align: right;
      margin-right: 25px;
    }
  }

  > .pad {
    > button {
      border: none;
      float: left;
      width: 25%;
      height: 52px;
      text-align: center;
      line-height: 52px;

      &.ok {
        height: 104px;
        line-height: 104px;
        float: right;
      }

      &.zero {
        width: 50%;
      }

      &:nth-child(1) {
        background: #ffffff;
      }

      &:nth-child(2), &:nth-child(5) {
        background: #fafbfc;
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: #f5f7fa;
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: #eceff3
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: #dfe5ec
      }

      &:nth-child(14) {
        background: #a4b0be
      }

      &:nth-child(12) {
        background: #a4b0be
      }
    }
  }
`
type Props = {
  value: number;
  onChange: (amount: number) => void;
  onOk: () => boolean;
}
const NumberPadSection:React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(props.value.toString())
  const setOutput = (output: string) => {
   if(output.length >= 16){
     _setOutput(output.slice(0, 16))
   }else {
     _setOutput(output)
   }
   props.onChange(parseFloat(output))
  }
  const ok = () => {
    const isOk: boolean = props.onOk()
    if(isOk){
      _setOutput('0')
    }
  }
  const onClickWrapper = (e: React.MouseEvent<HTMLInputElement>) => {
    const text = (e.target as HTMLButtonElement).textContent
    if(text === null){return}
    switch(text){
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        if(output === '0'){
          setOutput(text)
        }else {
          setOutput(output + text)
        }
        break
      case ".":
        if(output.indexOf('.') >= 0){
          break
        }else {
          setOutput(output + ".")
        }
        break
      case "删除":
        if(output.length === 1){
          setOutput('0')
        }else {
          setOutput(output.slice(0, -1))
        }
        break
      case "清空":
        setOutput('0')
        break
      case "确认":
        ok()
        break
    }
  }

  return (
    <NumberPadSectionStyle>
      <div className="output">
        <div className="text">金额: </div>
        <div className="number">{output}</div>
      </div>
      <div className="pad clearfix" onClick={onClickWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">确认</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </NumberPadSectionStyle>
  )
}

export {NumberPadSection}