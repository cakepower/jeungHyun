radio.onReceivedNumber(function (receivedNumber) {
    let index4 = 0
    basic.showNumber(receivedNumber)
    if (receivedNumber == 3) {
        for (let index4 = 0; index4 <= 24; index4++) {
            strip5.setPixelColor(index4, neopixel.colors(NeoPixelColors.Yellow))
            strip5.rotate(1)
            strip5.setPixelColor(index4, neopixel.colors(NeoPixelColors.White))
            strip5.show()
            strip5.rotate(3)
            strip5.show()
            basic.pause(80)
        }
    } else if (receivedNumber == 4) {
        for (let index5 = 0; index5 <= 24; index5++) {
            strip6.setPixelColor(index5, neopixel.colors(NeoPixelColors.Violet))
            strip6.rotate(1)
            strip6.setPixelColor(index4, neopixel.colors(NeoPixelColors.White))
            strip6.show()
            strip6.rotate(3)
            strip6.show()
            basic.pause(80)
        }
        for (let index7 = 0; index7 <= 24; index7++) {
            strip5.setPixelColor(index7, neopixel.colors(NeoPixelColors.Black))
            strip5.show()
            basic.pause(80)
        }
        strip5.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(80)
        strip5.show()
    } else if (receivedNumber == 5) {
        for (let index6 = 0; index6 <= 24; index6++) {
            strip6.setPixelColor(index6, neopixel.colors(NeoPixelColors.Black))
            strip5.rotate(1)
            strip6.show()
            basic.pause(100)
        }
    } else if (receivedNumber == 99) {
        for (let index5 = 0; index5 <= 24; index5++) {
            strip6.setPixelColor(index5, neopixel.colors(NeoPixelColors.Violet))
            strip6.rotate(1)
            strip6.setPixelColor(index4, neopixel.colors(NeoPixelColors.White))
            strip6.show()
            strip6.rotate(3)
            strip6.show()
            basic.pause(80)
        }
        for (let index5 = 0; index5 <= 24; index5++) {
            strip5.setPixelColor(index5, neopixel.colors(NeoPixelColors.Violet))
            strip5.rotate(1)
            strip5.setPixelColor(index4, neopixel.colors(NeoPixelColors.White))
            strip5.show()
            strip5.rotate(3)
            strip5.show()
            basic.pause(80)
        }
        strip6.showColor(neopixel.colors(NeoPixelColors.Black))
        strip5.showColor(neopixel.colors(NeoPixelColors.Black))
        strip6.show()
        strip5.show()
        basic.pause(80)
    } else {
        strip5.showColor(neopixel.colors(NeoPixelColors.Black))
        strip6.showColor(neopixel.colors(NeoPixelColors.Black))
        strip5.show()
        strip6.show()
    }
})
let strip6: neopixel.Strip = null
let strip5: neopixel.Strip = null
radio.setGroup(42)
strip5 = neopixel.create(DigitalPin.P16, 24, NeoPixelMode.RGB)
strip6 = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
strip5.showColor(neopixel.colors(NeoPixelColors.Black))
strip6.showColor(neopixel.colors(NeoPixelColors.Black))
strip5.show()
strip6.show()
