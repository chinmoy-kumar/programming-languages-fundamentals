# To import a function from another file

from function import double_it
from kargs_multiple import full_name as name # full_name function renamed as name
from default_args import * # to import all functions

f_name = name('Tomato', 'Potato')
result = double_it(45)
print(result)
print(f_name)