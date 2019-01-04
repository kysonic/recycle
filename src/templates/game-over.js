import AFRAME from 'aframe';
import './button';

AFRAME.registerTemplate('game-over', `
    <a-entity 
        position="-2.2 2 -4" 
        material="color: white;" 
        text-geometry="value: GAME OVER; font: #Roboto; align: center"></a-entity>
    <a-entity 
        position="-1.9 1.5 -4" 
        material="color: white;" 
        text-geometry="value: YOUR SCORE:; font: #Roboto; align: center; size: 0.3"></a-entity> 
    <a-entity 
        position="1 1.51 -4" 
        material="color: white;" 
        bind="text-geometry.value: score"
        text-geometry="value: 0; font: #Roboto; align: center; size: 0.3"></a-entity>   
    <a-plane
        position="-0.16 2.05 -4.5"
        width="4.75"
        height="1.25"
        depth="0.1"
        material="color: white; transparent: true; opacity: 0.2"
    >
    
    </a-plane>    
    <a-template name="button" options="text: RESTART; position: 0 0.8 -4; event: start-game; color: #FC342B"></a-template>
`);
