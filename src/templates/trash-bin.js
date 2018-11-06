import AFRAME from 'AFRAME';

import '../systems/trash-bin';

import '../components/trash-bin';
import '../components/trash-bin-collider';


AFRAME.registerTemplate('trash-bin', ({position, type}) => `
    <a-entity id="trash-bin-${type}" position="${position}" trash-bin>
        <a-box id="left" static-body shadow="receive: false" position="-0.25 0 0" width="0.01" height="1" depth="0.5"></a-box>
        <a-box id="right" static-body  shadow="receive: false" position="0.25 0 0" width="0.01" height="1" depth="0.5"></a-box>
        <a-box id="forward" static-body shadow="receive: false"  position="0 0 -0.25" width="0.5" height="1" depth="0.01"></a-box>
        <a-box id="back" static-body shadow="receive: false"  position="0 0 0.25" width="0.5" height="1" depth="0.01"></a-box>
        <a-box id="collider" 
               trash-bin-collider
               static-body 
               collision-filter="collisionForces: false"
               position="0 0 0" 
               width="0.45"
               height="0.3"
               depth="0.45"
               color="red"
               trasnparent="true"
               opacity="0.2">
        </a-box>
    </a-entity>    
`);
