import AFRAME from 'aframe';
import './button';

AFRAME.registerTemplate('start-screen', `
    <a-sub-assets>
        <a-asset-item id="text" src="/assets/models/text.gltf"></a-asset-item>
    </a-sub-assets>
    <a-entity
            id="text"
            gltf-model="#text"
            position="2.1 0.4 -4"
    ></a-entity>
    <a-template name="button" options="text: START; position: 0 1 -4; event: start-game; color: #5e9696"></a-template>
`);
