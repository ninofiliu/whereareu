export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const randRange = (from: number, to: number) =>
  from + (to - from) * Math.random();

export const randInt = (from: number, to: number) =>
  Math.floor(randRange(from, to));

export const randPick = <T>(arr: T[]) => arr[randInt(0, arr.length)];

export const randColor = () =>
  `#${Math.random().toString(16).substring(2, 8).padEnd(6, "0")}`;

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
