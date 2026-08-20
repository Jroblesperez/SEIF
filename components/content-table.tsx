import type { ContentTable as ContentTableData } from "@/types/content";

const labels:Record<ContentTableData["kind"],string>={
  simple:"Tabla",
  comparison:"Matriz comparativa",
  scorecard:"Scorecard",
  maturity:"Maturity assessment",
  "evidence-map":"Mapa de evidencia",
};

export function ContentTable({table}:{table:ContentTableData}){
  return <figure className={`contenttable contenttable-${table.kind}`}>
    <figcaption><span>{labels[table.kind]}</span><b>{table.caption}</b></figcaption>
    {(table.assessmentLabel||table.validationStatus==="pending")&&<div className="assessmentstatus">
      <strong>{table.assessmentLabel??"Pendiente de validación"}</strong>
      {table.validationStatus==="pending"&&<span>PENDING VALIDATION</span>}
    </div>}
    <div className="table-scroll" tabIndex={0} role="region" aria-label={table.caption}>
      <table>
        <thead><tr>{table.headers.map((header,index)=><th scope="col" key={`${header}-${index}`}>{header}</th>)}</tr></thead>
        <tbody>{table.rows.map((row,rowIndex)=><tr key={rowIndex}>{row.map((cell,cellIndex)=>cellIndex===0?<th scope="row" key={cellIndex}>{cell}</th>:<td key={cellIndex}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  </figure>;
}
