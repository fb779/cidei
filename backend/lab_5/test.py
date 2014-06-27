import unittest
from calculator import Calculator

class TDDinCalculator(unittest.TestCase):

	def test_calculator_add(self):
		call = Calculator()

		result = call.add(2,3)

		self.assertEqual(5, result)

	def test_calculator_add_string(self):
		self.calc = Calculator()
		self.assertRaises(ValueError, self.call.add, 'two', 'three')

	def test_calculator_add_one(self):
		self.calc = Calculator()
		self.assertRaises(ValueError, self.call.add, 2, 't')