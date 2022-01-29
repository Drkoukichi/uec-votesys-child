radio.onReceivedNumber(function (receivedNumber) {
    TempReceived = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    a += 1
})
function VoteFunc (VoteDate: number) {
    while (!(input.buttonIsPressed(Button.B))) {
        if (a == VoteDate) {
            a = 0
        }
        if (a == 0) {
            basic.showString("A")
            VoteString = "A"
        } else if (a == 1) {
            basic.showString("B")
            VoteString = "B"
        } else if (a == 2) {
            basic.showString("C")
            VoteString = "C"
        } else if (a == 3) {
            basic.showString("D")
            VoteString = "D"
        } else if (a == 4) {
            basic.showString("E")
            VoteString = "E"
        }
    }
    return a
}
function DoVote (name: number, vote: number) {
    radio.sendValue(convertToText(name), vote)
}
radio.onReceivedString(function (receivedString) {
    CheckHash = receivedString
})
let VoteString = ""
let CheckHash = ""
let a = 0
let TempReceived = 0
music.setVolume(31)
radio.setGroup(50)
let VoteNum = 0
TempReceived = 0
while (TempReceived == 0) {
    basic.pause(5000)
}
VoteNum = TempReceived
basic.showNumber(VoteNum)
basic.pause(1000)
basic.clearScreen()
a = 0
radio.setGroup(90)
let votedate = VoteFunc(VoteNum)
DoVote(control.deviceSerialNumber(), votedate)
let MemoBootTime = control.millis()
basic.showArrow(ArrowNames.North)
while (MemoBootTime + 5000 >= control.millis()) {
    if (parseFloat(CheckHash) == control.deviceSerialNumber()) {
        break;
    }
}
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.showString(VoteString)
