radio.onReceivedNumber(function (receivedNumber) {
    renum.unshift(receivedNumber)
})

let qsum = 0

let renum: number[] = []
radio.setGroup(50)
renum = []


basic.forever(function () {
    if(renum.pop()==999){
        qsum = renum.pop()
        basic.showNumber(qsum)
    }
})
