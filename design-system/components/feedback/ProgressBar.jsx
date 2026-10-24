import React from "react";
export function ProgressBar({value=0,segments,height=6,color="var(--data-1)",style={}}){
  if(segments)return <div style={{display:"flex",gap:4,...style}}>{Array.from({length:segments}).map((_,i)=><span key={i} style={{flex:1,height,borderRadius:999,background:i<value?color:"var(--surface-field)",transition:"background var(--dur-base)"}}/>)}</div>;
  return <div style={{height,borderRadius:999,background:"var(--surface-field)",overflow:"hidden",...style}}><div style={{width:Math.min(100,value)+"%",height:"100%",borderRadius:999,background:color,transition:"width var(--dur-slow) var(--ease-emphasized)"}}/></div>;
}