const COUNTDOWN_TEXT = ['READY', 'STEADY', 'RECYCLE!'];

AFRAME.registerTemplate(
  'controls',
  () => html`
    <a-entity id="controls" controls-checker>
      <a-camera
        id="camera"
        position="0 1.6 0"
        look-controls="pointerLockEnabled: true"
        restrict-position
      >
        <a-plane
          id="forceRange"
          color="red"
          height="0.1"
          width="10"
          position="0 1.55 -2"
          scale="0 1 0"
          animation="property: scale; from: 0 1 0; to: 1 1 0; dur: 2500; startEvents: force-range-start; pauseEvents: force-range-stop"
        ></a-plane>
        <a-entity
          tutorial
          text="align: center; width: 1.5; color: white; value:"
          position="0 0.1 -1.5"
        ></a-entity>
        <a-entity
          id="countdown"
          position="0 0 -1"
          countdown="text: ${COUNTDOWN_TEXT}; interval: 1000"
        ></a-entity>
      </a-camera>
    </a-entity>
  `,
);
