import AFRAME from 'aframe';
import './button';

AFRAME.registerTemplate('game-over', `
    <a-entity 
        position="-2.2 2 -4" 
        material="color: #90dfdf;" 
        text-geometry="value: GAME OVER; font: #Roboto; align: center"></a-entity>
    <a-entity 
        position="-1.9 1.5 -4" 
        material="color: #90dfdf;" 
        text-geometry="value: YOUR SCORE:; font: #Roboto; align: center; size: 0.3"></a-entity> 
    <a-entity 
        position="1 1.51 -4" 
        material="color: #90dfdf;" 
        bind="text-geometry.value: score"
        text-geometry="value: 0; font: #Roboto; align: center; size: 0.3"></a-entity>   
    
    </a-plane>    
    <a-template name="button" options="text: RESTART; position: 0 0.8 -4; event: start-game; color: #5e9696; width: 1.3"></a-template>
`);
