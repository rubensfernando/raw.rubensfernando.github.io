module.exports = function(grunt){
  grunt.config('watch', {

    styles: {
      files: ['assets/sass/**/*.{sass,scss}'],
      tasks: ['sass:dev']
    }

  });
};
