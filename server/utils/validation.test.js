const expect = require('expect');

// import is Real string
const {isRealString} = require('./validation');
//is RealString
  //should reject non-string values

  //should reject string with only spaces

  // should allow string with non-space characters


describe('isRealString', () => {
   it('should reject non-string values', () => {
     var res = isRealString(79);
     expect(res).toBe(false);
   });
   it('should reject string with only spaces', () => {
     var res = isRealString('    ');
     expect(res).toBe(false);
   });

   it('should allow string with non-space characters', () => {
     var res = isRealString('  Uli  ');
     expect(res).toBe(true);

   });
});
