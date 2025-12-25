#take input in pyton
age = input("Enter you age: ")
print("Your age is:", age)

#NOTE: By default the input type is string type.
bread = input("Enter bread price: ")
butter = input("Enter butter price: ")
#print(type(bread)) # it takes the price as string type
# Total will not sum those prices because of string type, it will be concatinated.
# Here we need to do typecasting
bread_int = int(bread)
butter_int = int(butter)
total = bread_int + butter_int
print("Total price is: ", total) 

# If the input given with space seperated
# input: 19 21 32
a, b, c = (input().split())
print(a, b, c)