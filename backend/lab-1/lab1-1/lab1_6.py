decimal = input("Ingrese el string numero decimal: ")

binario = ""

bina = bin(decimal)

print "\n%15s%15s%40s" % ("Valor", "Modulo", "Binario")

while decimal / 2 != 0:
	mod = decimal % 2
	binario = str(mod)+binario
	print "%15d | %15d | %40s" % (decimal, mod,binario)
	decimal = decimal / 2
	
	#return str(decimal) + binario
binario = str(mod) + binario
print "%15d | %15d | %40s" % (decimal, mod,binario)


print "\nEl valor binario es: ",binario

#print "El valor binario es:", bina[2:]