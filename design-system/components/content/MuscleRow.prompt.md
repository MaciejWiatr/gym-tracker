Body-activity row on a fixed label / bar / value grid; bar length encodes percent on a scale shared by the whole set.
```jsx
{rows.map(r => <MuscleRow key={r.name} name={r.name} percent={r.pct} max={14} highlight={r.name==="Glutes"} />)}
```
Pass one `max` for every row. Highlight only the row the reader should notice; others stay neutral.