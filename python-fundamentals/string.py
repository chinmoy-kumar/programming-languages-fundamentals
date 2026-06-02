""" 
NOTE:
Mutable means chageable
immutable means not changeable 
"""
name = "Mr. Robert"
message = 'Robert\'s letter' # escape character: https://www.w3schools.com/python/gloss_python_escape_characters.asp
name2 = 'Robert'
print(message)

# Multiline String
address = """   
    City: Dhaka
    Country: Bangladesh
"""
print(address)

# String is a sequence of characters
for c in name2:
    print(c)

print(name2[3])
print('\n')
print(name2[1:3])
print(name2[-2]) # starts from back -1
print(name2[::-1]) # Reverse string 

# String is immutable
# name2[1] = 'R' # This will throw error

# Check if in string or not
if 'ber' in name2:
    print("Yes")
else:
    print("No")



