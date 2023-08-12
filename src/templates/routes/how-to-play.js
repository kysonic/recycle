AFRAME.registerTemplate(
  'how-to-play',
  html`
    <a-entity how-to-play>
      <a-plane
        id="hot-to-plane"
        position="0 2.5 -4"
        width="5"
        height="3"
        material="transparent: true;"
        src="#hdst"
      ></a-plane>
    </a-entity>
    <a-template
      name="button"
      options="text: BACK; position: 2 0.5 -4; event: back; color: #5e9696"
    ></a-template>
  `,
);
