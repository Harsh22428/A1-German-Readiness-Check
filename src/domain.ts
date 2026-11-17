import {areas,assessmentVersion,labels,questions,scoringVersion} from './content';
import type {Area,Provider} from './content';
export type Responses=Record<string,string>;
export type Band='strong'|'developing'|'practice';
export type Attempt={schemaVersion:1;id:string;assessmentVersion:string;scoringVersion:string;provider:Provider;startedAt:number;updatedAt:number;status:'in-progress'|'submitted';responses:Responses;currentQuestionIndex:number;submittedAt?:number;repeatExposure:boolean};
export type Score={counts:Record<Area,number>;total:number;percentage:number;band:Band};
export const storageKey='a1-readiness-attempt';
export const exposureKey='a1-readiness-exposure';
export const unknown='unknown';
export const expiry=7*24*60*60*1000;
export const bandText:Record<Band,{title:string;next:string}>={
 strong:{title:'Strong foundations',next:'Your checked foundations look strong. Complete a full mock before deciding to book.'},
 developing:{title:'Developing foundations',next:'You have a useful foundation. Practise the gaps below, then complete a full mock.'},
 practice:{title:'Foundations need practice',next:'Start with the areas below. A few focused practice steps can help you move forward.'},
};
export function validResponse(id:string,value:string){const q=questions.find(q=>q.id===id);return !!q&&(value===unknown||q.options.some(o=>o.id===value));}
export function complete(responses:Responses){return questions.every(q=>validResponse(q.id,responses[q.id]));}
export function score(responses:Responses):Score {
 if(!complete(responses))throw new Error('Complete all 15 questions before scoring.');
 const counts:Record<Area,number>={vocabulary:0,grammar:0,reading:0};
 for(const q of questions)if(responses[q.id]===q.correctOptionId)counts[q.area]++;
 const total=Object.values(counts).reduce((a,b)=>a+b,0);
 const min=Math.min(...Object.values(counts));
 return {counts,total,percentage:Math.round(total/15*100),band:min>=4?'strong':min>=3?'developing':'practice'};
}
export type Recommendation={id:string;area?:Area;title:string;reason:string;instructions:string;duration:string;topics?:string[]};
export function recommendations(responses:Responses):Recommendation[]{
 const result=score(responses);
 // Stable presentation order breaks ties; it is not an importance weighting.
 const gaps=areas.filter(a=>result.counts[a]<5).sort((a,b)=>result.counts[a]-result.counts[b]||areas.indexOf(a)-areas.indexOf(b)).slice(0,2);
 const recipes:Record<Area,{title:string;instructions:string}>={
 vocabulary:{title:'Put everyday words to work',instructions:'Make six everyday phrases using the words you missed. Cover their meanings, recall them, then check the examples in your answer review.'},
 grammar:{title:'Build six short sentences',instructions:'Use the missed patterns in six short sentences. Compare them with the explanations in your answer review, then try different words.'},
 reading:{title:'Find the details in short texts',instructions:'Read three short German notices or messages. Identify who, when, where and what to do. Use your missed examples to see which details to check.'},
 };
 const resultActions:Recommendation[]=gaps.map(area=>({id:`practice-${area}`,area,...recipes[area],reason:`You answered ${result.counts[area]}/5 ${labels[area].toLowerCase()} questions correctly.`,duration:'10 min practice',topics:questions.filter(q=>q.area===area&&responses[q.id]!==q.correctOptionId).slice(0,2).map(q=>q.topic)}));
 if(!gaps.length)resultActions.push({id:'maintain',title:'Keep your foundations fresh',reason:'You answered all 15 questions correctly in this small sample.',instructions:'Practise a short mix of fresh vocabulary, grammar and reading examples. Repeating this same check can improve your score through familiarity.',duration:'10 min practice'});
 resultActions.push({id:'full-mock',title:'Check all four exam skills',reason:'Listening, writing and speaking were not assessed here.',instructions:'Complete fresh practice for your exam provider under its stated conditions. Include listening, writing and speaking, with suitable feedback on your writing and speaking.',duration:'Full mock',});
 return resultActions;
}
export function newAttempt(provider:Provider,repeatExposure:boolean):Attempt{const now=Date.now();return {schemaVersion:1,id:crypto.randomUUID(),assessmentVersion,scoringVersion,provider,startedAt:now,updatedAt:now,status:'in-progress',responses:{},currentQuestionIndex:0,repeatExposure};}
export function updateAttempt(attempt:Attempt,changes:Partial<Pick<Attempt,'responses'|'currentQuestionIndex'>>):Attempt {
 if(attempt.status==='submitted')return attempt;
 return {...attempt,...changes,updatedAt:Date.now()};
}
export function finishAttempt(attempt:Attempt):Attempt {
 if(attempt.status==='submitted')return attempt;
 if(!complete(attempt.responses))throw new Error('Answer all questions before submitting.');
 const now=Date.now();return {...attempt,status:'submitted',submittedAt:now,updatedAt:now};
}
export function parseAttempt(raw:string,now=Date.now()):Attempt {
 const a=JSON.parse(raw) as Attempt;
 if(!a||a.schemaVersion!==1||a.assessmentVersion!==assessmentVersion||a.scoringVersion!==scoringVersion)throw new Error('This saved check uses an older version. Please start a fresh check.');
 if(typeof a.updatedAt!=='number'||!Number.isFinite(a.updatedAt)||now-a.updatedAt>expiry)throw new Error('Your saved check expired after seven days. Start a fresh check when you’re ready.');
 if(typeof a.id!=='string'||typeof a.startedAt!=='number'||!Number.isFinite(a.startedAt)||a.startedAt>a.updatedAt||a.updatedAt>now+60000||typeof a.repeatExposure!=='boolean'||!['goethe','osd','unsure'].includes(a.provider)||!['in-progress','submitted'].includes(a.status)||!Number.isInteger(a.currentQuestionIndex)||a.currentQuestionIndex<0||a.currentQuestionIndex>=questions.length||!a.responses||typeof a.responses!=='object'||Array.isArray(a.responses))throw new Error('We couldn’t restore this saved check. Please start again.');
 if(Object.entries(a.responses).some(([id,value])=>typeof value!=='string'||!validResponse(id,value)))throw new Error('The saved answers are not compatible. Please start a fresh check.');
 if(a.status==='submitted'&&(!complete(a.responses)||typeof a.submittedAt!=='number'||!Number.isFinite(a.submittedAt)||a.submittedAt<a.startedAt||a.submittedAt>a.updatedAt))throw new Error('The saved result is incomplete. Please start a fresh check.');
 return a;
}
