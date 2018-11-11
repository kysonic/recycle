import AFRAME from 'AFRAME';

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
            <a-mixin id="point" raycaster="showLine: true; objects: .dnd; far: 5"
                     collision-filter="collisionForces: false"
                     static-body="shape: sphere; sphereRadius: 0.001"
                     super-hands="colliderEvent: raycaster-intersection;
                                  colliderEventProperty: els;
                                  colliderEndEvent:raycaster-intersection-cleared;
                                  colliderEndEventProperty: clearedEls;"></a-mixin>
    </a-sub-assets>
    <a-entity id="controls" controls-checker>
        <a-camera id="camera" wasd-controls-enabled="false" positon="0 1.6 0"></a-camera>
    </a-entity>
`);
