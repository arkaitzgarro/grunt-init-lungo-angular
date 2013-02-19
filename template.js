"use strict";

exports.description = "Creates a new Lungo-Angular-Phonegap application";
exports.after = "You should now run _npm install_ and _bower install_ to install the dependencies";

exports.warnOn = "*"; //Warn if dest is not empty

exports.template = function(grunt, init, done) {  
  init.process({}, [
    {
      name: "name",
      message: "Name of this application"
    },
    {
      name: "description",
      message: "Description for this application",
      default: "A Lungo-Angular-Phonegap app"
    },
    {
      name: "version",
      message: "Version",
      default: "0.0.1"
    },
    {
      name: "author",
      message: "Name of the author"
    },
    {
      name: "homepage",
      message: "Website URL"
    },
    {
        name: "phonegap_package_name",
        message: "Package name of your application package",
        default: "com.example.appname"
    },
    {
      name: "phonegap_app_id",
      message: "The App ID of your PhoneGap app (see build.phonegap.com)"
    },
    {
      name: "phonegap_user_email", 
      message: "Your build.phonegap.com account email address"
    },
    {
      name: "phonegap_user_password", 
      message: "Your build.phonegap.com account password"
    },
  ], function(err, props) {
    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);
    done();
  });
};