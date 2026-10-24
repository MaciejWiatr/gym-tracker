import React from "react";
export function Sheet({open=true,title,children,onClose,style={}}){
  if(!open)return null;
  return <div style={{position:"absolute",inset:0,zIndex:50,display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
    <div onClick={onClose} style={{position:"absolute",inset:0,background:"var(--scrim)"}}/>
    <div style={{position:"relative",background:"var(--surface-card)",borderRadius:"var(--radius-xl) var(--radius-xl) 0 0",padding:"10px var(--gutter-screen) 34px",boxShadow:"var(--shadow-sheet)",display:"flex",flexDirection:"column",gap:16,...style}}>
      <span style={{alignSelf:"center",width:40,height:5,borderRadius:999,background:"var(--border-strong)"}}/>
      {title&&<div style={{fontSize:20,fontWeight:700,textAlign:"center"}}>{title}</div>}
      {children}
    </div>
  </div>;
}