import random
import pygame
import pymunk

# constants
PADDLE_SPEED = 6
START_SPEED = 300

# scores
score1 = 0  # top player
score2 = 0  # bottom player

# collision types
COLL_TOP = 1
COLL_BOTTOM = 2
COLL_BALL = 3

# reset ball
def reset_ball():
    ballBody.position = (400, 300)
    ballBody.velocity = (random.choice([-1, 1]) * START_SPEED,
                         random.choice([-1, 1]) * START_SPEED)

# collisions
def hit_top(space, arbiter, data):
    global score2
    score2 += 1
    reset_ball()
    return True

def hit_bottom(space, arbiter, data):
    global score1
    score1 += 1
    reset_ball()
    return True

# move paddle
def move_paddle(body, left, right):
    x, y = body.position
    if left:
        x -= PADDLE_SPEED
    if right:
        x += PADDLE_SPEED

    # keep inside screen
    x = max(50, min(750, x))
    body.position = (x, y)

# init
pygame.init()
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()
font = pygame.font.SysFont("Arial", 30)

space = pymunk.Space()
space.gravity = (0, 0)

# walls
top = pymunk.Body(body_type=pymunk.Body.STATIC)
top.position = (400, 10)
topShape = pymunk.Poly.create_box(top, (800, 20))
topShape.elasticity = 1
topShape.collision_type = COLL_TOP
space.add(top, topShape)

bottom = pymunk.Body(body_type=pymunk.Body.STATIC)
bottom.position = (400, 590)
bottomShape = pymunk.Poly.create_box(bottom, (800, 20))
bottomShape.elasticity = 1
bottomShape.collision_type = COLL_BOTTOM
space.add(bottom, bottomShape)

leftWall = pymunk.Body(body_type=pymunk.Body.STATIC)
leftWall.position = (10, 300)
leftShape = pymunk.Poly.create_box(leftWall, (20, 600))
leftShape.elasticity = 1
space.add(leftWall, leftShape)

rightWall = pymunk.Body(body_type=pymunk.Body.STATIC)
rightWall.position = (790, 300)
rightShape = pymunk.Poly.create_box(rightWall, (20, 600))
rightShape.elasticity = 1
space.add(rightWall, rightShape)

# ball
ballBody = pymunk.Body(1, 100)
ballBody.position = (400, 300)
ballShape = pymunk.Circle(ballBody, 10)
ballShape.elasticity = 1
ballShape.collision_type = COLL_BALL
space.add(ballBody, ballShape)

reset_ball()

# paddles
paddle1 = pymunk.Body(body_type=pymunk.Body.KINEMATIC)
paddle1.position = (400, 50)
shape1 = pymunk.Poly.create_box(paddle1, (100, 20))
shape1.elasticity = 1
space.add(paddle1, shape1)

paddle2 = pymunk.Body(body_type=pymunk.Body.KINEMATIC)
paddle2.position = (400, 550)
shape2 = pymunk.Poly.create_box(paddle2, (100, 20))
shape2.elasticity = 1
space.add(paddle2, shape2)

# collisions
space.add_collision_handler(COLL_TOP, COLL_BALL).begin = hit_top
space.add_collision_handler(COLL_BOTTOM, COLL_BALL).begin = hit_bottom

# input flags
p1_left = p1_right = False
p2_left = p2_right = False

# game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_a:
                p1_left = True
            if event.key == pygame.K_d:
                p1_right = True
            if event.key == pygame.K_LEFT:
                p2_left = True
            if event.key == pygame.K_RIGHT:
                p2_right = True

        if event.type == pygame.KEYUP:
            if event.key == pygame.K_a:
                p1_left = False
            if event.key == pygame.K_d:
                p1_right = False
            if event.key == pygame.K_LEFT:
                p2_left = False
            if event.key == pygame.K_RIGHT:
                p2_right = False

    # move paddles
    move_paddle(paddle1, p1_left, p1_right)
    move_paddle(paddle2, p2_left, p2_right)

    space.step(1/60)

    # draw
    screen.fill((0, 0, 0))

    pygame.draw.circle(screen, (255, 255, 255), ballBody.position, 10)

    for body, shape in [(top, topShape), (bottom, bottomShape),
                        (leftWall, leftShape), (rightWall, rightShape),
                        (paddle1, shape1), (paddle2, shape2)]:
        bb = shape.bb
        pygame.draw.rect(screen, (255,255,255),
            (bb.left, bb.bottom, bb.right-bb.left, bb.top-bb.bottom))

    # scores
    text1 = font.render(f"Player 1: {score1}", True, (255,255,255))
    text2 = font.render(f"Player 2: {score2}", True, (255,255,255))

    screen.blit(text1, (20, 20))
    screen.blit(text2, (600, 20))

    pygame.display.flip()
    clock.tick(60)

pygame.quit()