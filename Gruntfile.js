module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'css/styles.css' : 'css/style.scss'
				}
			}
		},

		watch: {
			scripts: {
				files: ['css/*.scss'],
				tasks: ['sass'],
				option: {
					spawn: false
				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', 'watch');
};