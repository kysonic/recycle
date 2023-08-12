AFRAME.registerTemplate(
  'lights',
  () => html`
    <a-entity light="type: ambient; intensity: 0.7;"></a-entity>
    <a-entity
      light="type: directional; castShadow: false; intensity: 0.2;"
      position="-10 8 10"
    ></a-entity>
    <a-entity
      light="type: point; castShadow: false; intensity: 0.5;"
      position="0 0 5"
    ></a-entity>
  `,
);
