import AFRAME from 'aframe';

AFRAME.registerComponent('force-range', {
    position: {
        x: 0,
        y: -1,
        z: -2
    },

    tick: function () {
        const cursor = document.querySelector('#cursor');
        const position = cursor.getAttribute('position');
        const rotation = cursor.getAttribute('rotation');

        console.log(position, rotation);
    }
});
