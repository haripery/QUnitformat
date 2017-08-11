console.log(' -------------------------');
console.log('| UNIT TEST Suite for JS  |');
console.log(' -------------------------');
$(document).ready(function () {
    runTests();
});


function runTests() {

    QUnit.module( "Module 1.0:TEST FUNCTIONS", function( hooks ) {
            hooks.beforeEach( function( assert ) {
            });
            hooks.afterEach( function( assert ) {
            });

            QUnit.module( "Module 1.1:Test SUB-FUNCTIONS", function( hooks ) {
               hooks.beforeEach( function( assert ) {
               });
               hooks.afterEach( function( assert ) {
               });

               QUnit.test( "Test case 1:", function( assert ) {
                   assert.equal(true,true, "Test case 1 Passed !");
            });
               QUnit.test( "Test case 2:", function( assert ) {
                   assert.equal(true,true, "Test case 2 Passed !");
            });
            });
         });

//CONSOLE LOG CODE
QUnit.begin(function( details ) {                                                                                   //Notify the total no. of tests to be done
    console.log( "TOTAL TEST AMOUNT:", details.totalTests ,'\n');
});
QUnit.moduleStart(function( details ) {                                                                             //Notify which test module is currently running
    console.log( "NOW RUNNING: ", details.name );
});
QUnit.moduleDone(function( details ) {                                                                              //Notify end of the module
    if (details.failed>0){
        console.log(' --------------------------------------------------------------------');
        console.log('| ABORTING UNIT TEST : TEST CASE FAILED : REMAINING TEST CASES SKIPPED |');
        console.log(' --------------------------------------------------------------------');
        QUnit.config.queue.length = 0;
    }
    else{
        console.log( "Finished running: ", details.name, "Failed/total: ", details.failed, details.total );
    }
});

QUnit.log(function( details ) {                                                                                     //Provides each and every assertion log
    console.log( "Log: ", details.result, details.message );
});
QUnit.log(function( details ) {                                                                                     //This code will intimate if there is any errors in Test Case in console
  if ( details.result ) {
    return;
  }
  var loc = details.module + ": " + details.name + ": ",
    output = "FAILED TEST DESCRIPTION: \n"+ loc + ( details.message ? details.message + ", " : "" );

  if ( details.actual ) {
    output += '\n'+"Expected: "+details.expected+'\n'+"Actual: "+details.actual;
  }
  if ( details.source ) {
    output += "\n" +"Location:\n"+details.source;
  }
  console.log( output );
});
QUnit.done(function( details ) {                                                                                    //Summary of the Test Suite
    console.log( 'SUMMARY:\n',"Total assertions: ", details.total, " Failed: ", details.failed, " Passed: ", details.passed, " Runtime: ", details.runtime );
});



}
