import {TRASH_TYPES} from '../consts';
import config from '../config';

const wavesConfig = config.waves;
const binsConfig = wavesConfig.bins;
const trashConfig = wavesConfig.trash;

const getTrashBinCountByWave = function (waveNumber) {
    if (waveNumber <= 3) {
        return 3;
    }
    if (waveNumber <= 6) {
        return 4;
    }
    return 5;
};

const generateBins = function (waveNumber) {
    const trashBinsCount = getTrashBinCountByWave(waveNumber);
    return TRASH_TYPES.slice(0, trashBinsCount).map((trashBin, i) => {
        const z = binsConfig.startFrom - waveNumber * binsConfig.step;
        const plusMinus = (i % 2) ? - 1 : 1;
        let x = binsConfig.gap * plusMinus * (Math.floor(i / 2) + i % 2);
        if(trashBinsCount % 2 === 0) {
            x += binsConfig.gap / 2;
        }
        trashBin.position = `${x} 0 ${z}`;
        return trashBin;
    });
};

export default function waveGenerator(waveNumber) {
    const bins = generateBins(waveNumber);
    return {
        id: waveNumber,
        trashBins: bins,
        trash: {
            count: trashConfig.startCount + Math.round((waveNumber - 1) * trashConfig.startCount * wavesConfig.waveCoefficient),
            types: bins.map(bin => bin.type),
            maxPosition: {
                x: 1,
                y: 2,
                z: (binsConfig.startFrom - (waveNumber * wavesConfig.waveCoefficient))
            }
        }
    }
}
