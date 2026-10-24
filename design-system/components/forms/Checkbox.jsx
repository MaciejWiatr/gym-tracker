import React from "react";
import { Icon } from "../core/Icon.jsx";
export function Checkbox({checked=false,onChange,size=32,label,style={}}){
  return <label onClick={()=>onChange&&onChange(!checked)} style={{display:"inline-flex",alignItems:"center",gap:10,cursor:"pointer",...style}}>
    <span style={{width:size,height:size,borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",justifyContent:"center",background:checked?"var(--accent)":"var(--surface-field)",color:"var(--text-on-accent)",transition:"background var(--dur-base) var(--ease-standard)"}}>{checked&&<Icon name="check" size={Math.round(size*0.6)}/>}</span>
    {label&&<span style={{fontSize:16}}>{label}</span>}
  </label>;
}