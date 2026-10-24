import React from "react";
import { Icon } from "../core/Icon.jsx";
export function StatTile({label,value,unit,delta,style={}}){
  return <div style={{color:"var(--text-1)",display:"flex",flexDirection:"column",gap:6,minWidth:0,...style}}>
    <div style={{fontSize:14,fontWeight:500,color:"var(--text-2)"}}>{label}</div>
    <div style={{fontVariantNumeric:"tabular-nums",fontSize:"var(--fs-metric-l)",fontWeight:800,lineHeight:1}}>{value}{unit&&<span style={{fontSize:15,fontWeight:600,marginLeft:4,opacity:.7}}>{unit}</span>}</div>
    {delta&&<div style={{fontSize:13,color:"var(--text-2)"}}>{delta}</div>}
  </div>;
}