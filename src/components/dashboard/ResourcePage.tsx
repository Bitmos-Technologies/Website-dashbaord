"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Eye, MoreHorizontal, Pencil, Plus, Search, Trash2, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { AdminRecord } from "@/types";

export type Field = { key: string; label: string; type?: "text"|"email"|"number"|"textarea"|"select"; options?: string[]; placeholder?: string };
export type Column = { key: string; label: string; badge?: boolean };
export type ResourceConfig = { title:string; description:string; singular:string; rows:AdminRecord[]; columns:Column[]; fields:Field[]; filter?:{key:string;label:string;options:string[]}; readOnly?:boolean; detailBase?:string };

function StatusBadge({ children }: { children: React.ReactNode }) { return <span className={`admin-badge badge-${String(children).toLowerCase().replaceAll(" ","-")}`}>{children}</span>; }

function FormModal({ config, initial, onClose, onSave }: { config:ResourceConfig; initial:AdminRecord|null; onClose:()=>void; onSave:(values:Record<string,string>)=>void }) {
  const shape = Object.fromEntries(config.fields.map((field)=>[field.key,z.string().min(1,`${field.label} is required`)]));
  const schema = z.object(shape);
  const defaults = Object.fromEntries(config.fields.map((field)=>[field.key,initial ? String(initial[field.key]??"") : ""]));
  const { register, handleSubmit, formState:{errors,isSubmitting} } = useForm<Record<string,string>>({ defaultValues:defaults, resolver:zodResolver(schema) });
  return <div className="modal-layer"><div className="modal-card"><header><div><span>{initial?"Edit":"Create"} record</span><h2>{initial?`Edit ${config.singular}`:`New ${config.singular}`}</h2></div><button onClick={onClose}><X size={20}/></button></header><form onSubmit={handleSubmit(onSave)}><div className="form-grid">{config.fields.map((field)=><label className={field.type==="textarea"?"wide":""} key={field.key}><span>{field.label}</span>{field.type==="select"?<select {...register(field.key)}><option value="">Select {field.label.toLowerCase()}</option>{field.options?.map(o=><option key={o}>{o}</option>)}</select>:field.type==="textarea"?<textarea placeholder={field.placeholder} {...register(field.key)}/>:<input type={field.type??"text"} placeholder={field.placeholder} {...register(field.key)}/>}<small>{errors[field.key]?.message as string}</small></label>)}</div><p className="form-error-slot">All changes are saved locally while the API is offline.</p><footer><button type="button" className="btn-secondary" onClick={onClose}>Cancel</button><button className="btn-primary" disabled={isSubmitting}>{isSubmitting?"Saving…":"Save changes"}</button></footer></form></div></div>;
}

export function ResourcePage({ config }: { config:ResourceConfig }) {
  const [rows,setRows] = useState(config.rows);
  const [search,setSearch] = useState(""); const [filter,setFilter] = useState("All"); const [page,setPage] = useState(1);
  const [editing,setEditing] = useState<AdminRecord|null|undefined>(); const [deleting,setDeleting] = useState<AdminRecord|null>(null);
  const perPage=5;
  const filtered=useMemo(()=>rows.filter(row=>Object.values(row).some(v=>String(v).toLowerCase().includes(search.toLowerCase())) && (!config.filter||filter==="All"||String(row[config.filter.key])===filter)),[rows,search,filter,config.filter]);
  const pages=Math.max(1,Math.ceil(filtered.length/perPage)); const visible=filtered.slice((page-1)*perPage,page*perPage);
  const save=(values:Record<string,string>)=>{if(editing){setRows(current=>current.map(row=>row.id===editing.id?{...row,...values}:row));}else{setRows(current=>[{id:`${config.singular.slice(0,3).toUpperCase()}-${Date.now().toString().slice(-4)}`,...values},...current]);}setEditing(undefined);};
  return <>
    <header className="resource-header"><div><p>Administration / <span>{config.title}</span></p><h1>{config.title}</h1><small>{config.description}</small></div>{!config.readOnly&&<button className="btn-primary" onClick={()=>setEditing(null)}><Plus size={15}/> Add {config.singular}</button>}</header>
    <section className="resource-card"><div className="resource-tools"><label className="search-box"><Search size={16}/><input value={search} onChange={e=>{setSearch(e.target.value);setPage(1)}} placeholder={`Search ${config.title.toLowerCase()}…`}/></label>{config.filter&&<select value={filter} onChange={e=>{setFilter(e.target.value);setPage(1)}}><option>All</option>{config.filter.options.map(o=><option key={o}>{o}</option>)}</select>}<span className="record-count">{filtered.length} records</span></div>
      <div className="table-scroll"><table className="admin-table"><thead><tr>{config.columns.map(c=><th key={c.key}>{c.label}</th>)}{!config.readOnly&&<th>Actions</th>}</tr></thead><tbody>{visible.length?visible.map(row=><tr key={row.id}>{config.columns.map(column=><td key={column.key}>{column.key==="id"&&config.detailBase?<Link className="table-link" href={`${config.detailBase}/${row.id}`}>{row[column.key]}</Link>:column.badge?<StatusBadge>{row[column.key]}</StatusBadge>:<span className={column.key==="name"||column.key==="customer"||column.key==="title"?"cell-strong":""}>{row[column.key]}</span>}</td>)}{!config.readOnly&&<td><div className="row-actions">{config.detailBase&&<Link title="View" href={`${config.detailBase}/${row.id}`}><Eye size={15}/></Link>}<button title="Edit" onClick={()=>setEditing(row)}><Pencil size={14}/></button><button title="Delete" onClick={()=>setDeleting(row)}><Trash2 size={14}/></button><button title="More"><MoreHorizontal size={15}/></button></div></td>}</tr>):<tr><td className="empty-row" colSpan={config.columns.length+1}><Search size={24}/><strong>No records found</strong><span>Try changing your search or filters.</span></td></tr>}</tbody></table></div>
      <footer className="pagination"><span>Showing {filtered.length?((page-1)*perPage)+1:0}–{Math.min(page*perPage,filtered.length)} of {filtered.length}</span><div><button disabled={page===1} onClick={()=>setPage(p=>p-1)}><ChevronLeft size={15}/></button>{Array.from({length:pages},(_,i)=><button className={page===i+1?"active":""} onClick={()=>setPage(i+1)} key={i}>{i+1}</button>)}<button disabled={page===pages} onClick={()=>setPage(p=>p+1)}><ChevronRight size={15}/></button></div></footer>
    </section>
    {editing!==undefined&&<FormModal config={config} initial={editing} onClose={()=>setEditing(undefined)} onSave={save}/>} {deleting&&<div className="modal-layer"><div className="confirm-card"><div className="danger-icon"><Trash2/></div><h2>Delete {config.singular}?</h2><p>This will remove <strong>{String(deleting.name??deleting.title??deleting.id)}</strong> from the local dashboard. This action cannot be undone.</p><div><button className="btn-secondary" onClick={()=>setDeleting(null)}>Keep it</button><button className="btn-danger" onClick={()=>{setRows(r=>r.filter(x=>x.id!==deleting.id));setDeleting(null)}}>Delete</button></div></div></div>}
  </>;
}
