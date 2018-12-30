import AFRAME from 'aframe';

import '../components/countdown';
import '../components/game-field-manager';
import '../components/to-camera';

AFRAME.registerTemplate('game-field', `
    <a-entity id="scoreText" position="0 0 -2" text="align: center; width: 2; color: white; value: SCORES" to-camera></a-entity>
    <a-entity id="score" position="0 0 -2"  bind="text.value: score" text="align: center; width: 3; color: white; value:''" to-camera></a-entity>
    
    <a-template name="button" options="text: EXIT; position: 0 1 4; rotation: 0 180 0; event: stop-game"></a-template>
        
    <a-entity game-field-manager></a-entity>
`);
