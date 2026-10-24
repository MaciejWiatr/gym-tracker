import React from "react";
export function Switch({checked=false,onChange,label,style={}}){
  return <label style={{display:"inline-flex",alignItems:"center",gap:12,cursor:"pointer",...style}} onClick={()=>onChange&&onChange(!checked)}>
    <span style={{width:52,height:32,borderRadius:999,padding:3,background:checked?"var(--accent)":"var(--surface-field)",boxShadow:checked?"none":"inset 0 0 0 1.5px var(--border-strong)",transition:"background var(--dur-base) var(--ease-standard)",display:"flex"}}>
      <span style={{width:26,height:26,borderRadius:999,background:checked?"var(--surface-card)":"var(--text-3)",transform:checked?"translateX(20px)":"none",transition:"transform var(--dur-base) var(--ease-standard)"}}/>
    </span>
    {label&&<span style={{fontSize:16,color:"var(--text-1)"}}>{label}</span>}
  </label>;
}