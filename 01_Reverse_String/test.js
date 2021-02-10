// first solution - using 'reverse' method
let reverseString = (str) => str.split('').reverse().join('');

// second solution - using 'loop'
let reverseStringSecond = (str) => {
  let arr = str.split('');
  let result = '';

  for (let i = arr.length - 1; i >= 0; i--) {
      result += arr[i];
  }
  //   let i = arr.length - 1;
  //   for (; i >= 0; ) {
  //       i--;
  //       result += arr[i];
  //   }
  //
  // let iterator = arr.length - 1;
  // while (iterator >= 0) {
  //     iterator--;
  //     result += arr[iterator];
  // }

  return result;
};

describe('reverseString', () => {
    it('reverse string using loop', () => {
        let string = 'hello';
        let result = 'olleh';

        expect(reverseStringSecond(string)).toBe(result);
    });

    it('reverse string method "reverse"', () => {
        let str = 'hello';
        let reversedStr = 'olleh';
        let result = reverseString(str);

        expect(result).toBe(reversedStr);
    });
});

