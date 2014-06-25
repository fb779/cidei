# Importar modulo completo de Random
import random

smaller = input("Ingrese un numero pequeno: ")
large = input("Ingrese un numero grande o mayor: ")

my_random = random.randint(smaller, large)

print "Mi numero aleatorio es: ",my_random

coun = 0

while True:
	coun += 1
	
	user_number = int(raw_input("Ingrese un numero para comparar: "))

	if user_number < my_random:
		print "es un numero pequeno ",user_number
	elif user_number > my_random:
		print "es un numero grande ",user_number
	else:
		if user_number == "":
			False
			print "numero vacioo"
		else:
			print "lo tienes en " + coun 
