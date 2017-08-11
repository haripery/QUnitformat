# JavaScript Unit Test Infrastructure for VarVetter

## Components required to Build JavaScript Test Suite
1. PhantomJS - Headless Browser (To connect Qunit with CL)
2. QUnit - (Unit Test framework for JavaScript)
3. QUnit JavaScript runner (run QUnit.html from Phantomjs)

## Installation

### Step 1:
PhantomJS
> [Install PhantomJS](https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-macosx.zip)

### Step 2:
QUnit
> Copy Qunit files the below website: 
> [QUnit Format](https://github.com/haripery/QUnitformat)

Following are the files of QUnitFormat
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

Run the following command in shell
```
$ phantomjs run-qunit.js file://pwd/qunit.html
```
## Output
```
Hariprasaths-MacBook-Pro:QUnitformat hari$ phantomjs run-qunit.js qunit.html
 -------------------------
| UNIT TEST Suite for JS  |
 -------------------------
success
TOTAL TEST AMOUNT: 2 

NOW RUNNING:  Module 1.0:TEST FUNCTIONS
NOW RUNNING:  Module 1.0:TEST FUNCTIONS > Module 1.1:Test SUB-FUNCTIONS
Log:  true Test case 1 Passed !
Log:  true Test case 2 Passed !
Finished running:  Module 1.0:TEST FUNCTIONS > Module 1.1:Test SUB-FUNCTIONS Failed/total:  0 2
Finished running:  Module 1.0:TEST FUNCTIONS Failed/total:  0 0
SUMMARY:
 Total assertions:  2  Failed:  0  Passed:  2  Runtime:  7
[object HTMLParagraphElement]
Test finished in 203ms.
2 tests completed in 7 milliseconds, with 0 failed, 0 skipped, and 0 todo.
2 assertions of 2 passed, 0 failed
```
