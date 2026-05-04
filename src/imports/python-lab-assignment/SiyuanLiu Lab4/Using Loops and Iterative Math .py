import turtle

screen = turtle.Screen()
screen.bgcolor("white")

t = turtle.Turtle()
t.pensize(2)
t.speed(0)
t.color("black")

t.penup()
t.goto(50, 50)
t.pendown()


t.setheading(270)

length = 10


for i in range(36):
    t.forward(length)
    t.right(90)
    length += 5

turtle.done()
