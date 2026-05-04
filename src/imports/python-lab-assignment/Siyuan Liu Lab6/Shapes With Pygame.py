import pygame
import sys

pygame.init()

WIDTH = 800
HEIGHT = 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Shapes With Pygame - Car")

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

# Main loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Fill background
    screen.fill(BLACK)

    # Car body (rectangle)
    body_rect = pygame.Rect(300, 300, 200, 80)
    pygame.draw.rect(screen, WHITE, body_rect)

    # Roof (arc)
    roof_rect = pygame.Rect(320, 240, 160, 120)
    pygame.draw.arc(screen, WHITE, roof_rect, 0, 3.14159, 5)

    # Wheels (circles)
    pygame.draw.circle(screen, WHITE, (350, 390), 30)
    pygame.draw.circle(screen, WHITE, (450, 390), 30)

    # Update display
    pygame.display.flip()

# Quit pygame
pygame.quit()
sys.exit()