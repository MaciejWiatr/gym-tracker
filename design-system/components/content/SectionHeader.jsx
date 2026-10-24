import React from "react";
import { Icon } from "../core/Icon.jsx";
export function SectionHeader({title,action,actionIcon,onAction,collapsible=false,open=true,onToggle,muted=false,style={}}){
  return <div style={{display:"flex",alignItems:"center",gap:8,minHeight:44,...style}}>
    {collapsible&&<button type="button" onClick={onToggle} style={{border:0,background:"transparent",color:"var(--text-3)",padding:0,cursor:"pointer",display:"flex",transform:open?"none":"rotate(-90deg)",transition:"transform var(--dur-base) var(--ease-standard)"}}><Icon name="chevron-down" size={20}/></button>}
    <div onClick={collapsible?onToggle:undefined} style={{flex:1,fontSize:muted?17:22,fontWeight:muted?500:700,color:muted?"var(--text-2)":"var(--text-1)",cursor:collapsible?"pointer":"default"}}>{title}</div>
    {action&&<button type="button" onClick={onAction} style={{border:0,background:"transparent",color:"var(--text-accent)",fontFamily:"var(--font-body)",fontSize:15,fontWeight:700,cursor:"pointer"}}>{action}</button>}
    {actionIcon&&<button type="button" onClick={onAction} style={{border:0,background:"transparent",color:"var(--text-1)",cursor:"pointer",display:"flex"}}><Icon name={actionIcon} size={24}/></button>}
  </div>;
}