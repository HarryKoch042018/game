let zahl: number;
basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.A)) {
        
    }
    
    if (input.buttonIsPressed(Button.B)) {
        
    }
    
})
for (let i = 0; i < 5; i++) {
    zahl = Math.randomRange(0, 1)
    if (zahl == 0) {
        printleft()
    } else {
        printright()
    }
    
    basic.pause(2000)
    turn_all_off()
    basic.pause(1000)
}
function turn_all_off() {
    for (let col = 0; col < 5; col++) {
        for (let row = 0; row < 5; row++) {
            led.unplot(col, row)
        }
    }
}

function printleft() {
    basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
}

function printright() {
    basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
}

