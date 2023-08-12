AFRAME.registerTemplate(
  'sounds',
  () => html`
    <a-sound
      src="#backgroundSound"
      autoplay="true"
      position="0 4 0"
      volume="0.1"
      loop="true"
    ></a-sound>
    <a-sound
      id="gameFieldSound"
      src="#levelUp"
      volume="0.1"
      poolSize="10"
    ></a-sound>
  `,
);
