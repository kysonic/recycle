import AFRAME from 'aframe';
import config from '../config';
import {TRASH_TYPES} from '../consts';

const generateRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomFloat = function (min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

AFRAME.registerSystem('trash', {

    levelTrash: 0,
    trash: [],
    delay: 0,
    timeout: null,

    init() {
        this.nextTrash = this.nextTrash.bind(this);
    },

    startTrashWave() {
        this.delay = 4000;
        this.nextTrash();
    },

    stopTrashWave() {
        clearTimeout(this.timeout);
        this.timeout = null;
        this.levelTrash = 0;
    },

    nextTrash() {
        this.levelTrash++;
        if(this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        if (this.levelTrash <= this.el.currentWaveConfig.trash.count) {
            this.createTrash(this.getRandomTrash());
            this.timeout = setTimeout(this.nextTrash, this.delay);
            this.delay = config.waves.nextTrashDelay + generateRandomInt(-500, 500);
        } else {
            this.levelTrash = 0;
            this.el.emit('drop-previous-level');
            this.el.emit('increaseLives', {points: 5});
            setTimeout(()=>this.el.emit('start-next-level'), 0);
        }
    },

    getRandomTrash() {
        const trashData = {};
        trashData.type = this.el.currentWaveConfig.trash.types[generateRandomInt(0, this.el.currentWaveConfig.trash.types.length - 1)];
        trashData.id = Date.now();
        trashData.position = this.generateRandomPosition(this.el.currentWaveConfig.trash.maxPosition);
        trashData.color = TRASH_TYPES.find(trash => trash.type === trashData.type).color;
        return trashData;
    },

    generateRandomPosition(maxPosition) {
        return `${generateRandomFloat(-maxPosition.x, maxPosition.x)} ${generateRandomFloat(0.5, maxPosition.y)} ${-generateRandomFloat(0.5, maxPosition.z)}`
    },

    createTrash(trashData) {
        AFRAME.templates['trash'].init(trashData);
    },

    registerTrash(trash) {
        this.trash.push(trash);
    },

    removeTrash(trash) {
        trash.isRemoved = true;
        const foundTrashIndex = this.trash.findIndex((t) => t.el === trash);
        const foundTrash = this.trash[foundTrashIndex];
        if (!foundTrash) {
            return false;
        }
        clearTimeout(foundTrash.timeout);
        this.el.object3D.remove(foundTrash.el.object3D);
        setTimeout(() => {
            this.el.removeChild(foundTrash.el);
        });
        this.trash.splice(foundTrashIndex, 1);
    },

    dropTrash() {
        this.trash.forEach((trash) => {
            this.el.removeChild(trash.el);
        });
        this.trash = [];
    }
});
