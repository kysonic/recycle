import AFRAME from 'aframe';
import './button';

AFRAME.registerTemplate('start-screen', `
    <a-sub-assets>
        <a-asset-item id="Roboto" src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json"></a-asset-item>
    </a-sub-assets>
    <a-entity 
        position="-1.5 2 -4" 
        material="color: red;" 
        text-geometry="value: RECYCLE!; font: #Roboto; align: center"></a-entity>
    <a-template name="button" options="text: START; position: 0 1 -4; event: start-game"></a-template>
`);
