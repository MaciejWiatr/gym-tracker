import React from "react";
const LUCIDE="https://unpkg.com/lucide-static@0.469.0/icons/";
export function Icon({name="circle",size=24,color="currentColor",style={},...rest}){
  const url="url("+LUCIDE+name+".svg)";
  return <span aria-hidden="true" {...rest} style={{display:"inline-block",flex:"none",width:size,height:size,background:color,WebkitMask:url+" center/contain no-repeat",mask:url+" center/contain no-repeat",...style}}/>;
}