AFRAME.registerTemplate(
  'button',
  ({
    text = 'BUTTON',
    position = '0 1 -2',
    rotation = '0 0 0',
    event,
    color = 'red',
    textColor = 'white',
    width = 1,
    height = 0.5,
    opacity = 1,
  }) => html`
    <a-text
      position="${position}"
      rotation="${rotation}"
      align="center"
      value="${text}"
      color="${textColor}"
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
        event-set__hoveron="_event: hover-start; material.opacity: ${opacity -
        0.3}; transparent: true"
        event-set__hoveroff="_event: hover-end; material.opacity: ${opacity}; transparent: false"
        material="color: ${color}; opacity: ${opacity}"
        position="0 0 -0.1"
        width="${width}"
        height="${height}"
        depth="0.1"
        sound="src: #click; on: mousedown; volume: 0.3"
      >
      </a-box>
    </a-text>
  `,
);
