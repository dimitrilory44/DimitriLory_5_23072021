# Orinoco

L'application web sera composée de 4 pages :

    - une page de vue sous forme de liste, montrant tous les articles disponibles à la vente
    - une page "produit", qui affiche de manière dynamique l'élément sélectionné par l'utilisateur et lui permet de personnaliser le produit et de l'ajouter à son panier
    - une page "panier" contenant un résumé des produits dans le panier, le prix total et un formulaire permettant de passer une commande. Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end. Par exemple, pas de texte dans les champs date.
    - une page de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant le prix total et l'identifiant de commande envoyé par le serveur.

Dans ce site, seul une seule catégorie de produits sera présentée, les cameras vintage.


## Planification des tests unitaires

Planifiez une suite de tests unitaires pour couvrir au minimum 80% de la base de code pour le front-end. Vous devrez formaliser un plan pour atteindre ce résultat, sans obligation d'écrire ces tests. Expliquez quelles lignes seront testées, et quels "test cases" seront envisagés.


  
## Installation local du projet

Pour installer votre projet localement vous devrez tout d'abord cloner votre projet dans votre bureau :

```bash
  git clone https://github.com/dimitrilory44/DimitriLory_5_23072021.git
  cd DimitriLory_5_23072021
```

Cloner aussi la partie back-end en allant sur ce [lien](https://github.com/OpenClassrooms-Student-Center/JWDP5.git).

Et entrez la commande suivante :

```bash
  git clone https://github.com/OpenClassrooms-Student-Center/JWDP5.git backend
```

Cette commande vous permettra de créer un dossier backend contenant la partie back-end.

### Back-end

Ensuite placez-vous dans le dossier back-end et lancer la commande suivante :

```bash
  npm install
```

Les dépendances vont ainsi être charger.

Ensuite la commande suivante pour démarrer le serveur :

```bash
  node server
```

### Front-end

Revenu à la racine de votre projet, lancer les commandes suivantes :

```bash
  cd frontend
  npm install
```
    
## Hébergement

Le site est hébergé par github pages et par ce [lien](https://dimitrilory44.github.io/DimitriLory_5_23072021/).