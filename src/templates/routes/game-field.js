AFRAME.registerTemplate(
  'game-field',
  html`   
    <a-template
      name="button"
      options="text: EXIT; position: 0 1 4; rotation: 0 180 0; event: stop-game"
    ></a-template>
    <a-entity
      id="indicator"
      indicator
      visible="false"
      position="0 1 -2"
      text="align: center; width: 4; color: #00A105; value: -1"
    ></a-entity>
    <a-entity game-field-manager></a-entity>
  `,
);
