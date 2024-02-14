// @refresh reload
import { createSignal, Show, Switch, Match, onMount, createResource } from "solid-js";
import clickOutside from "./click-outside";
import './comp.css'

export default function AddPokerModal() {
  const [show, setShow] = createSignal(false);
  return (
    <>
      <Show when={show()} fallback={<button class="sticky bottom-4 left-4 border rounded-md w-44 h-12" onClick={(e) => setShow(true)}>Add Poker</button>} >
        <div class="background"></div>
        <div class="modal" use:clickOutside={() => setShow(false)}>
            추가 예정
        </div>
      </Show>
    </>
  );
}