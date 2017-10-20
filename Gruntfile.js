module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					paths: ['source/less']
				},
				files: {
			  		'build/css/style.css': 'source/less/*.less'
				}
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
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin']);
};