(()=>{
const {SectionHeader,StatTile,Chip,Badge,Icon,IconButton,ProgressBar}=window.PJSGymDesignSystem_ff31cf;
function FeatureTile({title,meta,tone,onClick,big}){
  return <div onClick={onClick} style={{position:"relative",flex:"none",width:big?"100%":200,height:big?300:240,borderRadius:big?36:28,overflow:"hidden",cursor:"pointer",background:tone||"radial-gradient(120% 90% at 60% 25%,#4A3540 0%,#2B1B21 45%,#120A0D 100%)"}}>
    <div style={{position:"absolute",inset:0,background:"var(--scrim-bottom)"}}/>
    <div style={{position:"absolute",left:18,right:18,bottom:18,display:"flex",flexDirection:"column",gap:6}}>
      <div style={{fontSize:14,color:"var(--text-2)"}}>{meta}</div>
      <div style={{fontFamily:"var(--font-display)",fontStretch:"125%",fontWeight:800,fontSize:big?34:22,lineHeight:.95,color:"#fff"}}>{title}</div>
    </div>
    {big&&<IconButton icon="play" variant="accent" size={56} style={{position:"absolute",right:18,top:18}}/>}
  </div>;
}
function HomeScreen({onOpenWorkout}){
  const [f,setF]=React.useState("All");
  return <div style={{flex:1,overflowY:"auto",padding:"60px 20px 20px",display:"flex",flexDirection:"column",gap:20}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <span style={{fontFamily:"var(--font-display)",fontStretch:"125%",fontWeight:900,fontSize:22,textTransform:"uppercase"}}>PJS<span style={{color:"var(--accent)"}}> Gym</span></span>
      <div style={{display:"flex",gap:4}}><IconButton icon="bell"/><IconButton icon="user" variant="tonal"/></div>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:4}}><div style={{color:"var(--text-2)",fontWeight:600}}>Thursday, June 27</div><div style={{fontSize:26,fontWeight:700,lineHeight:1.1}}>Morning, Jordan. You trained legs yesterday, so today is mobility.</div></div>
    <div style={{display:"flex",flexDirection:"column",gap:8}}><div style={{display:"flex",justifyContent:"space-between",fontSize:13,fontWeight:700}}><span style={{color:"var(--text-2)",fontWeight:500}}>This week</span><span style={{fontVariantNumeric:"tabular-nums"}}>3 of 4 sessions</span></div><ProgressBar segments={4} value={3}/></div>
    <FeatureTile big title={<>Mobility<br/>and core</>} meta="Today · 28 min" onClick={onOpenWorkout}/>
        <SectionHeader title="Classes at PJS" action="See all"/>
    <div style={{display:"flex",gap:12,overflowX:"auto",margin:"-6px -20px 0",padding:"0 20px"}}>
      <FeatureTile title="Power hour" meta="6:30 pm · Studio 2"/>
      <FeatureTile title="Engine room" meta="7:30 pm · Rig"/>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,paddingTop:4}}><StatTile label="Volume this week" value="12.4k" unit="kg" delta="Up 8% on last week"/><StatTile label="New PRs" value="3" delta="Bench, row, squat"/></div>
  </div>;
}
window.HomeScreen=HomeScreen;
})();