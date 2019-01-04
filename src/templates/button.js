import AFRAME from 'aframe';

AFRAME.registerTemplate('button', ({text='BUTTON', position='0 1 -2', rotation='0 0 0', event, color='red', textColor='white'}) => `
    <a-text position="${position}"
            rotation="${rotation}"
            align="center"
            value="${text}" 
            color="white"
            side="double"
            material="color: ${textColor};" 
            anime__down="property: scale; easing: easeInSine; from: 1 1 1; dur: 100; to: 0.9 0.9 0.9; startEvents: button-animation-down"
            anime__up="property: scale; easing: easeInSine; to: 1 1 1; dur: 100; from: 0.9 0.9 0.9; startEvents: button-animation-up"
    >
        <a-box 
            class="dnd"
            hoverable
            event-emit__common="__event: mouseup; __emit: ${event}" 
            event-emit__animation="__event: mousedown; __emit: button-animation-down;" 
            event-emit__animation-up="__event: mouseup; __emit: button-animation-up;" 
            event-set__hoveron="_event: hover-start; material.opacity: 0.7; transparent: true"
            event-set__hoveroff="_event: hover-end; material.opacity: 1; transparent: false"
            material="color: ${color}; roughness: 0.5; metalness: 0.5"
            position="0 0 -0.1" 
            width="1" 
            height="0.5" 
            depth="0.1" 
            >
        </a-box>
    </a-text> 
`);
