import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'app.js',
    dest: 'dist/app.min.js',
    plugins: [
        nodeResolve({
            main: true,
            browser: true
        }),
        commonjs({
            namedExports: {
                'node_modules/jquery/dist/jquery.js': ['jquery']
            }
        }),
        uglify()
    ]
}
