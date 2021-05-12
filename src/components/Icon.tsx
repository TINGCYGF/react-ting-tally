import React from "react";
import styled from "styled-components";
import cs from "classnames";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

const Wrapper = styled.div`
  .icon{
     width: 32px; height: 32px;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
     &.delete{
        width:20px;height:20px;
        color: #f00;
        margin: 0 8px;
     }
     &.edit{
        width:20px;height:20px;
        color: #00f;
        margin: 0 8px;
     }
  }
`

type Props = {
  name: string,
  className?: string,
} & React.SVGAttributes<SVGElement>
 //添加SVG属性
const Icon = (props: Props) => {
  const {name, children, className, ...rest} = props
  return (
    <Wrapper>
      <svg className={cs('icon', className)} {...rest}>
        <use xlinkHref={'#'+props.name}/>
      </svg>
    </Wrapper>
  );
};

export default Icon