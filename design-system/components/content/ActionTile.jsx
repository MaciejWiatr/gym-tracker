import React from "react";
import { Icon } from "../core/Icon.jsx";
export function ActionTile({icon,label,dashed=false,onClick,style={}}){
  const [p,setP]=React.useState(false);
  return <button type="button" onClick={onClick} onPointerDown={()=>setP(true)} onPointerUp={()=>setP(false)} onPointerLeave={()=>setP(false)} style={{display:"flex",alignItems:"center",justifyContent:dashed?"center":"flex-start",gap:12,minHeight:60,padding:"0 18px",borderRadius:"var(--radius-md)",border:dashed?"1.5px dashed var(--border-dashed)":0,background:dashed?"transparent":"var(--surface-raised)",color:dashed?"var(--text-accent)":"var(--text-1)",fontFamily:"var(--font-body)",fontSize:17,fontWeight:600,cursor:"pointer",textAlign:"left",transform:p?"scale(.98)":"none",transition:"transform var(--dur-fast) var(--ease-standard)",...style}}><Icon name={icon} size={22}/>{label}</button>;
}