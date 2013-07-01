#grunt-init-lungo-angular
##A scaffold template for Lungo-Angular-Phonegap

## Setup (recommended)
If you run Linux or Mac OS X you can run the following command in your terminal to install the dependencies:

    curl https://raw.github.com/centralway/grunt-init-lungo-angular/master/bootstrap.bash | bash
which will install ``grunt-init``, ``nvm``, ``node.js`` (v 0.10) and this template for you.
After running, you should be able to run

    grunt-init
and see something like this:

    Running "init" task
    A valid init template name must be specified.

    Available templates
     lungo-angular-bridge  Creates a new Lungo-Angular-Phonegap application

    Templates that exist in the /Users/martin.naumann/.grunt-init directory may be
    run with "grunt-init TEMPLATE". Templates that exist in another location may be
    run with "grunt-init /path/to/TEMPLATE". A template is a directory that must
    contain, at the very minimum, a template.js file.

    For more information, see http://gruntjs.com/project-scaffolding
notice the line that says ``lungo-angular-bridge`` below ``Available templates``.
If you see this line, you can proceed to the [Create a new app](#create) section

##Manual Setup
Install grunt-init:

    $ npm install -g grunt-init
Clone this repository into your ~/.grunt-init folder
    
    $ git clone git@github.com:centralway/grunt-init-lungo-angular.git ~/.grunt-init/lungo-angular

## <a id="create"></a>Create a new app
Now you can create a new project by creating an empty directory and run grunt-init with the template, like this:
 
     $ mkdir demo && cd demo
     $ grunt-init lungo-angular
after answering all the questions (you may skip the phonegap related questions, if you're not going to use build.phonegap.com (yet)), you need to install the dependencies by running

     $ npm install
     $ node_modules/bower/bin/bower install
and you're done.

Test your fresh app by running a webserver in the project directory, for example via

     $ python -m SimpleHTTPServer
and then point your browser at [http://localhost:8000](http://localhost:8000)