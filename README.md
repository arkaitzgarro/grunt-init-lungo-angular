#grunt-init-lungo-angular
##A scaffold template for Lungo-Angular-Phonegap

## Setup (recommended)
If you run Linux or Mac OS X you can run the following command in your terminal to install the dependencies:

    curl https://raw.github.com/centralway/grunt-init-lungo-angular/master/bootstrap.bash | bash
which will install ``grunt-cli``, ``grunt-init``, ``nvm``, ``node.js (+npm)`` (v 0.10) and this template for you.
The tools have the following purposes:

* nvm: Node Version Manager - allows you to easily install multiple versions of node.js and switch between them (think of ``rbenv`` or ``rvm`` in Ruby)
* node.js / npm: Node.js / Node Package Manager - the Javascript runtime for our development tools and its package manager (think of ``gem`` in Ruby)
* grunt-cli: The CLI part of [Grunt](http://www.gruntjs.org) - Grunt is a build tool that automates tasks like ``ant``, ``make`` or ``rake``
* grunt-init: The scaffold generator - Grunt-Init allows you to install templates with wizards and scaffolds to speed up the setup process for new projects.


After running, you should be able to run

    nvm use 0.10.20
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
    
    $ git clone git@github.com:centralway/grunt-init-lungo-angular.git ~/.grunt-init/lungo-angular-bridge

## <a id="create"></a>Create a new app
Now you can create a new project by creating an empty directory and run grunt-init with the template, like this:
 
     $ mkdir demo && cd demo
     $ grunt-init lungo-angular-bridge
after answering all the questions (you may skip the phonegap related questions, if you're not going to use build.phonegap.com (yet)), you need to install the dependencies by running

     $ npm install
     $ node_modules/bower/bin/bower install
and you're done.

Test your fresh app by running a webserver in the project directory, for example via

     $ grunt serve
and then point your browser at [http://localhost:8000](http://localhost:8000)

## Deploy your app
We offer two modes of deployment: A local build method and the build.phonegap.com service method.

### Build with build.phonegap.com
This is the easiest way possible - you don't need to have anything installed on your computer.
The downside is: It may take some time and doesn't work with all plugins - but it's great to get started!

This is how you get your app on your phone:

1. You sign up at [build.phonegap.com](http://build.phonegap.com)
2. You create a private app (you have one for free) and upload some .zip file (any file will do for now)
3. You copy the "App ID" that is displayed next to your new app
4. You enter it in your ``Gruntfile.js`` or during the initial creation of the project when you're asked for it
5. You run ``grunt`` and it will try to build you app using the build service.
6. Install your app by going to [build.phonegap.com](http://build.phonegap.com) in your browser and click on your app. 
   Use the QR code to install the app on your phone.
   
### Build locally
This method requires some setup on your computer - especially **the SDKs for the platforms you want to support need to be installed**.
You'll also need ``cordova`` to be installed - to get it on your system, run ``npm install -g cordova``.

Having your computer set up with the SDK and cordova, you run

    grunt prepare-local-build local-build
and get your app executable from ``mobile/platforms/<PLATFORM NAME>/bin/``, for example ``mobile/platforms/android/bin/HelloWorld-debug.apk``.

You then deploy to your device using the tools from the SDK of that platform.
**Note:** You only need to run ``prepare-local-build`` once.

