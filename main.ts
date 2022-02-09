input.onButtonPressed(Button.A, function () {
    angulo += 15
    servos.P0.setAngle(angulo)
})
let angulo = 0
angulo = 90
servos.P0.setAngle(angulo)
basic.forever(function () {
	
})
