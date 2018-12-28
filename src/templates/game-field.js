import AFRAME from 'aframe';

import '../components/countdown';
import '../components/game-field-manager';



AFRAME.registerTemplate('game-field', `
    <a-entity id="score" position="-2 2 -3" bind="text.value: score" text="anchor: left; width: 3; color: red; value:''"></a-entity>
    <a-entity game-field-manager></a-entity>
`);
