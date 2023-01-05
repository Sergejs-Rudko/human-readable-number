module.exports = function toReadable(number) {

    const oneToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensTillNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let strNumber = number.toString()

    const readOnes = (n) => {
        return oneToNineteen[+n];
    }

    const readTens = (number) => {
        let n = number.toString()
        if (+n.slice(0, 1) < 2) {
            return readOnes(n)
        } else if (n.slice(-1) === '0' && n.slice(0, 1) !== '1') {
            return tensTillNinety[+n.slice(0, 1) - 2]
        } else {
            return `${tensTillNinety[+n.slice(0, 1) - 2]} ${readOnes(n.slice(-1))}`
        }
    }

    const readHundreds = (number) => {
        let n = number.toString()
        if(n.slice(1,3) == '00'){
            return `${oneToNineteen[+n.slice(0, 1)]} hundred`
        }else{
            return `${oneToNineteen[+n.slice(0, 1)]} hundred ${readTens(n.slice(1,3))}`
        }
    }

    switch (strNumber.length){
        case 1 : {
            return readOnes(strNumber);
        }
        case 2 : {
            return readTens(strNumber);
        }
        case 3 : {
            return readHundreds(strNumber);
        }
    }
}
