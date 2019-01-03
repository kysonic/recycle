import AFRAME from 'aframe';

AFRAME.registerTemplate('banner', `
    <a-sub-assets>
        <a-asset-item id="banner" src="/assets/models/banner.gltf"></a-asset-item>
    </a-sub-assets>
    <a-entity id="banner">
            <a-entity
                    id="bannerModel"
                    gltf-model="#banner"
                    scale="2.5 2.5 2.5"
                    position="0 4 -10">
            </a-entity>
            <!--<a-entity id="scoreText" position="-1 5.88 -10" text="align: left; width: 10; color: black; value:SCORES:"></a-entity>-->
            <a-entity id="score" position="2.4 5.88 -10"  bind="text.value: score" text="align: left; width: 15; color: black;"></a-entity>
            <!--<a-entity id="livesText" position="0.5 5.88 -10" text="align: right; width: 10; color: black; value:LIVES:"></a-entity>-->
            <a-entity id="lives" position="-2.5 5.88 -10"  bind="text.value: lives" text="align: right; width: 15; color: black;"></a-entity>
        </a-entity>
`);
