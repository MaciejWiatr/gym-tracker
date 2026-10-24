import React from "react";
import { Icon } from "../core/Icon.jsx";
export function Stepper({value=0,step=1,unit,min=0,onChange,label,style={}}){
  const set=v=>onChange&&onChange(Math.max(min,Math.round(v*100)/100));
  const b={width:44,height:44,borderRadius:999,border:0,background:"var(--surface-field)",color:"var(--text-1)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"};
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:6,...style}}>
    {label&&<span style={{fontSize:14,fontWeight:500,color:"var(--text-2)"}}>{label}</span>}
    <div style={{display:"flex",alignItems:"center",gap:12}}>
      <button type="button" style={b} onClick={()=>set(value-step)}><Icon name="minus" size={20}/></button>
      <span style={{minWidth:88,textAlign:"center",fontVariantNumeric:"tabular-nums",fontSize:32,fontWeight:800,lineHeight:1}}>{value}{unit&&<span style={{fontSize:14,fontWeight:600,color:"var(--text-2)",marginLeft:4}}>{unit}</span>}</span>
      <button type="button" style={b} onClick={()=>set(value+step)}><Icon name="plus" size={20}/></button>
    </div>
  </div>;
}