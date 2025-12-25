#Ref.: https://www.geeksforgeeks.org/python/python-string-methods/

# Commonly Used
#=================

# split() -> Breaks string into words
s = "Welcome to Bangladesh"
x = s.split()
print(x)
print(s.split())

print('\n')

# strip() -> Removes spaces / newline
txt = "     banana     "
x = txt.strip()
print("of all fruits", x, "is my favorite")

txt = "     banana     "
x = txt.lstrip()
print("of all fruits", x, "is my favorite")

txt = "     banana     "
x = txt.rstrip()
print("of all fruits", x, "is my favorite")

print('\n')

# lower()/upper()
a = 'BanGlAdesh'
b = a.upper()
print(b)
c = a.lower()
print(c)

print('\n')

# replace() -> Replace characters or words
txt = "I like bananas"
x = txt.replace("bananas", "apples")
print(x)

print('\n')

# join() -> Join list into string
myTuple = ("John", "Peter", "Vicky")
x = "#".join(myTuple)
print(x)

# find()
# find() returns -1 if not found
txt = "Hello, welcome to my world."
x = txt.find("welcome")
print(x)

#index()
# index() raises an error if not found
txt = "Hello, welcome to my world."
x = txt.index("welcome")
print(x)

# startwith()/endswith()
txt = "Hello, welcome to my world."
x = txt.startswith("Hello")
y = txt.endswith("Hello")
print(x, y)

# count()
txt = "I love apples, apple are my favorite fruit"
x = txt.count("apple")
print(x)

# len()
aa = 'Bangladesh'
print(len(a))