import { defineBuildConfig } from 'unbuild';
import alias from '../util/alias';

export default defineBuildConfig({
  entries: ['./src/index'],
  outDir: 'lib',
  declaration: true,
  externals: ['axios'],
  failOnWarn: false,
  rollup: {
    alias: {
      entries: alias()
    },
    emitCJS: true
  }
});
