import yaml

#Llegir el fitxer YAML
with open("Mark_Gras_app.yml","r") as file:
   data = yaml.safe_load(file)

#Mostrar informació llegida
print("Nom de la tasca:", data[0]['name'])
print("Hosts afectats:", data[0]['hosts'])
print("Llista de tasques:")

for task in data[0]['tasks']:
   print(f"-{task['name']}")
