# -*- coding: utf-8 -*- 
"""
 File: lab1_7.py
 CLase de manejo de estudiantes
"""

class Student(object):
	"""Constuctor Student"""
	def __init__(self, name, age, number):
		""" Todo el puntaje se inicia n 0 """
		self._name = name
		self._age = age
		self._scores = []
		for count in xrange(number):
			self._scores.append(0)

	def getName(self):
		return self._name

	def getAge(self):
		return self._age

	def setScore(self, i, score):
		self._scores [i - 1] = score

	def getScore(self, i):
		return sel._scores[i - 1]

	def geAverage(self):
		sum = reduce(lambda x,y: x + y, self._scores)
		return sum / len(self._scores)

	def __str__(self):
		return "Nombre: " + self._name + "\n Puntaje: " + " "self.join(map(str, self._scores))


