# Defalut arguments
def sum(num1, num2, num3 = 0):
    result = num1 + num2 + num3
    return result;

total = sum(11, 12, 5)
print(total)

# arguments
# def all_num(num1, num2, *numbers): # This will take the first two as num1, num2 and others will get into numbers
def all_num(*numbers): # This will take as many number as it called with
    print(numbers)

total = all_num(25, 22, 12, 34, 1, 5, 3)
print("all sum: ", total)