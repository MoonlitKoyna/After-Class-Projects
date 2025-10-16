
import turtle

screen = turtle.Screen()
screen.bgcolor("#f3e8ff")  
screen.title("Fun with Shapes ✨")

artist = turtle.Turtle()
artist.pensize(3)
artist.speed(5)

artist.color("#9b5de5")   
fill_colors = ["#f15bb5", "#fee440", "#00bbf9"]  

def draw_shape(sides, length, fill_color):
    artist.fillcolor(fill_color)
    artist.begin_fill()
    for i in range(sides):
        artist.forward(length)
        artist.right(360 / sides)
    artist.end_fill()

artist.penup()
artist.goto(-200, 100)
artist.pendown()
draw_shape(3, 120, fill_colors[0])  

artist.penup()
artist.goto(0, -50)
artist.pendown()
artist.fillcolor(fill_colors[1])
artist.begin_fill()
for i in range(2):
    artist.forward(150)
    artist.right(90)
    artist.forward(100)
    artist.right(90)
artist.end_fill()

artist.penup()
artist.goto(200, 100)
artist.pendown()
draw_shape(6, 80, fill_colors[2])  
artist.hideturtle()

screen.exitonclick()
