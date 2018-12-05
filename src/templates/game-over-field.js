import AFRAME from 'aframe';
import './button';

AFRAME.registerTemplate('game-over-field', `
    <a-sub-assets>
        <a-asset-item id="Roboto" src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json"></a-asset-item>
    </a-sub-assets>
    <a-entity 
        position="-2 2 -4" 
        material="color: red; roughness: 0.5; metalness: 0.6" 
        text-geometry="value: GAME OVER; font: #Roboto; align: center"></a-entity>
    <a-template name="button" options="text: START AGAIN; position: 0 1 -4; width: 2; event: start-game"></a-template>
`);