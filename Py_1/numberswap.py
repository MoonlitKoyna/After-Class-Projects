x = 5
y = 9
z = 1

print("Before swapping:")
print("x =", x, "y =", y, "z =", z)

if x > y:
    x, y = y, x
if y > z:
    y, z = z, y
if x > y:
    x, y = y, x

print("\nAfter swapping (in ascending order):")
print("x =", x, "y =", y, "z =", z)
