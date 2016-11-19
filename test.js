'use strict';

var Nightmare = require('nightmare'),
    should = require('chai').should();

describe('MHIT', function () {

  var button1 = '.dataBtn';
  var button2 = '.surveyBtn';
  
  it('should go to the data page when clicked', function () {
    // ID for the data button.

    Nightmare({ show : true })
      .goto('http://cardengine-mhit.herokuapp.com/landing')
      // Just to be safe.
      .wait(button1)
      // Click the data button.
      .click(button1)
      // Assert the title is as expected.
      .evaluate(function () { 
        document.title.should.equal('Mental Health in Tech');
      });
  });

  it('should go to the survey page when clicked', function () {
    // ID for the data button.

    Nightmare({ show : true })
      .goto('http://cardengine-mhit.herokuapp.com/landing')
      // Just to be safe.
      .wait(button2)
      // Click the survey button.
      .click(button2)
      // Assert the title is as expected.
      .evaluate(function () { 
        document.title.should.equal('Mental Health in Tech');
      });
  });

  it('should ', function () {
    throw new Error('Failed on purpose, just to make the Mocha output more interesting.');
  });

});