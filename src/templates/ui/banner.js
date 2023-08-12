AFRAME.registerTemplate(
  'banner',
  () => html`
    <a-entity id="banner">
      <a-entity
        id="bannerModel"
        gltf-model="#banner"
        scale="2.5 2.5 2.5"
        position="-0.3 3.5 -10"
      >
      </a-entity>
      <a-plane
        width="0.8"
        height="0.8"
        depth="0.15"
        color="#FFFFFF"
        src="#trashman"
        position="-6 5.4 -10"
        material="repeat:1 1; transparent:true"
      ></a-plane>

      <a-entity
        id="score"
        position="-0.6 5.38 -10"
        bind="text.value: score"
        text="align: left; width: 10; color: #00A105;"
      ></a-entity>

      <a-plane
        width="0.8"
        height="0.8"
        depth="0.15"
        color="#FFFFFF"
        src="#heart"
        position="5.3 5.4 -10"
        material="repeat:1 1; transparent:true"
      ></a-plane>
      <a-entity
        id="lives"
        position="-0.3 5.38 -10"
        bind="text.value: lives"
        text="align: right; width: 10; color: #C06060;"
      ></a-entity>

      <a-entity
        id="recycleText"
        position="-0.2 5.6 -10"
        text="align: center; width: 9; color: #4C4C4C; value: RECYCLING"
      ></a-entity>
      <a-entity
        id="marathonText"
        position="-0.2 5.2 -10"
        text="align: center; width: 10; color: #4C4C4C; value: MARATHON"
      ></a-entity>
    </a-entity>
  `,
);
