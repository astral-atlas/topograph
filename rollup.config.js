import flowEntry from 'rollup-plugin-flow-entry'

const rollupConfig = {
  input: 'src/topograph.js',
  external: [ 'lk-contract' ],
  output: [
    { format: 'esm', file: 'dist/topograph.esm.js' },
    { format: 'cjs', file: 'dist/topograph.cjs.js' },
  ],
  plugins: [flowEntry()],
};

export default rollupConfig;
