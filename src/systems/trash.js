import AFRAME from 'aframe';
import config from '../config';
import {TRASH_TYPES} from '../consts';

const generateRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

AFRAME.registerSystem('trash', {

    levelTrash: 0,
    trash: [],
    delay: 0,
    newTrashTimer: '',

    init() {
        this.nextTrash = this.nextTrash.bind(this);
    },

    startTrashWave() {
        this.delay = 4000;
        this.nextTrash();
    },

    stopTrashWave() {
        clearInterval(this.newTrashTimer);
    },

    nextTrash() {
        this.levelTrash++;
        if(this.levelTrash <= this.el.currentWaveConfig.trash.count) {
            this.createTrash(this.getRandomTrash());
            this.newTrashTimer = setTimeout(this.nextTrash, this.delay);
            this.delay = config.waves.nextTrashDelay + generateRandomInt(-500, 500);
        }else {
            this.levelTrash = 0;
            this.el.emit('drop-previous-level');
            this.el.emit('start-next-level');
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
        return `${generateRandomInt(-maxPosition.x, maxPosition.x)} ${generateRandomInt(1, maxPosition.y)} ${generateRandomInt(-1, maxPosition.z)}`
    },

    createTrash(trashData) {
        AFRAME.templates['trash'].init(trashData);
    },

    registerTrash(trash) {
        this.trash.push(trash);
    },

    // TODO wrong palace for this method
    updateHitPoints() {
        const scene = document.querySelector('a-scene');
        scene.emit(`decreaseHitPoints`, {points: 1});
        // stop game if the user have't hit points
        if (scene.systems.state.state.hitPoints < 1) {
            scene.emit(`fail-game`);
        }
    },

    removeTrash(trash) {
        const foundTrashIndex = this.trash.findIndex((t) => t.el === trash);
        const foundTrash = this.trash[foundTrashIndex];
        if(!foundTrash) {
            return false;
        }
        this.el.object3D.remove(foundTrash.el.object3D);
        setTimeout(()=> {this.el.removeChild(foundTrash.el);});
        this.trash.splice(foundTrashIndex, 1);
    },

    removeAllTrash() {
        this.trash.forEach( (t) => { this.removeTrash(t.el) });
    },

    // helpers
    trashIsExist(trash) {
        return this.trash.findIndex((t) => t.el === trash) != -1;
    }

});
