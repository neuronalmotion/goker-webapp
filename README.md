goker-webapp
============

AngularJS webapp of poker games management

## Dependencies
* Compass (http://compass-style.org/install/)
```
sudo apt-get install ruby
sudo gem install compass
```
* npm (http://nodejs.org/)
```
cd <node-install-dir>
./configure
make
sudo make install
```
* bower (http://bower.io/)
```
sudo npm install -g bower
```
* grunt (http://gruntjs.com/)
```
sudo npm install -g grunt-cli
```

## Installation
```
git clone https://github.com/neuronalmotion/goker-webapp.git
cd goker-webapp
bower install # install dependencies
grunt serve # test your installation
```

## Troubleshootings

When doing ```grunt serve``` you might have this output:
```
Fatal error: Unable to find local grunt.

    If you're seeing this message, either a Gruntfile wasn't found or grunt
    hasn't been installed locally to your project. For more information about
    installing and configuring grunt, please see the Getting Started guide:

    http://gruntjs.com/getting-started
```

*DON'T PANIC*
Simply run:
```
sudo npm install grunt --save-dev
npm install
```
