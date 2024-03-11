// @refresh reload

import { createSignal } from "solid-js";

// 1 2 3 4 5 
// 7 9 11 13 15 
// 21 27 33 39 45 
// 60 75 90 105 120 
// 159 198 237 276 315 
// 412 509 606 703 800 

export default function ProblemList(props) {
    console.log(props.problems)
  return (
    <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-6 w-full overflow-y-scroll h-full">
        <For each={props.problems}>
          { (prob) => <Problem {...prob} /> }
        </For>
    </div>
  );
}

function Problem(props) {
    const [tier, setTier] = createSignal('bg-[#000]');
    if(props.level==0) setTier('bg-gray-900 text-red-500')
    else if(props.level<7) setTier('bg-[#c67739]')
    else if(props.level<21) setTier('bg-[#4e6a86]')
    else if(props.level<60) setTier('bg-[#ffb028]')
    else if(props.level<159) setTier('bg-[#51fdbd]')
    else if(props.level<412) setTier('bg-[#2bbfff]')
    else if(props.level<801) setTier('bg-[#ff3071]')
    const link="https://boj.kr/"+props.id;
    return (
        <a href={link}>
            <div class={tier()}>
                {props.id} : {props.title} {"\t"} {props.level}
            </div>
        </a>
    )
}
