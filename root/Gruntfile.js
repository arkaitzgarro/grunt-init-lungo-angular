module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    "phonegap-build": {
      options: {
        archive: "app.zip",
        "appId": "{%= phonegap_app_id %}",
        "user": {
          "email": "{%= phonegap_user_email %}",
          "password": "{%= phonegap_user_password %}"
        }
      }
    },
    zip: {
      app: {
        src: ["index.html", "Config.xml", "components/**/*.*", "partials/*.html", "app.js", "controller.js"],
        dest: "app.zip"
      }     
    }
  });

  // Load local tasks.
  grunt.loadNpmTasks('grunt-zipstream');
  grunt.loadNpmTasks('grunt-phonegap-build');

  // Default task.
  grunt.registerTask('default', ['zip', 'phonegap-build']);
};

