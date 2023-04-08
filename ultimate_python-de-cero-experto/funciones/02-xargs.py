
def suma(*numeros):  # ? *numeros, Esto es el "Xargs", se pasan cuantos parametros sean necesarios y luego se tomaran en la funcion con un loop for
  resultado = 0
  for numero in numeros:
    resultado += numero
  print(resultado)
  
# La funcion suma(), suma el valor de todos los parametros que se le pasen.
  
suma(2, 5, 7)
suma(3, 2, 62, 100)
suma(10, 32, 33, 90, 15)