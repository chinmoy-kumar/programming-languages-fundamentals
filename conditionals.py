# in, not, not in, is, is not
# and, or
# not allowed: &&, ||

# a = 2
a = 10
flag = False

if a > 5:
    print("greater than 5")
elif a > 3:
    print("greater than 3")
else:
    print("less than 5 & 3")

if flag is not True:
    print("flag is here")
else:
    print("flag is not here")

# Nested Condition
n = 10
if n%2 == 0:
    print(f"{n} is even")
    if n > 2 and n < 15:
        print(f"{n} greater than 2 and even")
else:
    print(f"{n} is odd")
    if n < 2:
        print(f"{n} is less than 3")