import React from "react";
const T={accent:["var(--accent)","var(--text-on-accent)"],soft:["var(--accent-soft)","var(--text-accent)"],neutral:["var(--surface-raised)","var(--text-2)"],live:["var(--pjs-flare)","#FFFFFF"],success:["rgba(46,113,81,.12)","var(--status-success)"]};
export function Badge({children,tone="neutral",style={}}){
  const [bg,fg]=T[tone]||T.neutral;
  return <span style={{display:"inline-flex",alignItems:"center",gap:4,height:22,padding:"0 8px",borderRadius:"var(--radius-pill)",background:bg,color:fg,fontSize:12,fontWeight:600,whiteSpace:"nowrap",...style}}>{children}</span>;
}