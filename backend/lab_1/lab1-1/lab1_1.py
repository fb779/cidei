# -*- coding: utf-8 -*- 
"""
	programa: lab1_1.py
	author: Fabian Forero
	calcular la tasa de impuesto de un alimento

	1. declracion de variables
		tax 					- tasa de impuesto
		tax_one 				- tasa de impuesto adicional
	2. Entradas
		valordel alimento
		numero de aliments
	3. Computaciones
		tasa de entrada = suma de numero de alimentos tasa + tax_one
	4. Salida
		el calculo de los elemntos compados

"""

# Declaracion de Constantes
TAX = 0.16
TA_ONE = 0.03

# Entradas deteclado
food = input('Ingrese el valor del alimento: ')
amount_food = input('ingrese la cantidad de alimentos: ')

# Computaciones
total = ((food * amount_food) * (TAX + TA_ONE))+(food * amount_food)

# Salida

print "el total de los alimentos es:", str(total)

