import path from "path";
import initStoryshots from '@storybook/addon-storyshots';
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer';

initStoryshots();
// initStoryshots({
//     configPath: path.resolve(__dirname, './'),
//     integrityOptions: { cwd: path.resolve(__dirname, '../src') },
//     test: imageSnapshot(
//         {
//             storybookUrl: 'http://localhost:6006',
//             getMatchOptions: ({context: {kind, story}, url}) => {
//                 return {
//                     failureThreshold: 0.2,
//                     failureThresholdType: 'percent',
//                 };
//             },
//         }
//     ),
//     framework: "react"
// });
