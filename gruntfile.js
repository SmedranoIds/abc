module.exports = function (grunt) {
   grunt.initConfig({
		    jade: {
		      compile: {
		        options: {
		          pretty: true,
		        },
		        files: {
		          'build/index.html': 'jade/*.jade'
		        }
		      }
		    },		
			compass: {                  // Task
				dist: {                   // Target
				  options: {              // Target options
				    sassDir: 'sass/',
				    environment: 'production'
				  } 
				},
				dev: {                    // Another target
				  options: {
				    sassDir: 'sass',
				    cssDir: 'css/'
				  }
				}
			},
			watch: { 
				scripts: { 
				  files: ['./*/*.jade','./*/*.scss'],
				  tasks: ['jade','compass'],
				  options: {
				    spawn: false,
				  }
				}
			}
	});
	grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('css',['compass']);   //Comandos para compilar css(grunt)
	grunt.registerTask('html',['jade']);		//html(grunt)
};