AFRAME.registerTemplate(
  'trash-bin',
  ({ type, position, scale = '1.5 1.5 1.5' }) => html`
    <a-entity
      id="trash-bin-${type}"
      position="${position}"
      trash-bin="type: ${type}"
      scale="${scale}"
    >
      <a-box
        class="left"
        static-body
        position="-0.12 0.03 0"
        width="0.01"
        height="0.7"
        depth="0.4"
        rotation="0 3 4"
        material="transparent: true; opacity: 0"
      ></a-box>
      <a-box
        class="right"
        static-body
        position="0.13 0.03 0"
        width="0.01"
        height="0.5"
        depth="0.25"
        rotation="0 3 -4"
        material="transparent: true; opacity: 0"
        scale="${scale}"
      ></a-box>
      <a-box
        class="forward"
        static-body
        position="0 0.03 0.13"
        width="0.25"
        height="0.47"
        depth="0.01"
        rotation="4 0 0"
        material="transparent: true; opacity: 0"
        scale="${scale}"
      ></a-box>
      <a-box
        class="forward"
        static-body
        position="0 0.03 0.13"
        width="0.25"
        height="0.5"
        depth="0.01"
        rotation="4 0 0"
        material="transparent: true; opacity: 0"
        scale="${scale}"
      ></a-box>
      <a-box
        class="back"
        static-body
        position="0 0.03 -0.13"
        width="0.25"
        height="0.47"
        depth="0.01"
        rotation="-4 0 0"
        material="transparent: true; opacity: 0"
        scale="${scale}"
      ></a-box>
      <a-box
        class="collider"
        trash-bin-collider
        static-body
        collision-filter="collisionForces: false"
        position="0 0 0"
        width="0.2"
        height="0.1"
        depth="0.2"
        color="red"
        trasnparent="true"
        opacity="0"
      >
      </a-box>
      <a-entity class="model" gltf-model="#trash-bin" material="color: red">
        <a-entity
          position="0 0.15 0.15"
          text="
                      align: center;
                      width: 1;
                      color: black;
                      value:${type.toUpperCase()};
                      font: https://cdn.aframe.io/fonts/Roboto-msdf.json"
        ></a-entity>
        <a-plane
          position="0 0 0.14"
          width="0.15"
          height="0.15"
          depth="0.15"
          color="#FFFFFF"
          src="#sign"
          material="repeat:1 1; transparent:true"
        ></a-plane>
      </a-entity>
    </a-entity>
  `,
);
