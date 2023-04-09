
class Perro: 
  patas = 4  
  def __init__(self, nombre, edad=None):
    self.nombre = nombre  
    self.edad = edad
  
  @classmethod
  def habla(cls):# cls es un parámetro que se utiliza en los métodos de clase para hacer referencia a la clase en sí misma. Cuando un método está decorado con el decorador @classmethod, el primer parámetro del método se convierte automáticamente en cls en lugar de self.
    print('Guau!') 
    
  @classmethod
  def factory(cls):  # Este es el factory method 
    return cls ('Chanchito feliz', 4)

Perro.habla()
perro1 = Perro('chanchito', 2)
perro2 = Perro('Felipe', 3)
perro3 = Perro.factory()  # Aqui invocamos al factory method
print(perro3.edad, perro3.nombre)


# En resumen, los factory methods son una técnica de programación que puede mejorar la modularidad, 
# la flexibilidad y la mantenibilidad del código al proporcionar una capa adicional de abstracción 
# en el proceso de creación de objetos. 