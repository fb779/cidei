# -*- coding: utf-8 -*- 
"""
	programa: lab1-2.py
	author: Fabian Forero
	

	1. Ingresar el valor para saber el rango a traves de  la linea de comados
		ingresamos el valor de la calificacion 
		
	2. Mostrar el tipo de calificacion
		se  muestra en linea de comandos la valoracion para el rango de la calidivacion

"""

number = input('Ingrese el numero de su calificación: ')

if (number>89):
	letter = 'S'
elif (number>79):
	letter = 'B'
elif (number>69):
	letter = 'A'
else :
	letter = 'Un caso perdido'

print "Su calificaión esta dentro del rango:", letter

