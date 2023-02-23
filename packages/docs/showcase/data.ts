const data: Array<{
  repo: string;
  title: string;
  desc: string;
  thumb?: string;
  type?: "reactive" | "dom";
  corePath?: string;
  reactPath?: string;
  vue2Path?: string;
  vue3Path?: string;
  sveltePath?: string;
}> = [
  {
    repo: "egjs-conveyer",
    title: "Conveyer",
    desc: "Drag gestures to your Native Scroll.",
    thumb: "conveyer.png",
    type: "reactive",
    corePath: "main/packages/conveyer/src/reactive.ts",
    reactPath: "main/packages/react-conveyer/src/react-conveyer/useConveyer.ts",
    vue2Path: "main/packages/vue2-conveyer/src/useConveyer.ts",
    vue3Path: "main/packages/vue-conveyer/src/vue-conveyer/useConveyer.ts",
    sveltePath: "main/packages/svelte-conveyer/src/svelte-conveyer/useConveyer.ts",
  },
  {
    repo: "egjs-imready",
    title: "ImReady",
    desc: "I'm Ready to check if the images or videos are loaded.",
    thumb: "imready.png",
    type: "reactive",
    corePath: "main/packages/imready/src/reactive.ts",
    reactPath: "main/packages/react-imready/src/react-imready/useImReady.ts",
    vue2Path: "main/packages/vue2-imready/src/useImReady.ts",
    vue3Path: "main/packages/vue-imready/src/vue-imready/useImReady.ts",
    sveltePath: "main/packages/svelte-imready/src/svelte-imready/useImReady.ts",
  },
  {
    repo: "egjs-axes",
    title: "Axes",
    desc: "You can easily create a UI that responds to user actions.",
    thumb: "axes.png",
    type: "reactive",
    corePath: "master/packages/axes/src/reactive.ts",
    reactPath: "master/packages/react-axes/src/react-axes/useAxes.ts",
    vue2Path: "master/packages/vue2-axes/src/useAxes.ts",
    vue3Path: "master/packages/vue-axes/src/vue-axes/useAxes.ts",
    sveltePath: "master/packages/svelte-axes/src/svelte-axes/useAxes.ts",
  },
  {
    repo: "egjs-flicking",
    title: "Flicking",
    desc: "It's reliable, flexible and extendable carousel.",
    thumb: "flicking.png",
    type: "dom",
  },
  {
    repo: "egjs-infinitegrid",
    title: "InfiniteGrid",
    desc: "Arrange elements including content infinitely according to grid type.",
    thumb: "infinitegrid.png",
    type: "dom",
  },
  {
    repo: "egjs-grid",
    title: "Grid",
    desc: "Arrange items according to the type of grids.",
    thumb: "grid.png",
    type: "dom",
  },
  {
    repo: "egjs-view360",
    title: "View 360",
    desc: "360° panorama image / video viewer.",
    thumb: "view360.png",
    type: "dom",
  },
  {
    repo: "egjs-view3d",
    title: "View 3D",
    desc: "Fast & Customizable glTF 3D model viewer.",
    thumb: "view3d.png",
    type: "dom",
  },
];

export default data;
