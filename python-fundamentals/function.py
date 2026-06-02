#def -> define

def double_it(num):
    result = num * 2
    #print(result)
    return result

double_it(8)
double_it(15)

def sum(n1, n2):
    res = n1 + n2
    return res

total = sum(15,6)
print("Total value is: ", total)

final = double_it(total)
print("Final value:", final)    