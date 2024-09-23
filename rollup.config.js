//import thyseusPlugin from 'thyseus-plugin';
import { thyseus } from "@thyseus/rollup-plugin-thyseus";
import typescript from 'rollup-plugin-typescript2';
 
export default {
	input: 'src/index.tsx',
	output: {
	   file: 'public/bundle.js',
	   format: 'iife'
	},
	plugins: [
		thyseus(),
		typescript(),
	],
};