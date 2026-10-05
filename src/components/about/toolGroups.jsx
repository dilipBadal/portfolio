const groups = [{ title: "Analysis", tools: "Python · SQL · Pandas" }, { title: "Visualization", tools: "Power BI" }, { title: "Machine learning", tools: "Scikit-learn" }];
export default function ToolGroups({ engineering = false }) {
  return <div className="tool-groups">{[...groups, ...(engineering ? [{ title: "Product engineering", tools: "React · React Native · APIs · PostgreSQL" }] : [])].map(group => <div key={group.title}><h3>{group.title}</h3><p>{group.tools}</p></div>)}</div>;
}
