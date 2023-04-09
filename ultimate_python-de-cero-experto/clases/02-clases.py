
class Perro: 
  def habla(self):  # El parámetro self es simplemente una forma de referirse al objeto actual dentro de la definición de la clase.
    print('Guau')
    
mi_perro = Perro() 

print(type(mi_perro))
mi_perro.habla()
print(isinstance(mi_perro, Perro))  # isinstance: verifica si el objeto que le pasamos es una instancia de la clase que tambien le pasemos. 
