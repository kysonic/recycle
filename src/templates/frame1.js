import AFRAME from 'AFRAME';

import '../components/game';
import '../components/countdown';

const COUNTDOWN_TEXT = ['READY', '3', '2', '1', 'Recycle!'];

AFRAME.registerTemplate('frame1', `
    <a-entity position="0 2 -2" countdown="text: ${COUNTDOWN_TEXT}; interval: 1000"></a-entity>    
    <!-- Trash bins -->
    <a-template id="trash-bin" options="position: 0 0 -2; type: glass"></a-template>
    <a-template id="trash-bin" options="position: -1 0 -2; type: plastic"></a-template>
    <a-template id="trash-bin" options="position: 1 0 -2; type: can"></a-template>
    <!-- Trash bins -->
    
    
    <!-- Game controller -->
    <a-entity game></a-entity>
`);
