import React from "react";
import { Icon } from "../core/Icon.jsx";
export function TextField({label,value,placeholder,icon,onChange,type="text",style={}}){
  const [f,setF]=React.useState(false);
  return <label style={{display:"flex",flexDirection:"column",gap:6,...style}}>
    {label&&<span style={{fontSize:13,fontWeight:600,color:"var(--text-2)"}}>{label}</span>}
    <span style={{display:"flex",alignItems:"center",gap:10,height:52,padding:"0 16px",borderRadius:"var(--radius-md)",background:"var(--surface-field)",boxShadow:f?"inset 0 0 0 1.5px var(--accent)":"none",transition:"box-shadow var(--dur-fast)"}}>
      {icon&&<Icon name={icon} size={20} color="var(--text-2)"/>}
      <input type={type} value={value} placeholder={placeholder} onChange={e=>onChange&&onChange(e.target.value)} onFocus={()=>setF(true)} onBlur={()=>setF(false)} style={{flex:1,minWidth:0,border:0,outline:0,background:"transparent",color:"var(--text-1)",fontFamily:"var(--font-body)",fontSize:16}}/>
    </span>
  </label>;
}