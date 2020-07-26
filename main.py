def on_forever():
    if input.button_is_pressed(Button.A):
        pass
    if input.button_is_pressed(Button.B):
       pass
basic.forever(on_forever)

for i in range(5):
    zahl = randint(0, 1)
    if zahl == 0:
        printleft()
    else:
        printright()
    basic.pause(2000)
    turn_all_off()
    basic.pause(1000)

def turn_all_off():
    for col in range(5):
        for row in range(5):
            led.unplot(col,row)

def printleft():
    basic.show_leds("""
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    """)

def printright():
    basic.show_leds("""
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    """) 