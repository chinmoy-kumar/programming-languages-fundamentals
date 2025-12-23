numbers = [12, 45, 98, 68, 45, 2, 38]

# Append
numbers.append(21)
print(numbers)

# Insert
numbers.insert(3, 76) # list.insert(index, value)
print(numbers)

# Remove
if 98 in numbers: # To check before remove a value to avoid error
    numbers.remove(98)
if 6 in numbers:
    numbers.remove(6)
print(numbers)

# Pop
numbers.pop()
print(numbers)

last = numbers.pop()
print(last, numbers)

# Clear
# numbers.clear()
# print(numbers)

# Index
i = numbers.index(45) # Returns the index of that value in list
print(i)

# Find a index in a range
i = numbers.index(45, 1, 3) # list.index(value, startIndex, endIndex)
print(i)

# Count
cnt = numbers.count(45)
print(cnt)

# Sort
numbers.sort()
print(numbers)
