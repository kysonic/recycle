AFRAME.registerTemplate(
  'trash',
  ({
    id,
    type,
    position,
    shape = 'shape: box; halfExtents: 0.07 0.15 0.07; offset: 0 0.02 0;',
    mass = 4,
  }) => html`
    <a-entity
      id="trash-${id}"
      body="type: dynamic; mass: ${mass}; shape: none;"
      shape="${shape}"
      grabbable
      draggable
      droppable
      class="dnd"
      trash="type: ${type}"
      gltf-model="#${type}"
      position="${position}"
    ></a-entity>
  `,
);
