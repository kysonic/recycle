import AFRAME from 'aframe';

import '../systems/trash';
import '../components/trash';

AFRAME.registerTemplate('trash', ({id, type, position, color}) => `
    <a-entity id="trash-${id}"
              class="dnd"  
              trash="type: ${type}"
              gltf-model="#${type}"
              position="${position}"
              hoverable grabbable
              dynamic-body></a-entity>   
`);
