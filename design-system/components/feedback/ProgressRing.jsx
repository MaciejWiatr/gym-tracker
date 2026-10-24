import React from "react";
export function ProgressRing({value=0,size=220,stroke=14,color="var(--data-1)",children,style={}}){
  const r=(size-stroke)/2,c=2*Math.PI*r;
  return <div style={{position:"relative",width:size,height:size,...style}}>
    <svg width={size} height={size} style={{transform:"rotate(-90deg)"}}><circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--surface-field)" strokeWidth={stroke}/><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c*(1-Math.min(100,value)/100)} style={{transition:"stroke-dashoffset var(--dur-slow) linear"}}/></svg>
    <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>{children}</div>
  </div>;
}