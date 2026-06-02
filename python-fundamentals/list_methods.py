# Ref. -> https://docs.python.org/3/tutorial/datastructures.html

numbers = [12, 45, 98, 68, 45, 2, 38]

# Append -> Add value at the end of the list
numbers.append(21) 
print(numbers)

# Insert -> Insert value at a specific index or position
numbers.insert(3, 76) # list.insert(index, value)
print(numbers)

# Remove -> Remove an element from list
if 98 in numbers: # To check before remove a value to avoid error
    numbers.remove(98)
if 6 in numbers:
    numbers.remove(6)
print(numbers)

# Pop -> Remove and returns the last element
numbers.pop()
print(numbers)

last = numbers.pop()
print(last, numbers)

# Clear -> Clear the full list
# numbers.clear()
# print(numbers)

# Index -> Find and return the index of an element from the list
i = numbers.index(45) # Returns the index of that value in list
print(i)

# Find a index in a range
i = numbers.index(45, 1, 3) # list.index(value, startIndex, endIndex)
print(i)

# Count -> Count the number of repeation of an element in list
cnt = numbers.count(45)
print(cnt)

# Sort -> Sort the list
numbers.sort()
print(numbers)
