module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['*.scss'],
					dest: 'build/',
					ext: '.css'
				}]
			}
		},
		autoprefixer: {
			compile: {
				files: {
				  'build/style.css': 'build/style.css'
				},
			},
		},
		cssmin: {
			clean: {
				files: {
				  'build/style.css': 'build/style.css'
				}
			}
		},
	});

	// Load grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin']);
};