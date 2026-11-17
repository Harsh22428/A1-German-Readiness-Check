import { describe, expect, it } from 'vitest';
import {areas,questions} from './content';
import {complete,expiry,finishAttempt,newAttempt,parseAttempt,recommendations,score,unknown,updateAttempt} from './domain';
import type {Responses} from './domain';
function answers(counts:number[]):Responses{const r:Responses={};areas.forEach((area,i)=>questions.filter(q=>q.area===area).forEach((q,j)=>{r[q.id]=j<counts[i]?q.correctOptionId:unknown;}));return r;}
describe('assessment content integrity',()=>{
 it('has fifteen original keyed questions and balanced coverage',()=>{expect(questions).toHaveLength(15);expect(new Set(questions.map(q=>q.id)).size).toBe(15);for(const a of areas)expect(questions.filter(q=>q.area===a)).toHaveLength(5);for(const q of questions){expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.id)).size).toBe(4);expect(q.options.some(o=>o.id===q.correctOptionId)).toBe(true);expect(q.explanation.length).toBeGreaterThan(20);expect(q.reviewStatus).toBe('author-checked');}});
});
describe('foundation bands',()=>{
 it.each([{counts:[5,5,5],band:'strong',total:15},{counts:[4,4,4],band:'strong',total:12},{counts:[5,5,3],band:'developing',total:13},{counts:[3,3,3],band:'developing',total:9},{counts:[5,5,2],band:'practice',total:12},{counts:[0,0,0],band:'practice',total:0}])('scores $counts as $band',({counts,band,total})=>{expect(score(answers(counts))).toMatchObject({band,total});});
 it('rejects incomplete and invalid answers',()=>{expect(complete({})).toBe(false);expect(()=>score({})).toThrow();const r=answers([5,5,5]);r.V1='bad-option';expect(()=>score(r)).toThrow();});
 it('classifies every valid area-count profile with the area floor',()=>{for(let v=0;v<=5;v++)for(let g=0;g<=5;g++)for(let r=0;r<=5;r++){const result=score(answers([v,g,r]));expect(result.total).toBe(v+g+r);expect(result.band).toBe(Math.min(v,g,r)>=4?'strong':Math.min(v,g,r)>=3?'developing':'practice');}});
});
describe('actionable recommendations',()=>{
 it('prioritises weak areas, uses stable tie breaks and includes full assessment',()=>{const r=recommendations(answers([3,1,1]));expect(r.map(x=>x.id)).toEqual(['practice-grammar','practice-reading','full-mock']);expect(r[0].topics).toHaveLength(2);});
 it('never invents a weakness for a perfect result',()=>{const r=recommendations(answers([5,5,5]));expect(r.map(x=>x.id)).toEqual(['maintain','full-mock']);expect(r[0].area).toBeUndefined();});
 it('gives exactly two or three actions for all profiles',()=>{for(let v=0;v<=5;v++)for(let g=0;g<=5;g++)for(let r=0;r<=5;r++){const a=recommendations(answers([v,g,r]));expect(a.length).toBeGreaterThanOrEqual(2);expect(a.length).toBeLessThanOrEqual(3);expect(a.at(-1)?.id).toBe('full-mock');}});
});
describe('saved attempts',()=>{
 it('round-trips a valid attempt and freezes a submitted response set',()=>{const a=newAttempt('osd',false);expect(parseAttempt(JSON.stringify(a))).toEqual(a);const b={...a,responses:answers([4,4,4]),status:'submitted',submittedAt:a.updatedAt};expect(parseAttempt(JSON.stringify(b)).responses).toEqual(b.responses);});
 it('rejects old versions, expired data, invalid indices and incomplete results',()=>{const a=newAttempt('goethe',false);for(const bad of [{...a,assessmentVersion:'old'},{...a,updatedAt:Date.now()-expiry-10},{...a,currentQuestionIndex:0.5},{...a,status:'submitted',submittedAt:Date.now()},{...a,responses:{V1:'bad'}}])expect(()=>parseAttempt(JSON.stringify(bad))).toThrow();});
 it('rejects corrupt JSON',()=>{expect(()=>parseAttempt('not json')).toThrow();});
 it('keeps submitted answers frozen and submission idempotent',()=>{const a={...newAttempt('goethe',false),responses:answers([4,4,4])};const done=finishAttempt(a);expect(finishAttempt(done)).toBe(done);expect(updateAttempt(done,{responses:{}})).toBe(done);expect(a.status).toBe('in-progress');expect(()=>finishAttempt(newAttempt('unsure',false))).toThrow();});
});
