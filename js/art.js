import { el } from "./redom.js";

export default [
  el("div", [
    el("img.width", { src: "./art/AtNoon.jpg" }),
    el("p", "A Nap at Noon, Photography, 4608x2176, A study of how light interacts with scenery, and how clarity affects a composition"),
  ]),

  el("div", [
    el("img.width", { src: "./art/water-bubbles.jpg" }),
    el("p", "Liquid Dynamics Study, Photography, 3699x1747, A study in how liquid ineteracts with objects and with itself "),
  ]),

  el("div", [
    el("img.width", { src: "./art/Heaven.png" }),
    el("p", "Heaven, Digital Illustration, 5600x3150, A study in both background design, as well as how light interacts with said designs."),
  ]),

  el("div", [
    el("img.width", { src: "./art/CelestialMikaya.png" }),
    el("p", "Looking down from Heaven, Digital Illustration, 5600x3150,  A practice in how hair flows in windy condition, as well as how light interacts with translucent materials."),
  ]),

  el("div", [
    el("embed.width height", { src: "./art/bruh.pdf" }),
    el("p", "Bruh, Written Text, 3 pages, A study in close, platonic relationships, and how life in modern day affects ones psyche"),
  ]),

  el("div", [
    el("embed.width height", { src: "./art/INeverLeaveYouBehind.pdf" }),
    el("p", "I'll never leave you behind, Written Text, 3 pages, a study in feelings of love, and how to navigate unrequited feelings"),
  ]),

  el("div", [
    el("audio.width", {
      controls: "controls",
      src: "./art/ModernSoundscape.wav",
    }),
    el("p", "Modern Soundscape, Recorded and Edited Audio, 1:12, An attempt to capture the sounds of modern day America, and how we navigate through them."),
  ]),

  el("div", [
    el("audio.width", { controls: "controls", src: "./art/Piano.mp3" }),
    el("p", "Piano, Generated Audio, 1:46, A study in algorithm generated art, and how AI created art can influence art creation in the future."),
  ]),

  el("div", [
    el(
      "a",
      {
        href:
          "http://threejsplaygnd.brangerbriz.com/editor/#B/nVXbcts2EH22vwJxH0I3DCg5vnQk2TMZ27EzbS5jKaPpI0SsSDgkgAKgaSnjf+8CIKXIcV+qkcTF7uGexV6AyaurL5ezv79ek9LV1cX+JD72JiUwjs+9SQ2OkbxkxoI7P2jc8u0fB8Fg3aoCL+0tFF+RH17aW7D8e2FUI/nbXFXKjMhvy/AZB3PNTCHkiAziUj2AWVaqHZFScA4yaJ+886z3Psm6SCaexdMF7twI7Yg1+flB6ZweZZkrDcC91RVbFZLThWGyALMwYk0luOzeRgSthaT39uACKYKTi//t7woc5E6Z/3J3se+3I5YkIa/IBtzCoqjI4VbBOL8BN4fFzV+fwFpWQHIYEuF/D8yQnNVgWEpsDhJSYkByMGDGvb0AhUUyq5TUzIERrEIJbDkO/MtG5k4oSbB+jU4OsVAh9/7NOTknrZBctVRICWYuuCtTcvtMfQuiKF0sWc+OEAktmd3eXV/TEPxdZ+mi3yApEk/FGhIy9647K1d5U4N01JeVMq0RfVmKiiebDVKu6usKPMq/FV6Ludgh/wrGakyleIDLYE3IySAl8+w2JUP8DvDTs8bXqVZW+JzQNXo6GQw65yHBO76nXtNvaPuXZUQz64CsVIP1URzI0qiauBI21bj59pGUuI39pTLYAT7dAn0PxviYkHeDILx5Q3xBaqbRFCk/1tgB35yoLK0U4zN4dI2B5DWlmYvyOmtL4YDe6+I1htYT7gQ+U6axf0rlbjpr4lNxfEZPT1NylJJjXA3p8AwX9AhNp/T4FH31DbTjC7uy/KxMzapPnTn5YUvGhSxGHeRDxdw0qrBPBYfecKWaRQVT1KTE4QhZzbC8boSLBlVKs1y4FR4I9OzkyQeAXL+QJ792eIhV09YwPUV8L882abwDDczNUacxqIg2Qef7MQmdQTpCanNWAX30jrbL1e7St8qQvjseb1vFj27iIYfjp/14dO1MHDes3Q6cgX8asO69FLgJNH8w2IxJAJGfOyxwGuUCKAR1hZumUnlfv2OmsJ9Pxi9hVy9ijxC7i1u/hBs+b/JuViqlvr93YZubuenCxTGAR431CCPaClc+mwUrBQ62s5hH2cRp2D0aopD0R1s33d2wx2zGY8tLkTUmNSB+PnP9TRFvCLwx/B32Lw==",
      },
      el("button.button button3 width", "Link")
    ),
    el("p", "Cube, Remixed Code, A practice in how open source code and by extension, remix culture, affects art"),
  ]),

  el("div", [
    el(
      "a",
      { href: "https://skfb.ly/6HHyy" },
      el("button.button button3 width", "Link")
    ),
    el("p", "The CIA, Edited 3D Model, A practice in how one can use existing art assets to create a new piece of art with new meaning."),
  ]),
];
