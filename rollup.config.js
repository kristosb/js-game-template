import thyseusPlugin from 'thyseus-plugin';
import typescript from 'rollup-plugin-typescript2';
 
export default {
	// ...
	plugins: [
		thyseusPlugin(),
		typescript(),
	],
};