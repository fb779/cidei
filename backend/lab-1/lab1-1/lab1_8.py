# -*- coding: utf-8 -*- 
"""
 File: lab1_7.py
 Resolver una funcio cuadrtica
"""
import math

def cuadratica(**kwargs):
	a = kwargs['a']
	b = kwargs['b']
	c = kwargs['c']

	raiz = lambda x,y,z : math.sqrt ((y ** 2) - (4 * x * z))

	#x1 = (- b + raiz(a,b,c)) / (2 * a)
	x1 = (- b + (((b ** 2) - (4 * a * c))**0.5)) / (2 * a)
	#x2 = (- b - raiz(a,b,c)) / (2 * a)
	x2 = (- b - (((b ** 2) - (4 * a * c))**0.5)) / (2 * a)

	print "Valor + X: %f \nValor - X: %f\n" % (x1,x2)
	#return x1,x2


#kwargs = {'a':-1 , 'b':4 , 'c':-3}
kwargs = {'a':1 , 'b':2 , 'c':-8}
print "\nLos puntos de corte de la funcion son: "
cuadratica(**kwargs)