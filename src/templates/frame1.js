import AFRAME from 'AFRAME';

AFRAME.registerTemplate('frame1', `
    
    <!-- Trash bins -->
    <a-template id="trash-bin" options="position: 0 0 -2; type: glass"></a-template>
    <a-template id="trash-bin" options="position: -1 0 -2; type: plastic"></a-template>
    <a-template id="trash-bin" options="position: 1 0 -2; type: can"></a-template>
    <!-- Trash bins -->
`)
