# -*- coding: utf-8 -*- 
"""
 File: lab1_7.py
 Resolver una funcio cuadrtica
"""
## Clase AddresBook
class AddressBook(object):
	
	def __init__(self):
		"""constructor de la clase en Python"""
		self._data_store = []

	def add_contact(self, contact):
		""" Adicionando contacto """
		self._data_store.append(contact)

	def all_contactse(self):
		return	self._data_store

	def print_contacts(self):
		for contact in self._data_store:
			print contact
		
## Clase Contact		
class Contact(object):
	def __init__(self, name, email='',phone=''):
		"""constructor de la clase en Python"""
		self.name = name
		self.email = email
		self.phone = phone

	def __str__(self):
		return "%s - %s - %s" % (self.name, self.email, self.phone)

## Clase xxxx
class Bussines(Contact):
	"""Constructor de la clase"""
	def __init__(self, name, email='',phone=''):
		self._name = name
		self._email = email
		self._phone = phone
		self._employees = []

	def add_employee(self, employee):
		self._employees.append(employee)

	def all_empployees():
		#metodo para mostrar todoslos empleados en la lista
		return self._employees

	def print_employees(self):
		for e in self._employees:
			print e
	
	## representa 
	def __str__(self):
		return "Tarjeta de negocios para empleados %s - %s - %s" % (self._name, self._email, self._phone)















