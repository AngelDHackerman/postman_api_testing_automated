#!/usr/bin/python3 

import socket # sockets, interactua con los sockets de la red

s = socket.socket()

s.connect(("127.0.01", 22))  

answer = s.recv(1024) # Se recibe la respuesta del servidor, con un tamaño máximo de 1024 bytes. La respuesta es guardada en la variable answer.

print(answer) 

s.close()