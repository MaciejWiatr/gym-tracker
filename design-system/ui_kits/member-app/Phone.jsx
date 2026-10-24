(()=>{
const {Icon}=window.PJSGymDesignSystem_ff31cf;
function Phone({children,theme,overlay}){
  return <div data-theme={theme} style={{width:390,height:844,borderRadius:48,overflow:"hidden",position:"relative",background:"var(--surface-app)",color:"var(--text-1)",boxShadow:"0 0 0 10px #1E1216, 0 30px 80px rgba(30,18,22,.35)"}}>
    <div style={{position:"absolute",top:0,left:0,right:0,height:50,zIndex:40,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 32px 0 40px",fontSize:16,fontWeight:700,color:overlay?"#fff":"var(--text-1)",pointerEvents:"none"}}><span>9:41</span><span style={{display:"flex",gap:6}}><Icon name="signal" size={17}/><Icon name="wifi" size={17}/><Icon name="battery-full" size={20}/></span></div>
    <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column"}}>{children}</div>
    <div style={{position:"absolute",bottom:8,left:"50%",transform:"translateX(-50%)",width:134,height:5,borderRadius:3,background:overlay?"#fff":"var(--text-1)",zIndex:60}}/>
  </div>;
}
window.Phone=Phone;
})();