Redis Installation
1.	For Windows
	Enable WSL from "Turn Windows features on or off settings"
	Restart the machine
	Install Ubuntu20.04 from Windows Store
	Open Ubuntu and setup name and password
	Run the following commands:
		sudo apt-get update
		sudo apt-get upgrade
		sudo apt-get install redis-server
		sudo service redis-server restart
		redis-cli
2. For Linux
	Run the following commands:
		sudo apt-get install redis-server
		sudo service redis-server restart
		redis-cli
For more information visit on:- https://stackoverflow.com/questions/6476945/how-do-i-run-redis-on-windows


