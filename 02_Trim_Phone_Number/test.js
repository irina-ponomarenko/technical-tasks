let cutPlus = (str) => {
    let numberArr = str.split('');

    if (numberArr[0] === '+') {
        numberArr.shift();
    }

    return numberArr.join('');
};

let trimPlusSecond = (str) => {
    let strArr = str.split('');

    let newArr = strArr.filter((item) => {
        if (isNaN(item) || item.trim() === '') {
            return false;
        }

        return true;
    });

    return newArr.join('');
};

let removePlus = (str) => {
    if (str[0] === '+') {
        return str.substr(1);
    }
    return str;
};

describe('cutPlus', () => {
    let numberPhone = '+380638882863';
    let result = '380638882863';
    let phoneWhithoutPlus = '380638882863';
    let simbolsPhoneNumber = '+3 8=0()6_3888286*3'

    it('trim plus', () => {
        expect(cutPlus(numberPhone)).toBe(result);
    });

    it('the phone number without plus', () => {
        expect(cutPlus(phoneWhithoutPlus)).toBe(result);
    });

    it('remove simbols from phone number', () => {
       expect(trimPlusSecond(simbolsPhoneNumber)).toBe(result);
    });

    it('should remove plus', () => {
       expect(removePlus(numberPhone)).toBe(result);
       expect(removePlus(result)).toBe(result);
    });

});
