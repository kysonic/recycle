AFRAME.registerTemplate(
  'game-over',
  html`
    <a-text
      position="0 2 -4"
      scale="2 2 2"
      align="center"
      value="GAME OVER"
      color="white"
      material="color: white;"
    ></a-text>
    <a-text
      position="-0.5 1.6 -4"
      scale="1 1 1"
      align="center"
      value="YOUR SCORE: "
      color="white"
      material="color: white;"
    ></a-text>
    <a-text
      position="0.5 1.6 -4"
      scale="1 1 1"
      align="center"
      bind="text.value: score"
      color="white"
      material="color: white;"
    ></a-text>
    <a-template
      name="button"
      options="text: RESTART; position: 0 0.8 -4; event: start-game; color: #5e9696; width: 1.3"
    ></a-template>
  `,
);
