import React from "react";
import { Icon } from "../core/Icon.jsx";
export function Toast({message,icon="check",tone="neutral",style={}}){
  const a=tone==="success";
  return <div role="status" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"12px 18px",borderRadius:999,background:a?"var(--accent)":"var(--surface-inverse)",color:a?"var(--text-on-accent)":"var(--text-inverse)",fontSize:15,fontWeight:700,boxShadow:"var(--shadow-float)",...style}}><Icon name={icon} size={18}/>{message}</div>;
}