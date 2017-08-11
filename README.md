# JavaScript Unit Test Infrastructure for VarVetter

## Components required to Build JavaScript Test Suite
1. PhantomJS - Headless Browser (To connect Qunit with CL)
2. QUnit - (Unit Test framework for JavaScript)
3. QUnit JavaScript runner (run QUnit.html from Phantomjs)

## Installation

### Step 1:
PhantomJS
> [Install PhantomJS](https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-macosx.zip)

###Step 2:
QUnit
> Copy Qunit files the below website: 
> [QUnit Format](https://github.com/haripery/QUnitformat)
> Qunitformat has the following files
  - qunit-git.js
  - qunit.css
  - qunit.html
  - run-qunit.js
  - tests.js

## Run
### Step 3:
Creating Test Suite
> Edit the tests.js file with application test cases and Modules

### Step 4:
> Copy the Qunit folder to the respective application test folder
> $ phantomjs run-qunit.js file://pwd/qunithtml
