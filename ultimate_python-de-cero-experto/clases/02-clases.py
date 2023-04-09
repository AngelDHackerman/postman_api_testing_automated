
class Perro: 
  def habla(self):  # Self es una convencion, Todos los metodos tienen que tenerlo. Tambien es el equivalente a `.This` de javascript
    print('Guau')
    
mi_perro = Perro() 

print(type(mi_perro))
mi_perro.habla()
print(isinstance(mi_perro, Perro))  # isinstance: verifica si el objeto que le pasamos es una instancia de la clase que tambien le pasemos. 
