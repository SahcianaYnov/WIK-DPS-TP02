# WIK-DPS-TP01

Lancement du projet

## Pemières étapes - Environnement de développement, dépendances et port

La première chose qui a été faite, est une relecture du support.
Puis des guides pour TypeScript.

D'abord, en suivant 'How To Set Up a Node Project With Typescript'. Puis, en le modifiant pour mélanger des éléments de 'How to Setup a TypeScript + Node.js Project' (surtout pour créer les scripts de code reloading, de nettoyage et compilation, et de lancement en prod).

Pour la variable d'environnement, je suis simplement allé chercher sur Internet (notamment StackOverFlow).

Suivant cela, l'application pouvait déjà se lancer, et se relancer d'elle-même pour rester à jour, mais il manquait la route "/ping" et la gestion d'erreur.

## Requête HTTP et réponse en cas d'accès à d'autres routes

J'avais déjà une première route à "/", ainsi qu'une écoute sur le port. Alors j'ai simplement modifié le code d'exemple des guides, pour avoir un joli titre pas très utile sur "/" puis créer une nouvelle route sur "/ping" avec une requête get.

Sachant déjà utilisé TypeScript, j'ai récupéré comme la consigne le dit les headers de la requête, l'ait imprimé dans la console, puis retourné au format JSON.

Pour ce qui est de retourner une réponse vide avec un code 404 sur n'importe quelle autre route que les existantes, j'ai juste utilisé le fait qu'Express ait un middleware (Trouvable facilement sur le guide d'Express https://expressjs.com/en/guide/using-middleware.html).