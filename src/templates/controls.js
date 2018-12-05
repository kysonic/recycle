import AFRAME from 'aframe';

AFRAME.registerTemplate('controls', `
    <a-sub-assets>
        <a-mixin id="controllers-right" vive-controls="hand: right"
                     oculus-touch-controls="hand: right"
                     windows-motion-controls="hand: right"
                     gearvr-controls daydream-controls
                     oculus-go-controls>
            </a-mixin>
            <a-mixin id="controllers-left" vive-controls="hand: left"
                     oculus-touch-controls="hand: left"
                     windows-motion-controls="hand: left">
            </a-mixin>
            <a-mixin id="point" raycaster="showLine: true; far: 10; objects: .dnd"
                     collision-filter="collisionForces: false"
                     static-body="shape: sphere; sphereRadius: 0.01"
                     throw-controls
                     super-hands="colliderEvent: raycaster-intersection;
                                  colliderEventProperty: els;
                                  colliderEndEvent: raycaster-intersection-cleared;
                                  colliderEndEventProperty: clearedEls;
                                  grabStartButtons: triggerdown,mousedown;
                                  grabEndButtons: triggerup,mouseup,trackpaddown,trackpadup"
                                  ></a-mixin>
    </a-sub-assets>
    <a-entity id="controls" controls-checker>
        <a-camera id="camera" positon="0 1.6 0" look-controls="pointerLockEnabled: true" restrict-position>
            <a-plane id="forceRange" 
            force-range 
            color="red" 
            height="0.1" 
            width="10" 
            position="0 1.4 -2"
            scale="0 1 0"
            anime="property: scale; from: 0 1 0; to: 1 1 0; dur: 2500; startEvents: force-range-start; pauseEvents: force-range-stop"
            ></a-plane>
        </a-camera>
    </a-entity>
`);
