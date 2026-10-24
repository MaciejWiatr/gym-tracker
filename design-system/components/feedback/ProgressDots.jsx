import React from "react";
export function ProgressDots({count=5,index=0,style={}}){
  return <div style={{display:"flex",gap:8,alignItems:"center",justifyContent:"center",...style}}>{Array.from({length:count}).map((_,i)=>{const d=Math.abs(i-index);return <span key={i} style={{width:i===index?24:8,height:8,borderRadius:999,background:i===index?"var(--accent)":"var(--text-3)",opacity:d>3?.5:1,transition:"all var(--dur-base) var(--ease-standard)"}}/>;})}</div>;
}