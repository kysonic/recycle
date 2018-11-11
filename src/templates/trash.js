import AFRAME from 'AFRAME';

import '../systems/trash';
import '../components/trash';

AFRAME.registerTemplate('trash', ({id, type, color}) => `
    <a-entity id="trash-${id}"
              class="dnd"  
              trash="type: ${type}"
              geometry="primitive: box; width: 0.2; height: 0.2; depth: 0.2;"
              material="color: ${color}"
              position="0 1 -1.5"
              hoverable grabbable draggable
              dynamic-body
              event-set__hoveron="_event: hover-start; material.opacity: 0.7; transparent: true;"
              event-set__hoveroff="_event: hover-end; material.opacity: 1; transparent: false"
              shadow></a-entity>   
`);
