AFRAME.registerTemplate(
  'mixins',
  () => html`
    <a-sub-assets>
      <a-mixin id="controllers-left" laser-controls="hand: left"></a-mixin>
      <a-mixin id="controllers-right" laser-controls="hand: right"></a-mixin>
      <a-mixin
        id="point"
        raycaster="showLine: true; far: 5; objects: .dnd"
        collision-filter="collisionForces: false"
        static-body="shape: sphere; sphereRadius: 0.01"
        throw-controls
        super-hands="colliderEvent: raycaster-intersection;
                                colliderEventProperty: els;
                                colliderEndEvent: raycaster-intersection-cleared;
                                colliderEndEventProperty: clearedEls;"
      ></a-mixin>
    </a-sub-assets>
  `,
);
