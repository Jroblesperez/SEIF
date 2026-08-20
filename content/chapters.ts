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
import { chapter as designPrinciples } from "@/content/chapters/10-design-principles";
import { chapter as operatingModel } from "@/content/chapters/11-operating-model";
import { chapter as discovery } from "@/content/chapters/12-discovery";
import { chapter as roles } from "@/content/chapters/17-roles";
import { chapter as artifacts } from "@/content/chapters/20-artifacts";
import { legacyChapters } from "@/content/chapters/legacy";

const blockA:Chapter[]=[executiveSummary,methodology,interviews,currentState,findings,rootCauses,maturity,wasteFriction,valueStream];
const blockBWave1:Chapter[]=[designPrinciples,operatingModel];
const blockBWave2:Chapter[]=[roles,artifacts];
const blockBWave3:Chapter[]=[discovery];

export const chapters:Chapter[]=[...blockA,...blockBWave1,...blockBWave2,...blockBWave3,...legacyChapters]
  .sort((a,b)=>Number.parseInt(a.eyebrow,10)-Number.parseInt(b.eyebrow,10));

const slugs=new Set<string>();
for(const chapter of chapters){
  if(slugs.has(chapter.slug))throw new Error(`Duplicate chapter slug: ${chapter.slug}`);
  slugs.add(chapter.slug);
}

export const chapterBySlug=(slug:string)=>chapters.find(chapter=>chapter.slug===slug);
export const groups=[...new Set(chapters.map(({group})=>group))];
