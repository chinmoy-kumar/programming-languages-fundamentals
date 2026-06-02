# Tuples are immutable (once created, it cannot be changed)
# Defined with Square brackets '[]'

def multiple():
    return 3, 4;
# print(multiple())

things = 'pen', 'tripod', 'water bottle', 'charger', 'phone', 'web cam', 'sunglass'
print(type(things))

print(things[0])
print(things[-2])
print(things[3:6]) # tuple slicing

if 'phone' in things:
    print('exists')

# for item in things:
#     print(item)

# tuples are immutable but if there any mutable object in tuple that can be modified

# things[0] = 'wagon' # this will throw error
# print(things)

# if there are list in tuple then that inner list can be modified but not the tuple
mega = ([2, 3, 4], ['bird', 'fruit', 'fish'])
# print(type(mega))
print(mega[0])
mega[0][1] = 777 # Modify the 1st index of the 0th element in that tuple
print(mega)