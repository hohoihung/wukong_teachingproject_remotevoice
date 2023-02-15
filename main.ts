enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("3#")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("5#")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("4#")
})
serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    speech_id = serial.readString()
    if (speech_id == "1#") {
        radio.sendString("1#")
    } else if (speech_id == "2#") {
        radio.sendString("2#")
    } else if (speech_id == "3#") {
        radio.sendString("3#")
    } else if (speech_id == "4#") {
        radio.sendString("4#")
    } else if (speech_id == "5#") {
        radio.sendString("5#")
    } else if (speech_id == "6#") {
        radio.sendString("6#")
    } else if (speech_id == "7#") {
        radio.sendString("7#")
    } else if (speech_id == "8#") {
        radio.sendString("8#")
    } else if (speech_id == "9#") {
        radio.sendString("9#")
    } else if (speech_id == "10#") {
        radio.sendString("10#")
    } else if (speech_id == "11#") {
        radio.sendString("11#")
    } else if (speech_id == "12#") {
        radio.sendString("12#")
    }
})
let speech_id = ""
radio.setGroup(8)
serial.redirect(
SerialPin.P2,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.showIcon(IconNames.Pitchfork)
basic.forever(function () {
	
})
