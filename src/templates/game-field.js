import AFRAME from 'aframe';

import '../components/countdown';
import '../components/game-field-manager';

const COUNTDOWN_TEXT = ['READY', 'STEADY', 'RECYCLE!'];

AFRAME.registerTemplate('game-field', `
    <!-- Text -->
    <a-entity id="score" position="-2 2 -3" bind="text.value: score" text="anchor: left; width: 3; color: red; value:''"></a-entity>
    <a-entity id="hitPoints" position="2 2 -3" bind="text.value: hitPoints" text="anchor: left; width: 3; color: blue; value:''"></a-entity>
    <a-entity id="countdown" position="0 1.5 -2" countdown="text: ${COUNTDOWN_TEXT}; interval: 1000"></a-entity>   
    <!-- End Text -->
    
    <a-entity game-field-manager></a-entity>
`);
