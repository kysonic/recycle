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
            <a-mixin id="point" raycaster="showLine: true; far: 10"
                     collision-filter="collisionForces: false"
                     static-body="shape: sphere; sphereRadius: 0.01"
                     super-hands="colliderEvent: raycaster-intersection;
                                  colliderEventProperty: els;
                                  colliderEndEvent: raycaster-intersection-cleared;
                                  colliderEndEventProperty: clearedEls;
                                  grabStartButtons: triggerdown,mousedown;
                                  grabEndButtons: triggerup,mouseup"
                                  ></a-mixin>
    </a-sub-assets>
    <a-entity id="controls" controls-checker>
        <a-camera id="camera" positon="0 1.6 0" restrict-position></a-camera>
    </a-entity>
`);
