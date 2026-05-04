import turtle

t = turtle.Turtle()
t.speed(5)

t.penup()
t.forward(-300)
t.pendown()

# Triangle
for _ in range(3):
    t.forward(150)
    t.left(120)

t.penup()
t.forward(250)
t.pendown()

# Octagon
for _ in range(8):
    t.forward(80)
    t.left(45)

t.penup()
t.forward(250)
t.pendown()

# Hexagon
for _ in range(6):
    t.forward(100)
    t.left(60)

turtle.done()
