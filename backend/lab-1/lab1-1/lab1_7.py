# -*- coding: utf-8 -*- 
"""
 File: lab1_7.py
 Generador de sentencias aleatorias copalabras

"""

import random

articles = ("Un", "El", "Ella", "Nosotros", "Yo",)

nouns = ("Mujer", "Hombre", "Carro", "Moto", "Perro", "Avion",)

verbs = ("Gustar", "Hablar", "Comer", "Decir",)

prepositions = ("con", "por",)

def sentences():

	return nounPhrase() + " " + verbPhrase()

def nounPhrase():
	
	return random.choice(articles) + " " + random.choice(nouns)

def verbPhrase():
	
	return random.choice(verbs) + " " + nounPhrase() + " " + prepositionalPhrase()

def prepositionalPhrase():
	
	return random.choice(prepositions) + " " + nounPhrase()

def main():
	
	number = input("Ingrese el número de  frases a construir: ")
	for count in xrange(number):
		print sentences()

main()


