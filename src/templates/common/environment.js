AFRAME.registerTemplate(
  'environment',
  () => html`
    <a-entity id="scene" gltf-model="#scene" loading></a-entity>
    <a-box
      id="floor"
      static-body
      floor-collider
      width="100"
      height="1"
      depth="100"
      position="0 -0.42 0"
      visible="false"
      material="color:#ccc"
      shadow="receive: true; cast: false;"
    ></a-box>
    <!-- <a-box sound="src: #glassCollide; volume: 0.1; on: floor-collided"></a-box> -->
    <a-sky color="#ABFFFF" src="#clouds"></a-sky>
  `,
);
