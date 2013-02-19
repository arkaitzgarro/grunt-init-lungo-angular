#grunt-init-lungo-angular
##A scaffold template for Lungo-Angular-Phonegap

##Setup
Install grunt-init:

    $ npm install -g grunt-init
Clone this repository into your ~/.grunt-init folder
    
    $ git clone git@github.com:centralway/grunt-init-lungo-angular.git ~/.grunt-init/lungo-angular
 
Now you can create a new project by creating an empty directory and run grunt-init with the template, like this:
 
     $ mkdir demo && cd demo
     $ grunt-init lungo-angular
after answering all the questions (you may skip the phonegap related questions, if you're not going to use build.phonegap.com (yet)), you need to install the dependencies by running

     $ npm install
     $ bower install
and you're done.

Test your fresh app by running a webserver in the project directory, for example via

     $ python -m SimpleHTTPServer
and then point your browser at [http://localhost:8000](http://localhost:8000)