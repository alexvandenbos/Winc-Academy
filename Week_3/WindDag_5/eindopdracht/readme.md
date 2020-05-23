- GET: Verkrijg de (initiële) lijst met taken van de database.
- POST: Update de takenlijst met 1 nieuwe taak. 
Stuur alleen `{"description": "blah", "done": true}`
**Firebase genereert zelf een hash (een id) voor je taak.**
- DELETE: Verwijder een taak uit de database. Gebruik de hash als identifier.
- Maak een file genaamd `api-client.js` zoals je hebt geleerd in de afgelopen week voor al je requests.