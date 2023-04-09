
class Perro: 
  patas = 4  # esto es una propiedad
  def __init__(self, nombre, edad=None):
    self.nombre = nombre  # esto es una propiedad
    self.edad = edad
    
  def habla(self):
    print(f'{self.nombre} dice: Guau!') # esto es una propiedad

mi_perro = Perro('Chanchito', 1)
print(mi_perro.patas)
