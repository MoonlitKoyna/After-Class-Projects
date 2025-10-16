num = int(input("Enter a number to check if it's an Armstrong number: "))

order = len(str(num))

sum_of_powers = 0

temp = num

while temp > 0:
    digit = temp % 10           
    sum_of_powers += digit ** order 
    temp //= 10             

if num == sum_of_powers:
    print(f" {num} is an Armstrong number of order {order}! ")
else:
    print(f" {num} is NOT an Armstrong number. Try again!")
