# Starten der App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Verfügbare Scripts

Vor dem ersten Starten der Application müssen die benötigten node Module mit 
### `npm install`

installiert werden.

Bei dependency errors mit der flag. \
--force (empfohlen): installiert benötigte ressourcen obwohl bereits eine Version dieser lokal gespeichert ist. 

oder 

--legacy-peer-deps : ignoriert peerDependencies. 

### `npm start`

Startet die Applikation im Entwicklungsmodus unter [http://localhost:3000](http://localhost:3000)

### `npm run build`

Bildet eine optimierte und komprimierte Version und speichert diese im /build Ordner ab.

## Testen der Applikation

Eine gebildete Version befindet sich im /app Ordner und ist bereit statisch gehostet zu werden. 

Eine einfache Methode ist mit dem node package [serve](https://www.npmjs.com/package/serve) welches mit dem Befehl
### `npm intall -g serve`

installiert und mit 

### `serve -s app`

unter [http://localhost:3000](http://localhost:3000) gestartet werden kann.

Die Anmeldedaten für den Testuser sind : \
username: m \
pw: m