// @vitest-environment happy-dom
import {act} from 'react';
import {createRoot} from 'react-dom/client';
import type {Root} from 'react-dom/client';
import {afterEach,beforeEach,describe,expect,it,vi} from 'vitest';
import {App} from './App';
import {questions} from './content';
import {storageKey,unknown} from './domain';

let root:Root;let host:HTMLDivElement;
const globals=globalThis as typeof globalThis & {IS_REACT_ACT_ENVIRONMENT:boolean};
globals.IS_REACT_ACT_ENVIRONMENT=true;
async function flush(){await new Promise(r=>setTimeout(r,0));}
async function click(button:HTMLElement){await act(async()=>{button.click();await flush();});}
function button(text:string){const b=Array.from(host.querySelectorAll<HTMLButtonElement>('button')).find(x=>x.textContent?.includes(text));if(!b)throw new Error(`Missing button: ${text}`);return b;}
async function mount(){await act(async()=>{root.render(<App/>);await flush();});}
beforeEach(async()=>{localStorage.clear();location.hash='/start';host=document.createElement('div');document.body.append(host);root=createRoot(host);vi.spyOn(window,'scrollTo').mockImplementation(()=>{});vi.spyOn(HTMLElement.prototype,'scrollIntoView').mockImplementation(()=>{});await flush();});
afterEach(async()=>{await act(async()=>{root.unmount();await flush();});host.remove();vi.restoreAllMocks();});
describe('learner workflow',()=>{
 it('starts without preselection, explains missing answers and preserves a selected response',async()=>{
  await mount();expect(host.textContent).toContain('Listening, writing and speaking are not assessed');await click(button('Start my check'));
  expect(host.querySelectorAll('input[name="V1"]:checked')).toHaveLength(0);
  await click(button('Next question'));expect(host.textContent).toContain('Choose an answer or');
  await click(host.querySelector<HTMLInputElement>(`input[value="${questions[0].correctOptionId}"]`)!);
  await click(button('Next question'));expect(host.textContent).toContain('Question 2 of 15');
  await click(button('Back'));expect(host.querySelector<HTMLInputElement>(`input[value="${questions[0].correctOptionId}"]`)?.checked).toBe(true);
  expect(JSON.parse(localStorage.getItem(storageKey)!).responses.V1).toBe(questions[0].correctOptionId);
 });
 it('completes all fifteen questions, reviews, freezes a result and restores it',async()=>{
  await mount();await click(button('Start my check'));
  for(const q of questions){await click(host.querySelector<HTMLInputElement>(`input[value="${q.correctOptionId}"]`)!);await click(button(q.id==='R5'?'Review answers':'Next question'));}
  expect(host.textContent).toContain('Ready for your results?');
  await click(button('See my results'));expect(host.textContent).toContain('Strong foundations');expect(host.textContent).toContain('15/15');expect(host.textContent).toContain('Keep your foundations fresh');expect(host.textContent).toContain('not a pass probability');
  const saved=JSON.parse(localStorage.getItem(storageKey)!);expect(saved.status).toBe('submitted');
  await click(button('Review my answers'));expect(host.querySelectorAll('.answer-review article')).toHaveLength(15);
  await act(async()=>{root.unmount();await flush();});root=createRoot(host);await mount();expect(host.textContent).toContain('Let’s look at your answers.');expect(JSON.parse(localStorage.getItem(storageKey)!)).toEqual(saved);
 });
 it('accepts honest unknowns and offers targeted steps instead of a pass claim',async()=>{
  await mount();await click(button('Start my check'));
  for(let i=0;i<15;i++){await click(host.querySelector<HTMLInputElement>(`input[value="${unknown}"]`)!);await click(button(i===14?'Review answers':'Next question'));}
  expect(host.textContent).toContain('15 marked');await click(button('See my results'));expect(host.textContent).toContain('Foundations need practice');expect(host.textContent).toContain('0/15');expect(host.querySelectorAll('.action-list>li')).toHaveLength(3);
 });
 it('recovers invalid saved data and guards direct result links',async()=>{
  localStorage.setItem(storageKey,'invalid json');location.hash='/results';await mount();expect(host.textContent).toContain('Start a check to see questions');expect(host.textContent).toContain('Start my check');
 });
});
