import React from "react";
import { Icon } from "./Icon.jsx";
function usePress(){const [p,setP]=React.useState(false);return [p,{onPointerDown:()=>setP(true),onPointerUp:()=>setP(false),onPointerLeave:()=>setP(false)}];}
const V={
  primary:{background:"var(--accent)",color:"var(--text-on-accent)"},
  secondary:{background:"var(--surface-inverse)",color:"var(--text-inverse)"},
  tonal:{background:"var(--surface-raised)",color:"var(--text-1)"},
  outline:{background:"transparent",color:"var(--text-1)",boxShadow:"inset 0 0 0 1.5px var(--border-strong)"},
  ghost:{background:"transparent",color:"var(--text-accent)"},
  danger:{background:"var(--pjs-flare)",color:"#fff"}
};
const S={sm:{height:36,padding:"0 14px",fontSize:14,gap:6,icon:16},md:{height:48,padding:"0 20px",fontSize:16,gap:8,icon:20},lg:{height:60,padding:"0 28px",fontSize:18,gap:10,icon:22}};
export function Button({children,variant="primary",size="md",icon,iconRight,fullWidth=false,shape="pill",disabled=false,onClick,style={}}){
  const [p,h]=usePress();const s=S[size];
  return <button type="button" disabled={disabled} onClick={onClick} {...h} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:s.gap,height:s.height,padding:s.padding,width:fullWidth?"100%":undefined,border:0,borderRadius:shape==="pill"?"var(--radius-pill)":"var(--radius-md)",fontFamily:"var(--font-body)",fontSize:s.fontSize,fontWeight:600,cursor:disabled?"default":"pointer",opacity:disabled?.4:1,transform:p&&!disabled?"scale(var(--press-scale))":"none",filter:p&&!disabled?"brightness(.92)":"none",transition:"transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast)",...V[variant],...style}}>
    {icon&&<Icon name={icon} size={s.icon}/>}{children}{iconRight&&<Icon name={iconRight} size={s.icon}/>}
  </button>;
}