import React from "react";
import { Icon } from "./Icon.jsx";
export function Chip({children,selected=false,icon,onClick,style={}}){
  return <button type="button" onClick={onClick} style={{display:"inline-flex",alignItems:"center",gap:6,height:36,padding:"0 14px",borderRadius:"var(--radius-pill)",border:0,cursor:"pointer",fontFamily:"var(--font-body)",fontSize:14,fontWeight:600,whiteSpace:"nowrap",background:selected?"var(--surface-inverse)":"var(--surface-raised)",color:selected?"var(--text-inverse)":"var(--text-1)",transition:"background var(--dur-base) var(--ease-standard)",...style}}>{icon&&<Icon name={icon} size={16}/>}{children}</button>;
}