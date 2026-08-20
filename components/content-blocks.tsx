import type { ContentBlock } from "@/types/content";
import { ContentTable } from "@/components/content-table";

export function ContentBlocks({blocks}:{blocks:ContentBlock[]}){
  return <div className="contentblocks">{blocks.map((block,index)=>{
    if(block.type==="paragraph")return <p key={index}>{block.text}</p>;
    if(block.type==="list")return <ul key={index}>{block.items.map((item,itemIndex)=><li key={itemIndex}>{item}</li>)}</ul>;
    return <ContentTable table={block.table} key={block.table.id}/>;
  })}</div>;
}
