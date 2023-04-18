#!/usr/bin/python3 

import socket

ports = [21, 22, 25, 3306] # We’ll try to grab banners for ports 21 (ftp), 22 (ssh), 25 (smtp), and 3306 (mysql).

for port in ports :
	s = socket.socket()
	print('This is the banner for the Port: ')
	print(f'{port}')
	s.connect(("192.168.0.8", port))
	answer = s.recv(1024)
	print(answer)
	s.close()
