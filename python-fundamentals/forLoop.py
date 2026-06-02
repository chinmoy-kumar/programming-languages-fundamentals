numbers = [1, 22, 31, 43, 5]
sum = 0
for num in numbers:
    print(num)
    sum = num + sum
print("Total sum is:", sum)

""" text = "Hello bro"
for char in text:
    print(char)
 """

# Range in For Loop
# range(start(inclusive), end(exclusive), step(increment))

for i in range(1, 10, 2):
    print(i, end = " ") # end = " " -> to print in a line with single space
print()

# Print value with index
# Using Range
friends = ["friend1", "friend2", "friend3", "friend4", "friend5"]
for x in range(len(friends)):
    print(x+1, friends[x])

print()

# Using Enumerate
# enumerate(iterable, start=0):
for index, value in enumerate(friends, start = 0):
    print(index, value)

# Using _
""" 
It means:
“I don’t need the loop variable, I just want to repeat the loop.”
So _ is just a variable name, but by convention it tells readers:
This value is intentionally unused.
"""
for _ in range(5):
    print("Hello")
