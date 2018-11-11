import AFRAME from 'AFRAME';
import config from '../config';
import {TRASH_TYPES} from '../consts';

const generateRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

AFRAME.registerSystem('trash', {
    trash: [],
    delay: 0,

    init() {
        this.nextTrash = this.nextTrash.bind(this);
    },

    startTrashWave() {
        this.delay = 2000;
        this.nextTrash();
    },

    nextTrash() {
        if(this.trash.length <= this.el.currentWaveConfig.trash.count) {
            this.createTrash(this.getRandomTrash());
            setTimeout(this.nextTrash, this.delay);
            this.delay = config.waves.nextTrashDelay + generateRandomInt(-500, 500);
        }
    },

    getRandomTrash() {
        const trashData = {};
        trashData.type = this.el.currentWaveConfig.trash.types[generateRandomInt(0, this.el.currentWaveConfig.trash.types.length - 1)];
        trashData.id = this.trash.length + 1;
        trashData.position = this.generateRandomPosition(this.el.currentWaveConfig.trash.maxPosition);
        trashData.color = TRASH_TYPES.find(trash => trash.type === trashData.type).color;
        return trashData;
    },

    generateRandomPosition(maxPosition) {
        return `${generateRandomInt(-maxPosition.x, maxPosition.x)} ${generateRandomInt(1, maxPosition.y)} ${maxPosition.z}`
    },

    createTrash(trashData) {
        AFRAME.templates['trash'].init(trashData);
    },

    registerTrash(bin) {
        this.trash.push(bin);
    }
});
