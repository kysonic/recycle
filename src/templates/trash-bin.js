import AFRAME from 'AFRAME';

import '../systems/trash-bin';

import '../components/trash-bin';
import '../components/trash-bin-collider';


AFRAME.registerTemplate('trash-bin', ({type, position, color}) => `
    <a-entity id="trash-bin-${type}" position="${position}" trash-bin="type: ${type}" >
        <a-box class="left" static-body shadow="receive: false" position="-0.25 0 0" width="0.01" height="1" depth="0.5" material="color: ${color}"></a-box>
        <a-box class="right" static-body  shadow="receive: false" position="0.25 0 0" width="0.01" height="1" depth="0.5" material="color: ${color}"></a-box>
        <a-box class="forward" static-body shadow="receive: false"  position="0 0 -0.25" width="0.5" height="1" depth="0.01" material="color: ${color}"></a-box>
        <a-box class="back" static-body shadow="receive: false"  position="0 0 0.25" width="0.5" height="1" depth="0.01" material="color: ${color}"></a-box>
        <a-box class="collider" 
               trash-bin-collider
               static-body 
               collision-filter="collisionForces: false"
               position="0 0 0" 
               width="0.4"
               height="0.4"
               depth="0.5"
               color="red"
               trasnparent="true"
               opacity="0">
        </a-box>
    </a-entity>    
`);
