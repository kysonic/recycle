import AFRAME from 'aframe';

import '../components/countdown';
import '../components/game-field-manager';
import '../components/to-camera';
import '../components/indicator';

AFRAME.registerTemplate('game-field', `
    <a-sub-assets>
        <a-asset-item id="glass" src="/assets/models/glass_bottle.gltf"></a-asset-item>
        <a-asset-item id="metal" src="/assets/models/can.gltf"></a-asset-item>
        <a-asset-item id="plastic" src="/assets/models/plastic_canister.gltf"></a-asset-item>
        <a-asset-item id="organic" src="/assets/models/apple.gltf"></a-asset-item>
        <a-asset-item id="paper" src="/assets/models/carton_box.gltf"></a-asset-item>
        <a-asset-item id="trash-bin" src="/assets/models/trash_bin.gltf"></a-asset-item>
    </a-sub-assets>
    
    <a-template name="button" options="text: EXIT; position: 0 1 4; rotation: 0 180 0; event: stop-game"></a-template>   
    <a-entity id="indicator" 
              indicator
              visible="false"
              position="0 1 -2" 
              text="align: center; width: 4; color: #00A105; value: -1"
              ></a-entity>  
    <a-entity game-field-manager></a-entity>
`);
