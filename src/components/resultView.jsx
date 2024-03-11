// @refresh reload
import { createSignal, Suspense, createEffect, Show, children, createResource } from "solid-js";
import Loader from "./loader";
import { getPokerResult } from "../api";
import clickOutside from "./click-outside";
import './comp.css'
import ProblemList from "./problem-list";
import { Portal } from "solid-js/web";

export default function ResultView(props) {
  const [pokerId, setPokerId] = createSignal('recent');
  const [poker] = createResource(pokerId, getPokerResult);
  createEffect(() => setPokerId(props.id));
  
  return (
    <div class="result-view grid md:grid-cols-3 xl:grid-cols-4 gap-6 w-full p-6">
      <Suspense fallback={<Loader />}>
        <For each={Object.keys(poker()===undefined?{}:poker())}>
          { (participants) => <Profile {...poker()[participants]} /> }
        </For>
      </Suspense>
    </div>
  );
}

function Modal(props) {
  const [show, setShow] = createSignal(false);
  const chd = children(() => props.children);
  return (
    <>
      <Show when={show()} fallback={<button onClick={(e) => setShow(true)}>{chd()}</button>} >
	  <Portal>
        <div class="background"></div>
        <div class="modal" use:clickOutside={() => setShow(false)}>
            <ProblemList {...props} />
        </div>
	  </Portal>
      </Show>
    </>
  );
}

function Profile(props) {
  return (
    <>
    <Modal {...props}>
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm cursor-pointer" data-v0-t="card">
        <div class="p-6 flex flex-col items-center">
          <img
            src={props.profileImage}
            width="150"
            height="150"
            alt="User 1"
            class="rounded-full border-2 border-gray-100"
            style="aspect-ratio: 150 / 150; object-fit: cover;"
          />
          <div class="flex">
            <h2 class="text-lg font-semibold pr-2">{props.handle}</h2>  
            <Show when={props.goal<=props.point}>
                <img width='30' height='30' src="https://static.solved.ac/logo.svg" />
            </Show>
          </div>
        </div>
        <div class="items-center px-6 pb-6 flex justify-between">
          <div class="flex flex-col text-sm">
            <span class="font-semibold">Points</span>
            <span class="text-sm text-gray-500 dark:text-gray-400">{props.point}</span>
          </div>
          <div class="flex flex-col text-sm">
            <span class="font-semibold">Goal</span>
            <span class="text-sm text-gray-500 dark:text-gray-400">{props.goal}</span>
          </div>
        </div>
      </div>
    </Modal>
    </>
  )
}
