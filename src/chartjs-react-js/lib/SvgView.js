import React from 'react'
 
const svglist=()=>require("./SvgView.json");
const SvgView = ({name,height,width,className,fill,style}) => {
    
    if(!name || name===""){
        return null;
    }
       
    const svgs=svglist();
    const svgItem=svgs.filter(v=>v.name===name)[0];   
  return svgItem&&(
     <svg  xmlns="http://www.w3.org/2000/svg" height={height} width={width} className={className} style={style}  viewBox={`0 0 ${svgItem.viewbox} 512`}>
     <path rotate={180} fill={fill} d={svgItem.d}/></svg>
  )
}
 

export default SvgView