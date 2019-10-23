# Beschreibung
PoC einer Verleihplattform
Diese Anwendung ist im Rahmen einer WebProgrammierungs-Vorlesung an der DHBW Stuttgart entwickelt worden.
Die Anwendung verfügt über die CRUD-Operationen.

#Quickstart
1. git Projekt herunterladen: https://github.com/AlexanderElster/SIOP.git
2. Projekt in VS-Code öffnen
3. npm install
3. express install
4. npm start
5. http://localhost:3000 im Browser öffnen

#Architektur
In dieser Anwendung wird HTML, CSS und JS verwendet.
Das FrontEnd und das BackEnd interagieren miteinander mittels Fetch API.
Die HTML-Elemente der Webseite verwenden entsprechende CSS-Dateien, um ein ansprechendes Design darzustellen.

#Datenmodell

##Benutzer:
{ "id": 1, "name": "Herbert", "passwort":"12345", "coins": 12}

##Eintrag:
{"id" : 1, "bezeichnung" : "Hollandrad", "beschreibung" : "Ein super tolles Hollandrad", "ort" : "Stuttgart-Ost", "benutzer" : "Herbert", "kategorie" : "mobilität"}

#Inhalt
REST API mit Node.js und Express

#Frontend