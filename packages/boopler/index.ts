import * as $ from 'jquery';
import { Woopler } from '@lerna-webpack-typescript/woopler';

$(() => {
    const woopler = new Woopler();
    woopler.asyncConsoleLog("boop");
});