// @refresh reload
import { createSignal, Suspense, createResource, Match, onMount } from "solid-js";
import Loader from "./loader";
import { getPokerList } from "../api";
import "./app.css";

export default function SideNav() {
  const [tab, setTab] = createSignal(0);
  const updateTab = (index) => () => setTab(index);
  const [pokerList] = createResource(getPokerList);

  return (
    <div class="side-nav">
      <Logo />
      <Suspense fallback={<Loader />}>
        <ul class="poker-list">
          <For each={pokerList()}>{(pokerList) => {
            if(tab() === 0) setTab(pokerList.id)
            return (
              <li key={pokerList.id} classList={{ selected: tab() === pokerList.id }} onClick={updateTab(pokerList.id)}>
                {pokerList.name}
              </li>
            )
          }
          }</For>
        </ul>
      </Suspense>
    </div>
  );
}

function Logo() {
  return (
    <div class="logo">
      <Icon />
      <div class="title">Code Poker</div>
    </div>
  )
}

function Icon() {
  return (
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g id="_x31_0_x2C__Ace_Of_Spades_x2C__Poker_x2C__Casino_x2C__Gambler_x2C__Gambling_x2C__Cards_x2C__Shapes_x2C__Bet"><g><path style="fill:#FFFFFF;" d="M421,41v430c0,16.57-13.43,30-30,30H121c-16.57,0-30-13.43-30-30V41c0-16.57,13.43-30,30-30h270    C407.57,11,421,24.43,421,41z"/><path style="fill:#FFFFFF;" d="M375.84,402.59c7.31,8.75,6.85,21.8-1.37,30.02c-4.35,4.35-10.06,6.53-15.76,6.53    c-5.1,0-10.19-1.74-14.33-5.22c-8.76,7.37-21.85,6.93-30.09-1.31c-4.35-4.35-6.53-10.05-6.53-15.76c0-5.07,1.72-10.14,5.17-14.26    c0.42-0.52,0.88-1.02,1.36-1.5L344.38,371l30.09,30.09C374.95,401.57,375.41,402.07,375.84,402.59z"/><path style="fill:#FFFFFF;" d="M199.08,82.59c7.31,8.75,6.85,21.8-1.37,30.02c-4.35,4.35-10.06,6.53-15.76,6.53    c-5.1,0-10.2-1.74-14.33-5.22c-8.76,7.37-21.85,6.93-30.09-1.31c-4.35-4.35-6.53-10.05-6.53-15.76c0-5.07,1.72-10.14,5.16-14.26    c0.43-0.52,0.89-1.02,1.37-1.5L167.62,51l30.09,30.09C198.19,81.57,198.65,82.07,199.08,82.59z"/><path style="fill:#000;" d="M333.62,230.19c18.04,21.61,16.92,53.8-3.37,74.09c-10.74,10.74-24.82,16.11-38.89,16.11    c-12.58,0-25.16-4.29-35.36-12.87c-21.61,18.18-53.91,17.1-74.25-3.24c-10.74-10.74-16.11-24.81-16.11-38.89    c0-12.52,4.25-25.03,12.74-35.2c1.05-1.27,2.18-2.5,3.37-3.69L256,152.25l74.25,74.25C331.44,227.69,332.57,228.92,333.62,230.19z    "/><g><path style="fill:#000;" d="M391,1H121C98.944,1,81,18.944,81,41v430c0,22.056,17.944,40,40,40h270c22.056,0,40-17.944,40-40     V41C431,18.944,413.056,1,391,1z M411,471c0,11.028-8.972,20-20,20H121c-11.028,0-20-8.972-20-20V41c0-11.028,8.972-20,20-20h270     c11.028,0,20,8.972,20,20V471z"/><path style="fill:#000;" d="M306.001,359.75c0-5.523-4.478-10-10-10h-30v-24.514c23.538,9.96,51.868,5.567,71.321-13.885     c23.848-23.848,25.414-61.889,4.007-87.532c-3.339-4.039-1.389-1.644-78.257-78.64c-3.906-3.905-10.236-3.905-14.143,0     l-74.248,74.249c-25.214,25.197-25.561,66.365-0.002,91.923c19.195,19.196,47.568,23.965,71.321,13.903v24.496h-30.002     c-5.522,0-10,4.477-10,10s4.478,10,10,10c25.424,0,54.577,0,80.002,0C301.523,369.75,306.001,365.273,306.001,359.75z      M188.822,297.208c-16.826-16.825-17.331-43.163-2.733-60.647c2.191-2.649-0.735,0.566,69.912-70.169l67.181,67.18     c17.694,17.703,17.69,45.944-0.002,63.636c-16.223,16.224-42.263,17.926-60.784,2.626c-3.635-3.033-9.056-3.132-12.832,0.033     C231.875,314.748,205.194,313.581,188.822,297.208z"/><path style="fill:#000;" d="M157.619,141c0,5.523,4.478,10,10,10s10-4.477,10-10v-12.164     c28.999,3.932,48.061-29.987,29.168-52.616c-1.631-1.977-0.303-0.432-32.097-32.292c-3.906-3.905-10.236-3.905-14.143,0     c-31.606,31.673-30.447,30.298-32.062,32.249c-10.512,12.591-10.044,31.491,1.971,43.505c7.303,7.302,17.466,10.373,27.162,9.095     V141z M141,96.851c0-3.157,1.227-6.313,3.6-8.689l23.02-23.02l23.02,23.02c7.644,7.63,2.281,20.979-8.689,20.979     c-2.803,0-5.553-0.931-7.93-2.896c-3.74-3.121-9.158-3.055-12.837,0.029C153.335,112.876,141,107.358,141,96.851z"/><path style="fill:#000;" d="M351.453,363.929c-3.89-3.889-10.225-3.916-14.143,0c-31.767,31.833-30.477,30.327-32.061,32.248     c-10.515,12.592-10.043,31.494,1.97,43.506c7.303,7.303,17.466,10.372,27.162,9.095V461c0,5.523,4.478,10,10,10s10-4.477,10-10     v-12.806c10.714,0.551,22.586-3.937,27.161-8.511c12.691-12.692,12.703-32.951,0-45.663L351.453,363.929z M367.4,425.54     c-4.382,4.383-11.488,4.945-16.619,0.704c-3.653-3.049-9.063-3.115-12.798-0.002c-5.105,4.238-12.3,3.619-16.623-0.702     c-4.548-4.549-4.783-11.726-0.724-16.588c0.577-0.698-0.461,0.418,23.744-23.81c24.298,24.322,23.133,23.072,23.779,23.852     C372.188,413.819,371.854,421.086,367.4,425.54z"/></g></g></g><g id="Layer_1"/></svg>
    </div>
  );
}