AFRAME.registerTemplate(
  'assets',
  () => html`
    <a-sub-assets>
      <!-- Global -->
      <a-asset-item id="scene" src="/assets/models/scene.gltf"></a-asset-item>
      <img id="clouds" src="/assets/img/clouds.png" />
      <a-asset-item
        id="Roboto"
        src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json"
      ></a-asset-item>
      <audio
        id="backgroundSound"
        src="/assets/sounds/suburb.wav"
        preload
      ></audio>
      <audio id="click" src="/assets/sounds/click.wav" preload></audio>
      <!-- Global -->
      <!-- Start Screen -->
      <a-asset-item id="text" src="/assets/models/text.gltf"></a-asset-item>
      <!-- Start Screen -->
      <!-- Game Field -->
      <audio id="glassHit" src="/assets/sounds/glass-hit.wav" preload></audio>
      <audio
        id="plasticHit"
        src="/assets/sounds/plastic-hit.wav"
        preload
      ></audio>
      <audio id="metalHit" src="/assets/sounds/metal-hit.wav" preload></audio>
      <audio
        id="organicHit"
        src="/assets/sounds/plastic-hit.wav"
        preload
      ></audio>
      <audio id="paperHit" src="/assets/sounds/plastic-hit.wav" preload></audio>
      <audio id="levelUp" src="/assets/sounds/level-up.wav" preload></audio>
      <audio id="fail" src="/assets/sounds/fail.wav" preload></audio>
      <a-asset-item
        id="glass"
        src="/assets/models/glass_bottle.gltf"
      ></a-asset-item>
      <a-asset-item id="metal" src="/assets/models/can.gltf"></a-asset-item>
      <a-asset-item
        id="plastic"
        src="/assets/models/plastic_canister.gltf"
      ></a-asset-item>
      <a-asset-item id="organic" src="/assets/models/apple.gltf"></a-asset-item>
      <a-asset-item
        id="paper"
        src="/assets/models/carton_box.gltf"
      ></a-asset-item>
      <a-asset-item
        id="trash-bin"
        src="/assets/models/trash_bin.gltf"
      ></a-asset-item>
      <a-asset-item id="banner" src="/assets/models/banner.gltf"></a-asset-item>
      <img id="sign" src="/assets/img/recycle-sign.png" />
      <img id="heart" src="/assets/img/heart.jpg" />
      <img id="trashman" src="/assets/img/trashman.jpg" />
      <!-- Game Field -->
      <!-- How To Play -->
      <img id="dsktp" src="/assets/img/controls-dsktp.png" />
      <img id="hdst" src="/assets/img/controls-hdst.png" />
      <!-- How To Play -->
    </a-sub-assets>
  `,
);
