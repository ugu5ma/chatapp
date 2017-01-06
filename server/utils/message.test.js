var expect = require('expect');
var {generateMessage} = require('./message');


describe('generateMessage', () => {
 it('should generate correct message object', () => {
   //store response in variable
   //assert from match
   //assert text match
   //assert createAt is number
   var from  = 'Uli';
   var text  = 'Something relevant';
   var message  = generateMessage(from, text);

   expect(message.createdAt).toBeA('number');
   expect(message).toInclude({from, text});


 });

});
