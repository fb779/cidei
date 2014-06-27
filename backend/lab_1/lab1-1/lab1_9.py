# -*- coding: utf-8 -*- 
"""
 File: lab1_7.py
 Resolver una funcio cuadrtica
"""
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
		
class Contact(object):
	def __init__(self, name, email='',phone=''):
		"""constructor de la clase en Python"""
		self.name = name
		self.email = email
		self.phone = phone

	def __str__(self):
		return "%s - %s - %s" % (self.name, self.email, self.phone)
		