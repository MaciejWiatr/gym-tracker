import React from "react";
import { Icon } from "../core/Icon.jsx";
export function ActionRow({items=[],style={}}){
  return <div style={{display:"flex",justifyContent:"space-around",...style}}>
    {items.map(it=><button key={it.label} type="button" onClick={it.onClick} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:8,minWidth:64,border:0,background:"transparent",cursor:"pointer",color:it.active?"var(--text-accent)":"#fff",fontFamily:"var(--font-body)"}}><Icon name={it.icon} size={26}/><span style={{fontSize:14,color:"var(--text-2)"}}>{it.label}</span></button>)}
  </div>;
}