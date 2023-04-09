
class Perro: 
  def __init__(self, nombre, edad=None):  # self, hace referencia a la propia instancia, como el `.this()` de javascript
    self.nombre = nombre
    self.edad = edad
    
  def habla(self):
    print(f'{self.nombre} dice: Guau!')
    
mi_perro = Perro('Chanchito')
print(mi_perro.nombre)

mi_perro.habla()