'use strict';

module.exports = function(grunt) {

	var folders = {
		app: 'app',
		dist: 'dist',
		tmp: '.tmp'
	};

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		folders: folders,
		connect: {
			server: {
				options: {
					hostname: '*',
					open: {
						target: 'http://localhost:9001',
					},
					port: 9001,
					base: '<%= folders.tmp %>',
					livereload: true
				}
			}
		},
		jade: {
			compile: {
				options: {
					client: false,
					pretty: true
				},
				files: [ {
					cwd: "<%= folders.app %>/jade",
					src: "**/*.jade",
					dest: "<%= folders.tmp %>",
					expand: true,
					ext: ".html"
				} ]
			}
		},
		uglify: {
			build: {
				src: '<%= folders.app %>/scripts/main.js',
				dest: '<%= folders.tmp %>/scripts/main.js'
			}
		},
		sass: {
			build: {
				files: {
					'<%= folders.tmp %>/styles/main.css': '<%= folders.app %>/styles/main.sass'       // 'destination': 'source'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			styles: {
				files: ['<%= folders.app %>/styles/**/*.sass'],
				tasks: ['sass', 'autoprefixer', 'cssmin']
			},
			scripts: {
				files: ['<%= folders.app %>/scripts/**/*.js'],
				tasks: ['uglify']
			},
			jade: {
				files: ['<%= folders.app %>/jade/**/*.jade'],
				tasks: ['jade']
			},
			image: {
				files: ['<%= folders.app %>/images/**/*.jpg'],
				tasks: ['copy:images']
			}
		},
		clean: {
			options: {
				nowrite: true
			},
			tmp: ['<%= folders.tmp %>'],
			dist: ['<%= folders.dist %>']
		},
		copy: {
			images : {
				files: [{
					expand: true,
					cwd: '<%= folders.app %>/images/',
					src: ['**'],
					dest: '<%= folders.tmp %>/images/'},
				],	
			},
			build: {
				files: [{
					expand: true,
					cwd: '<%= folders.tmp %>/',
					src: ['**'],
					dest: '<%= folders.dist %>/'},
				],
			},
		},
		autoprefixer: {
			options: {
				silent: true
			},
			overwrite: {
				src: '<%= folders.tmp %>/styles/**/*.css'
			}
		},
		cssmin: {
			target: {
				files: {
					'<%= folders.tmp %>/styles/main.min.css': ['node_modules/normalize.css/normalize.css', '<%= folders.tmp %>/styles/main.css']
				}
			}
		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Define tasks

	grunt.registerTask('default', ['uglify']);

	grunt.registerTask('serve', [
		'clean:tmp',
		'jade',
		'sass',
		'autoprefixer',
		'cssmin',
		'uglify',
		'connect:server',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean',
		'jade',
		'sass',
		'autoprefixer',
		'cssmin',
		'uglify',
		'copy',
	]);

};

