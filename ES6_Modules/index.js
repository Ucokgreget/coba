import {PI, getKeliling, getLuas, getVolume} from './mathUtil.js'

console.log(PI);

const keliling = getKeliling(10);
console.log(`${keliling.toFixed(2)}cm`)

const Luas = getLuas(10);
console.log(`${Luas.toFixed(2)}cm`);

const Volume = getVolume(10);
console.log(`${Volume.toFixed(2)}cm`)

