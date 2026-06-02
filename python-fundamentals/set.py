# list --> []
# tuple --> ()
# set --> {}

# set: unique elements collection. No duplicate

numbers = [23, 34, 4, 67, 32, 23, 67, 97] # list -> can contain duplicate values
print(numbers)

number_set = {23, 34, 4, 67, 32, 23, 67, 97}
print(number_set)

number_set.add(66)
number_set.add(71)
number_set.add(60)
print(number_set)
number_set.remove(4)
print(number_set)

# number_set[3] = 81 -> Not possible in set

for item in number_set:
    print(item)

if 67 in number_set:
    print('exists')
else:
    print('not exists')

A = {1, 2, 3, 4, 5}
B = {2, 4, 6, 7}

print(A & B) # prints only those values which are present in both A, B
print(A | B) # prints all the values of both A, B
