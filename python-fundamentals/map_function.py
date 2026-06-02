'''
1. WHAT IS map()?
----------------
map() is a built-in Python function used to
apply a function to every item in an collection
(list, tuple, etc.) and return the results.

Syntax:
    map(function, collection)

- function: what you want to apply
- iterable: list, tuple, etc.

IMPORTANT:
map() does NOT store data like C++ map.
It only transforms data.

'''

# Convert strings to int
# Given input: 4 1 3 10 8
arr = list(map(int, input().split())) # list used to just keep them in list

# With custom function
numbers = [1, 2, 3, 4]

def square(x):
    return x * x

result = map(square, numbers) # Here each element of numbers will pass one by one in square funciton

print(list(result))
# Output: [1, 4, 9, 16]

