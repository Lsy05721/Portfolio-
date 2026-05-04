import turtle

t = turtle.Turtle()
t.speed(3)

# ===== house body =====
t.penup()
t.goto(-100, -100)
t.setheading(0)
t.pendown()

for _ in range(4):
    t.forward(200)
    t.left(90)

# ===== roof left =====
t.penup()
t.goto(-100, 100)
t.setheading(45)
t.pendown()
t.forward(140)

# ===== roof right (full) =====
t.setheading(-45)
t.forward(140)

# ===== chimney (fixed & independent) =====
t.penup()
t.goto(40, 140)     
t.setheading(0)
t.pendown()

t.forward(40)
t.left(90)
t.forward(80)
t.left(90)
t.forward(40)
t.left(90)
t.forward(80)

# ===== door =====
t.penup()
t.goto(-30, -100)
t.setheading(90)
t.pendown()

t.forward(80)
t.right(90)
t.forward(60)
t.right(90)
t.forward(80)

t.hideturtle()
turtle.done()