export default ({
  id,
  type,
  position,
  shape = 'shape: box; halfExtents: 0.07 0.15 0.07; offset: 0 0.02 0;',
  mass = 4,
}) => `
<a-entity
       id="trash-${id}"
       body="type: dynamic; mass: ${mass}; shape: none;"
       shape__main="${shape}"
       grabbable
       draggable
       droppable
       id="trash-plastic"
       class="dnd"
       trash="type: ${type}"
       gltf-model="#${type}"
       position="${position}"
></a-entity>
`;
