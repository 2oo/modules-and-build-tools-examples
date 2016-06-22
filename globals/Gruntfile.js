module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'math/add.js',
                    'math/multiply.js',
                    'app.js'
                ],
                dest: 'build/app.js'
            }
        },
        uglify: {
            build: {
                src: 'build/app.js',
                dest: 'dist/app.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify']);

};
