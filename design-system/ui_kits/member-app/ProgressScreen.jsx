(()=>{
const {TopBar,SegmentedControl,StatTile,MuscleRow,SectionHeader}=window.PJSGymDesignSystem_ff31cf;
function ProgressScreen(){
  const [r,setR]=React.useState("Week");
  const bars={Week:[40,0,72,55,0,88,30],Month:[60,70,50,90],Year:[30,45,50,60,58,70,72,80,65,85,90,76]}[r];
  const labels={Week:["M","T","W","T","F","S","S"],Month:["W1","W2","W3","W4"],Year:["J","F","M","A","M","J","J","A","S","O","N","D"]}[r];
  const peak=bars.indexOf(Math.max(...bars));const peakLabel={Week:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Month:["week 1","week 2","week 3","week 4"],Year:["January","February","March","April","May","June","July","August","September","October","November","December"]}[r][peak];
  return <div style={{flex:1,display:"flex",flexDirection:"column",paddingTop:50,minHeight:0}}>
    <TopBar title="Progress" divider/>
    <div style={{flex:1,overflowY:"auto",padding:20,display:"flex",flexDirection:"column",gap:16}}>
      <SegmentedControl options={["Week","Month","Year"]} value={r} onChange={setR}/>
      <figure style={{margin:0,display:"flex",flexDirection:"column",gap:10}}>
        <div style={{fontSize:20,fontWeight:700}}>Volume peaked on {peakLabel}</div>
        <div style={{display:"flex",alignItems:"flex-end",gap:6,height:140,borderBottom:"1px solid var(--border-strong)"}}>{bars.map((b,i)=>{const pk=i===peak;return <div key={i} style={{flex:1,height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",gap:4}}>{pk&&<span style={{fontSize:13,fontWeight:600,fontVariantNumeric:"tabular-nums"}}>{(b*60).toLocaleString()} kg</span>}<div style={{width:"100%",height:Math.max(2,b*0.8)+"%",borderRadius:"4px 4px 0 0",background:pk?"var(--data-1)":"var(--data-4)",transition:"height var(--dur-base) var(--ease-standard)"}}/></div>;})}</div>
        <div style={{display:"flex",gap:6}}>{labels.map((l,i)=><span key={i} style={{flex:1,textAlign:"center",fontSize:12,color:i===peak?"var(--text-1)":"var(--text-3)"}}>{l}</span>)}</div>
        <figcaption style={{fontSize:14,color:"var(--text-2)"}}>Total weight lifted per {r==="Year"?"month":r==="Month"?"week":"day"}. Bars start at zero.</figcaption>
      </figure>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}><StatTile label="Workouts" value="4"/><StatTile label="Time" value="3h 12" unit="m"/><StatTile label="Volume" value="12.4k" unit="kg"/><StatTile label="New PRs" value="3" delta="2 more than last week"/></div>
      <SectionHeader title="Glutes did the most work"/>
      <div>{[["Glutes",14],["Core",10],["Quads",9],["Shoulders",9],["Hamstrings",8]].map(([n,p],i)=><MuscleRow key={n} name={n} percent={p} max={14} highlight={i===0}/>)}</div>
      <p style={{margin:0,fontSize:14,color:"var(--text-2)"}}>Share of total working time this {r.toLowerCase()}. Remaining 50% spread across other muscles.</p>
    </div>
  </div>;
}
window.ProgressScreen=ProgressScreen;
})();