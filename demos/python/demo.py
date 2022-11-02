a = 6
b = 7
x = a * b
print(x)
people = ["Kevin", "Nina", "Dandy"]  # array is called a "list"
colors = {  # a simple object is called a "dict"
    "white": "FFFFFF",
    "red": "FF0000",
    "black": "000000",
}
# COMMENT
LIMIT = 21
age = 20

if age >= LIMIT:
    print("GOOD TO GO")
else:
    print("GOT TO WAIT")
### FUNCTION ###


def add(a, b):
    return a + b


print(add(1, 2))
### CLASSES ###


class Car:
    def __init__(self, name):  # CONSTRUCTOR
        self.name = name  # "this" is "self"
        self.miles = 0

    def drive(self, distance):
        self.miles += distance

c = Car("mcqueen")
print(c.miles)
c.drive(60)
c.drive(90)
print(c.miles)

