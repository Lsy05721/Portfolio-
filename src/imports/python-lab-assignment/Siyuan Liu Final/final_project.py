import pygame
import random
import math

# =========================
# Breakout Plus - Final Project
# Liu Siyuan
# =========================

pygame.init()

# =========================
# Constants
# =========================
WIDTH = 1000
HEIGHT = 700
FPS = 60

WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 80, 80)
YELLOW = (255, 220, 80)
GREEN = (80, 255, 120)
BLUE = (80, 180, 255)
PURPLE = (200, 100, 255)
ORANGE = (255, 165, 0)

BRICK_COLORS = [RED, YELLOW, GREEN, BLUE, PURPLE]

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Breakout Plus")
clock = pygame.time.Clock()

font = pygame.font.SysFont("arial", 28)
large_font = pygame.font.SysFont("arial", 64)
small_font = pygame.font.SysFont("arial", 22)

# =========================
# Game Variables
# =========================
PADDLE_SPEED = 10
BALL_SPEED = 5
POWERUP_DROP_CHANCE = 0.22
POWERUP_DURATION = 12000

# =========================
# Helper Functions
# =========================
def draw_text(text, font_obj, color, x, y, center=False):
    render = font_obj.render(text, True, color)
    rect = render.get_rect()

    if center:
        rect.center = (x, y)
    else:
        rect.topleft = (x, y)

    screen.blit(render, rect)


def clamp(value, minimum, maximum):
    return max(minimum, min(value, maximum))


# =========================
# Paddle Class
# =========================
class Paddle:
    def __init__(self):
        self.width = 140
        self.height = 18
        self.x = WIDTH // 2 - self.width // 2
        self.y = HEIGHT - 60
        self.speed = PADDLE_SPEED
        self.color = WHITE
        self.sticky = False

    @property
    def rect(self):
        return pygame.Rect(self.x, self.y, self.width, self.height)

    def move(self, keys):
        if keys[pygame.K_LEFT] or keys[pygame.K_a]:
            self.x -= self.speed

        if keys[pygame.K_RIGHT] or keys[pygame.K_d]:
            self.x += self.speed

        self.x = clamp(self.x, 0, WIDTH - self.width)

    def draw(self):
        pygame.draw.rect(screen, self.color, self.rect, border_radius=8)


# =========================
# Ball Class
# =========================
class Ball:
    def __init__(self, x, y, speed=BALL_SPEED):
        self.radius = 10
        self.x = x
        self.y = y
        self.speed = speed

        angle = random.choice([45, 60, 120, 135])
        rad = math.radians(angle)

        self.dx = speed * math.cos(rad)
        self.dy = -speed * abs(math.sin(rad))

        self.stuck = True

    @property
    def rect(self):
        return pygame.Rect(
            self.x - self.radius,
            self.y - self.radius,
            self.radius * 2,
            self.radius * 2,
        )

    def update(self, paddle):
        if self.stuck:
            self.x = paddle.x + paddle.width // 2
            self.y = paddle.y - self.radius - 2
            return

        self.x += self.dx
        self.y += self.dy

        # Wall collision
        if self.x - self.radius <= 0:
            self.x = self.radius
            self.dx *= -1

        if self.x + self.radius >= WIDTH:
            self.x = WIDTH - self.radius
            self.dx *= -1

        if self.y - self.radius <= 0:
            self.y = self.radius
            self.dy *= -1

    def draw(self):
        pygame.draw.circle(screen, WHITE, (int(self.x), int(self.y)), self.radius)


# =========================
# Brick Class
# =========================
class Brick:
    def __init__(self, x, y, width, height, color):
        self.rect = pygame.Rect(x, y, width, height)
        self.color = color
        self.alive = True

    def draw(self):
        pygame.draw.rect(screen, self.color, self.rect, border_radius=4)
        pygame.draw.rect(screen, BLACK, self.rect, 2, border_radius=4)


# =========================
# PowerUp Class
# =========================
class PowerUp:
    TYPES = [
        "expand",
        "shrink",
        "multiball",
        "slow",
        "fast",
        "life",
        "sticky",
    ]

    COLORS = {
        "expand": GREEN,
        "shrink": RED,
        "multiball": PURPLE,
        "slow": BLUE,
        "fast": ORANGE,
        "life": YELLOW,
        "sticky": WHITE,
    }

    def __init__(self, x, y):
        self.type = random.choice(self.TYPES)
        self.rect = pygame.Rect(x, y, 28, 28)
        self.speed = 4
        self.active = True

    def update(self):
        self.rect.y += self.speed

        if self.rect.top > HEIGHT:
            self.active = False

    def draw(self):
        pygame.draw.rect(
            screen,
            self.COLORS[self.type],
            self.rect,
            border_radius=6,
        )

        letter = self.type[0].upper()
        text = small_font.render(letter, True, BLACK)
        text_rect = text.get_rect(center=self.rect.center)
        screen.blit(text, text_rect)


# =========================
# Create Bricks
# =========================
def create_bricks():
    bricks = []

    rows = 6
    cols = 12

    brick_width = 70
    brick_height = 28

    padding = 8

    offset_x = (WIDTH - (cols * (brick_width + padding))) // 2
    offset_y = 80

    for row in range(rows):
        color = BRICK_COLORS[row % len(BRICK_COLORS)]

        for col in range(cols):
            if random.random() > 0.08:
                x = offset_x + col * (brick_width + padding)
                y = offset_y + row * (brick_height + padding)

                bricks.append(
                    Brick(x, y, brick_width, brick_height, color)
                )

    return bricks


# =========================
# Reset Game
# =========================
def reset_game():
    paddle = Paddle()

    balls = [
        Ball(
            paddle.x + paddle.width // 2,
            paddle.y - 20,
        )
    ]

    bricks = create_bricks()

    powerups = []

    active_effects = {
        "expand": 0,
        "shrink": 0,
        "slow": 0,
        "fast": 0,
        "sticky": 0,
    }

    return {
        "paddle": paddle,
        "balls": balls,
        "bricks": bricks,
        "powerups": powerups,
        "score": 0,
        "lives": 3,
        "effects": active_effects,
    }


# =========================
# Apply Power-Up
# =========================
def apply_powerup(game, power_type):
    paddle = game["paddle"]
    balls = game["balls"]
    effects = game["effects"]

    current_time = pygame.time.get_ticks()

    if power_type == "expand":
        paddle.width = min(240, paddle.width + 50)
        effects["expand"] = current_time + POWERUP_DURATION

    elif power_type == "shrink":
        paddle.width = max(60, paddle.width - 40)
        effects["shrink"] = current_time + POWERUP_DURATION

    elif power_type == "multiball":
        new_balls = []

        for ball in balls:
            for _ in range(2):
                extra_ball = Ball(ball.x, ball.y, speed=ball.speed)
                extra_ball.stuck = False
                new_balls.append(extra_ball)

        balls.extend(new_balls)

    elif power_type == "slow":
        for ball in balls:
            ball.dx *= 0.8
            ball.dy *= 0.8

        effects["slow"] = current_time + POWERUP_DURATION

    elif power_type == "fast":
        for ball in balls:
            ball.dx *= 1.2
            ball.dy *= 1.2

        effects["fast"] = current_time + POWERUP_DURATION

    elif power_type == "life":
        game["lives"] += 1

    elif power_type == "sticky":
        paddle.sticky = True
        effects["sticky"] = current_time + POWERUP_DURATION


# =========================
# Expire Effects
# =========================
def update_effects(game):
    current_time = pygame.time.get_ticks()

    paddle = game["paddle"]
    effects = game["effects"]

    if effects["expand"] and current_time > effects["expand"]:
        paddle.width = 140
        effects["expand"] = 0

    if effects["shrink"] and current_time > effects["shrink"]:
        paddle.width = 140
        effects["shrink"] = 0

    if effects["sticky"] and current_time > effects["sticky"]:
        paddle.sticky = False
        effects["sticky"] = 0


# =========================
# Paddle Collision
# =========================
def handle_paddle_collision(ball, paddle):
    if ball.rect.colliderect(paddle.rect) and ball.dy > 0:
        relative_intersect = (
            (ball.x - paddle.x) / paddle.width
        )

        bounce_angle = math.radians(150 * relative_intersect + 15)

        speed = math.sqrt(ball.dx ** 2 + ball.dy ** 2)

        speed = min(speed + 0.15, 12)

        ball.dx = speed * math.cos(bounce_angle)
        ball.dy = -abs(speed * math.sin(bounce_angle))

        ball.y = paddle.y - ball.radius - 2

        if paddle.sticky:
            ball.stuck = True


# =========================
# Brick Collision
# =========================
def handle_brick_collision(game, ball):
    bricks = game["bricks"]

    for brick in bricks:
        if brick.alive and ball.rect.colliderect(brick.rect):
            brick.alive = False
            game["score"] += 10

            overlap_left = ball.rect.right - brick.rect.left
            overlap_right = brick.rect.right - ball.rect.left
            overlap_top = ball.rect.bottom - brick.rect.top
            overlap_bottom = brick.rect.bottom - ball.rect.top

            min_overlap = min(
                overlap_left,
                overlap_right,
                overlap_top,
                overlap_bottom,
            )

            if min_overlap in (overlap_left, overlap_right):
                ball.dx *= -1
            else:
                ball.dy *= -1

            if random.random() < POWERUP_DROP_CHANCE:
                powerup = PowerUp(
                    brick.rect.centerx - 14,
                    brick.rect.centery - 14,
                )

                game["powerups"].append(powerup)

            break


# =========================
# Draw HUD
# =========================
def draw_hud(game):
    draw_text(f"Score: {game['score']}", font, WHITE, 20, 15)
    draw_text(f"Lives: {game['lives']}", font, WHITE, WIDTH - 160, 15)


# =========================
# Start Menu
# =========================
def start_menu():
    while True:
        clock.tick(FPS)

        screen.fill(BLACK)

        draw_text("BREAKOUT PLUS", large_font, WHITE, WIDTH // 2, 220, center=True)

        draw_text(
            "Press ENTER to Start",
            font,
            GREEN,
            WIDTH // 2,
            350,
            center=True,
        )

        draw_text(
            "Press ESC to Quit",
            font,
            RED,
            WIDTH // 2,
            400,
            center=True,
        )

        draw_text(
            "A/D or Arrow Keys to Move",
            small_font,
            WHITE,
            WIDTH // 2,
            500,
            center=True,
        )

        pygame.display.flip()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                return False

            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_RETURN:
                    return True

                if event.key == pygame.K_ESCAPE:
                    pygame.quit()
                    return False


# =========================
# Game Over Screen
# =========================
def game_over_screen(score):
    while True:
        clock.tick(FPS)

        screen.fill(BLACK)

        draw_text("GAME OVER", large_font, RED, WIDTH // 2, 220, center=True)

        draw_text(
            f"Final Score: {score}",
            font,
            WHITE,
            WIDTH // 2,
            340,
            center=True,
        )

        draw_text(
            "Press R to Restart",
            font,
            GREEN,
            WIDTH // 2,
            420,
            center=True,
        )

        draw_text(
            "Press M for Main Menu",
            font,
            YELLOW,
            WIDTH // 2,
            470,
            center=True,
        )

        draw_text(
            "Press ESC to Quit",
            font,
            RED,
            WIDTH // 2,
            520,
            center=True,
        )

        pygame.display.flip()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                return "quit"

            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_r:
                    return "restart"

                if event.key == pygame.K_m:
                    return "menu"

                if event.key == pygame.K_ESCAPE:
                    pygame.quit()
                    return "quit"


# =========================
# Main Game Function
# =========================
def run_game():
    game = reset_game()

    running = True

    while running:
        clock.tick(FPS)

        # =========================
        # Events
        # =========================
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                return False

            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    for ball in game["balls"]:
                        ball.stuck = False

        # =========================
        # Input
        # =========================
        keys = pygame.key.get_pressed()
        game["paddle"].move(keys)

        # =========================
        # Update Balls
        # =========================
        balls_to_remove = []

        for ball in game["balls"]:
            ball.update(game["paddle"])

            handle_paddle_collision(ball, game["paddle"])
            handle_brick_collision(game, ball)

            if ball.y - ball.radius > HEIGHT:
                balls_to_remove.append(ball)

        for ball in balls_to_remove:
            if ball in game["balls"]:
                game["balls"].remove(ball)

        # =========================
        # Life Loss
        # =========================
        if len(game["balls"]) == 0:
            game["lives"] -= 1

            if game["lives"] <= 0:
                result = game_over_screen(game["score"])

                if result == "restart":
                    game = reset_game()
                    continue

                elif result == "menu":
                    return True

                else:
                    return False

            else:
                paddle = game["paddle"]
                game["balls"] = [
                    Ball(
                        paddle.x + paddle.width // 2,
                        paddle.y - 20,
                    )
                ]

        # =========================
        # Update Power-Ups
        # =========================
        for powerup in game["powerups"]:
            powerup.update()

            if powerup.rect.colliderect(game["paddle"].rect):
                apply_powerup(game, powerup.type)
                powerup.active = False

        game["powerups"] = [
            p for p in game["powerups"] if p.active
        ]

        update_effects(game)

        # =========================
        # Win Condition
        # =========================
        if all(not brick.alive for brick in game["bricks"]):
            game["bricks"] = create_bricks()

            for ball in game["balls"]:
                ball.dx *= 1.05
                ball.dy *= 1.05

        # =========================
        # Draw
        # =========================
        screen.fill(BLACK)

        for brick in game["bricks"]:
            if brick.alive:
                brick.draw()

        for powerup in game["powerups"]:
            powerup.draw()

        game["paddle"].draw()

        for ball in game["balls"]:
            ball.draw()

        draw_hud(game)

        draw_text(
            "SPACE = Launch Ball",
            small_font,
            WHITE,
            WIDTH // 2,
            HEIGHT - 30,
            center=True,
        )

        pygame.display.flip()


# =========================
# Main Loop
# =========================
def main():
    while True:
        start = start_menu()

        if not start:
            break

        continue_game = run_game()

        if not continue_game:
            break

    pygame.quit()


if __name__ == "__main__":
    main()
