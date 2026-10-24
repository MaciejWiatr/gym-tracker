import React from "react";
import { IconButton } from "../core/IconButton.jsx";
export function TopBar({title,leading,trailing,onLeading,onTrailing,overMedia=false,center,divider=false,style={}}){
  const v=overMedia?"overlay":"plain";
  return <header style={{display:"flex",alignItems:"center",gap:8,height:"var(--topbar-height)",padding:"0 12px",borderBottom:divider?"1px solid var(--border-subtle)":"none",color:"var(--text-1)",...style}}>
    <div style={{width:44}}>{leading&&<IconButton icon={leading} variant={v} onClick={onLeading}/>}</div>
    <div style={{flex:1,textAlign:"center",fontSize:17,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{center||title}</div>
    <div style={{width:44}}>{trailing&&<IconButton icon={trailing} variant={v} onClick={onTrailing}/>}</div>
  </header>;
}