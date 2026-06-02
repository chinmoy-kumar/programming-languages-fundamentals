# Ref. -> https://docs.python.org/3/py-modindex.html
# Modules are the collection of related functions
# For using built-in modules import them at first
from math import *
from random import *
from time import sleep

result = ceil(3.0001)
print(result)
result2 = floor(3.9999)
print(result2)
print(random())
print(randint(1, 100)) # prints a random integer number in that range
sleep(3) # it will wait or sleep for 3 seconds before proceed
print(choice(['A', 'B', 'C', 'D', 'E']))
