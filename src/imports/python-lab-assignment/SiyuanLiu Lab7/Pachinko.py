import pygame
import pymunk

pygame.init()
screen = pygame.display.set_mode((800, 600))

space = pymunk.Space()
space.gravity = (0, 500)   # stronger gravity so it behaves naturally


# Ball
body = pymunk.Body(1, 100)
ball = pymunk.Circle(body, 10)
body.position = (250, 100)
space.add(body, ball)


# Ramp 1
line1Body = pymunk.Body(body_type=pymunk.Body.STATIC)
line1 = pymunk.Segment(line1Body, (200, 250), (350, 350), 5)
space.add(line1Body, line1)


# Ramp 2
line2Body = pymunk.Body(body_type=pymunk.Body.STATIC)
line2 = pymunk.Segment(line2Body, (350, 400), (550, 300), 5)
space.add(line2Body, line2)


# Ramp 3
line3Body = pymunk.Body(body_type=pymunk.Body.STATIC)
line3 = pymunk.Segment(line3Body, (550, 450), (750, 550), 5)
space.add(line3Body, line3)


# Game Loop
done = False
clock = pygame.time.Clock()

while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True

    screen.fill((0, 0, 0))

    space.step(1/60.0)

    # Draw ball
    pygame.draw.circle(screen, (255, 255, 255),
                       (int(body.position.x), int(body.position.y)), 10)

    # Draw ramps
    pygame.draw.line(screen, (255, 255, 255), line1.a, line1.b, 5)
    pygame.draw.line(screen, (255, 255, 255), line2.a, line2.b, 5)
    pygame.draw.line(screen, (255, 255, 255), line3.a, line3.b, 5)

    pygame.display.update()
    clock.tick(60)

pygame.quit()