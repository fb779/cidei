# -*- coding: utf-8 -*- 
"""
 File: lab1_7.py
 CLase de manejo de estudiantes
"""
import random
class Person(object):
	"""Constuctor Persson"""
	def __init__(self, name, cc, age):
		""" Todo el puntaje se inicia n 0 """
		self._name = name
		self._cc = cc
		self._age = age

	def getName(self):
		return self._name

	def getAge(self):
		return self._age

	def getDocument(self):
		return self._cc 

	def __str__(self):
		return "Nombre: %s, Documento de identidad: %s, Edad: %s" % (self._name, str(self._cc), str(self._age))

class Student(Person):
	"""Constuctor Student"""
	
	def __init__(self, name, cc, age, numassig):
		
		mat = ['Matematicas', 'Sociales', 'Filosofia', 'Informatica', 'Etica', 'Ciencias', 'Geografia', 'Ingles', 'Literatura', 'Fisica', 'Quimica', 'Botanica', 'Calculo', 'Comportamiento']
		mlen = len(mat)
		self._assigments = []
		self._scores = []
		for i in xrange(numassig):
			self._assigments.append(mat[random.randrange(mlen)])
			#self._assigments.append(mat[i])
			self._scores.append(0)
		super(Student, self).__init__(name, cc, age)
	
	def getAssigment(self, i):
		return self._assigments[i - 1]

	def getAllAssigment(self):
		print self._assigments

	def setScore(self, i, score):
		self._scores [i - 1] = score

	def getScore(self, i):
		return self._scores[i - 1]

	def getAverage(self):
		sum = reduce(lambda x,y: x + y, self._scores)
		return sum / len(self._scores)

	def __str__(self):
		return "Nombre: %s, Documento de identidad: %s, Edad: %s, Asignaturas: %s, Puntajes: %s" % (self._name, str(self._cc), str(self._age), str(self._assigments), self.join(map(str, self._scores))
		#return "Nombre: " + self._name + "\n Puntaje: " + " "+self.join(map(str, self._scores))


class Teacher(Person):
	"""docstring for Teache"""
	def __init__(self, name, cc, age, profession,numberId):
		self._profession = profession
		self._numberId = numberId
		super(Teacher, self).__init__(name, cc, age)

	def getProfession(self):
		return self._profession

	def getNumberId(self):
		return self._numberId

	def __str__(self):
		return "Nombre: %s, Documento de identidad: %s, Edad: %s, Profesion: %s, Tarjeta Profecional: %s" % (self._name, str(self._cc), str(self._age), self._profession, str(self._numberId))		