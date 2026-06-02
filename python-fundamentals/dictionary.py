# Dictonary
# Key value pair
# object
# hash table
# overlap with list
person1 = {'Name':'Robin', 'Age':'23', 'Address':'Dhaka',  'job':'student'}
# structure: {'key':'value', 'key':'value', 'key':'value',...}

print(person1)
print(person1['job'])
print(person1.keys()) # prints all the keys
print(person1.values()) # prints all the values

# Dictionary is mutable
person1['Name'] = 'Bob' # changes the name
person1['language'] = 'Bangla' # adds new key & value
print(person1)

del person1['Age'] # deletes age
print(person1)

# special dictionary loop
for key, value in person1.items():
    print(key, value)