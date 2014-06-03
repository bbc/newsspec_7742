module.exports = function (grunt) {
	grunt.config(['clean', 'beforeTranslate'], {
        src:  ['content/<%= pkg.services.default %>']
    });
    grunt.registerTask('translate', ['clean:beforeTranslate', 'default', 'sass:inline', 'uglify', 'multi_lang_site_generator:build_all_other_sites', 'clean:main', 'copy_source']);
};