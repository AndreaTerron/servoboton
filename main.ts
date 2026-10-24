servos.P0.setAngle(0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        servos.P0.setAngle(180)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        servos.P0.setAngle(0)
    }
})
