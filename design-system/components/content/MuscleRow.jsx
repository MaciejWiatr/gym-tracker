import React from "react";
export function MuscleRow({name,percent=0,max=100,highlight=false,divider=true,style={}}){
  const w=Math.max(0,Math.min(100,percent/(max||100)*100));
  return <div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) 120px 48px",gap:12,alignItems:"baseline",padding:"14px 0",borderBottom:divider?"1px solid var(--border-subtle)":"none",...style}}>
    <span style={{fontSize:16,fontWeight:highlight?600:400}}>{name}</span>
    <span style={{alignSelf:"center",height:8,borderRadius:2,background:"var(--data-track)",overflow:"hidden"}}><span style={{display:"block",width:w+"%",height:"100%",background:highlight?"var(--data-1)":"var(--text-3)"}}/></span>
    <span style={{fontVariantNumeric:"tabular-nums",fontSize:16,textAlign:"right"}}>{percent}%</span>
  </div>;
}