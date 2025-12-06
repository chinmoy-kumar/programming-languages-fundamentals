balance = 3000 # global scope variable

def buy_things(item, price):
    dream_phone = 'xphone'
    # balance = 600 
    # local scope variable
    # this is only works inside this function and it is seperate fromo the global scope
    # you can access global variable without using the global keyword
    # but if you want to modify a global variable, you have to use the global keyword

    global balance # using global keyword to modify the global variable
    print(f'Previous balance value {item}', balance)
    balance = balance - price
    print(f'After balance value {item}', balance)

buy_things('sunglass', 200)
print('global balance after buy', balance)