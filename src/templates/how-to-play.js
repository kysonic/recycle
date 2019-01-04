import AFRAME from 'aframe';
import './button';
import '../components/how-to-play';

AFRAME.registerTemplate('how-to-play', `
    <a-sub-assets>
        <img id="dsktp" src="/assets/img/controls-dsktp.png">
        <img id="hdst" src="/assets/img/controls-hdst.png">
    </a-sub-assets>
     <a-plane
            id="dsktp"
            position="0 2.5 -4"
            width="5"
            height="3"
            material="transparent: true; opacity: 1"
            src="#dsktp"
            how-to-play
        ></a-plane>
    
    
    <a-template name="button" options="text: BACK; position: -0.15 0.5 -4; event: back; color: #5e9696"></a-template>
`);
