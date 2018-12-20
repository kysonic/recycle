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
              dynamic-body
              event-set__hoveron="_event: hover-start; material.opacity: 0.7; transparent: true;"
              event-set__hoveroff="_event: hover-end; material.opacity: 1; transparent: false"></a-entity>   
`);
