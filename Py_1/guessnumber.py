import random

print("✨ Welcome to the Number Guessing Game! ✨")
print("Harsh needs your help to guess the correct number chosen by the judge!\n")

numbers = [5, 9, 13, 22, 35, 47, 58, 63, 71, 84, 90]

secret_number = random.choice(numbers)

attempts = 0
guess = None

while guess != secret_number:
    try:
        guess = int(input(f"Guess a number from this list: {numbers}\n Your guess: "))
        attempts += 1

        if guess not in numbers:
            print("Oops! Please pick a number from the given list.")
            continue

        if guess < secret_number:
            print(" Too low! Try a higher number.")
        elif guess > secret_number:
            print(" Too high! Try a lower number.")
        else:
            print(f" Woohoo! You guessed it right! The number was {secret_number}.")
            print(f"You found it in {attempts} attempts.")
            break

    except ValueError:
        print(" Please enter a valid number!")

print("\nGame Over. Thanks for playing ")
