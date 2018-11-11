import AFRAME from 'AFRAME';

import '../components/countdown';
import '../components/game-field-manager';

const COUNTDOWN_TEXT = ['READY', 'STEADY', 'RECYCLE!'];

AFRAME.registerTemplate('game-field', `
    <!-- Text -->
    <a-entity position="-2 2 -3" bind="text.value: score" text="anchor: left; width: 3; color: red; value:''"></a-entity>
    <a-entity position="0 2 -2" countdown="text: ${COUNTDOWN_TEXT}; interval: 1000"></a-entity>   
    <!-- End Text -->
    
    <a-entity game-field-manager></a-entity>
`);
