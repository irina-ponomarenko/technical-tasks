// first solution - using 'reverse' method
let reverseString = (str) => str.split('').reverse().join('');

test('reverseString', () => {
    let str = 'hello';
    let reversedStr = 'olleh';
    let result = reverseString(str);

    expect(result).toBe(reversedStr);
});

// second solution - using 'loop'
let reverseStringSecond = (str) => {
  let arr = str.split('');
  let result = '';

  for (let i = arr.length - 1; i >= 0; i--) {
      result += arr[i];
  }

  return result;
};

test('reverseStringSecond', () => {
   let string = 'hello';
   let result = 'olleh';

   expect(reverseStringSecond(string)).toBe(result);
});

























