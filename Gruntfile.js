/*jshint es3: false */
module.exports = function (grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });
    grunt.loadTasks('tasks');
};