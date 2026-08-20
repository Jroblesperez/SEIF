import type { Chapter } from "@/types/content";
import { chapter as executiveSummary } from "@/content/chapters/01-executive-summary";
import { chapter as methodology } from "@/content/chapters/02-methodology";
import { chapter as interviews } from "@/content/chapters/03-interviewed-areas";
import { chapter as currentState } from "@/content/chapters/04-current-state";
import { chapter as findings } from "@/content/chapters/05-findings";
import { chapter as rootCauses } from "@/content/chapters/06-root-causes";
import { chapter as maturity } from "@/content/chapters/07-maturity";
import { chapter as wasteFriction } from "@/content/chapters/08-waste-friction";
import { chapter as valueStream } from "@/content/chapters/09-value-stream";
import { legacyChapters } from "@/content/chapters/legacy";

const blockA:Chapter[]=[executiveSummary,methodology,interviews,currentState,findings,rootCauses,maturity,wasteFriction,valueStream];

export const chapters:Chapter[]=[...blockA,...legacyChapters];

const slugs=new Set<string>();
for(const chapter of chapters){
  if(slugs.has(chapter.slug))throw new Error(`Duplicate chapter slug: ${chapter.slug}`);
  slugs.add(chapter.slug);
}

export const chapterBySlug=(slug:string)=>chapters.find(chapter=>chapter.slug===slug);
export const groups=[...new Set(chapters.map(({group})=>group))];
