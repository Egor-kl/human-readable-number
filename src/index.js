module.exports = function toReadable(number) {
    if (number < 100 && number % 10 == 0 || number == 0){
        return isNotBig(number);
    }
    let str = String(number);
    let strToChar = str.split('');
    let result = '';
    if (str.length == 3) {
        if (number >= 100){
            let x = parseInt(strToChar[1] + strToChar[2]);
            let midlle = parseInt(strToChar[1]);
            let last = parseInt(strToChar[2]);
            for (let i = 0; i < 3; i++) {
                if (i == 0) {
                    result += whatNumber(parseInt(strToChar[i])) + ' hundred';
                }
                else if(i == 1 && midlle == 0 && last == 0){
                    break;
                }
                else if(midlle < 2 && midlle != 0 && i == 1){
                    result += ' ' + whatNumberEleven(x);
                    break;
                }
                else if (i == 1 && midlle == 0){
                    result += ' ' + whatNumber(last);
                    break;
                }
                else if (i == 1) {
                    result += ' ' + (whatNumberSecond(midlle) + 'ty');
                }
                else if (strToChar[i] == 0 && i == 2) {
                    break;
                }
                else {
                    result += ' ' + whatNumber(parseInt(strToChar[i]));
                }
            }
        }
    }
    else if(str.length == 2){
        if (number < 20){
            let x = strToChar[0] + strToChar[1];
            result += whatNumberEleven(parseInt(x));
        }
        else{
            for (let i = 0; i < 2; i++){
                if (i == 0){
                    result += (whatNumberSecond(parseInt(strToChar[i])) + 'ty');
                }
                else{
                    result += ' ' + whatNumber(parseInt(strToChar[i]));
                }
            }
        }
    }
    else {
        result += whatNumber(parseInt(strToChar[0]));
    }

    return result;
}

function whatNumber(num) {
    switch (num) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
    }
}

function whatNumberSecond(num) {
    switch (num) {
        case 1:
            return 'one';
        case 2:
            return 'twen';
        case 3:
            return 'thir';
        case 4:
            return 'for';
        case 5:
            return 'fif';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eigh';
        case 9:
            return 'nine';
    }
}

function whatNumberEleven(num) {
    switch (num) {
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
}

function isNotBig(num) {
    switch(num){
        case 0:
            return 'zero';
        case 10:
            return 'ten';
        case 20:
            return 'twenty';
        case 30:
            return 'thirty';
        case 40:
            return 'forty';
        case 50:
            return 'fifty';
        case 60:
            return 'sixty';
        case 70:
            return 'seventy';
        case 80:
            return 'eighty';
        case 90:
            return 'ninety';
    }
}