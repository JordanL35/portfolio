# Portfolio - Notes

## Objectif du portfolio

### Objectif Principal

Ce portfolio à pour objectif de m'aider à trouver une entreprise qui me fera confiance et qui m'accompagnera dans ma montée en compétences.

### Objectif Secondaire

- > Garder une vision claire du projet
- > Noter les décisions techniques
- > Suivre les améliorations

## Vision du projet

- > Produire en mobile first
- > UI simple et lisible (priorités users)
- > Montrer mes compétences
- > Avoir un Mode éco
- > Avoir un code propre et maintenable

### Structure du projet

- > HTML
    - Structure claire par sections
    - Navigation simple (ancres)
    - Sémantique respectée
- > CSS
    - communs.css : base + variables
    - sections.css : layout des sections
    - mode-eco.css : optimisation
- > JS
    - menu mobile
    - animation stats
    - gestion mode éco (localStorage)

## Mode éco

Le mode éco de mon portfolio a été mis en place dans un objectif d’apprentissage et d’expérimentation autour de l’écoconception web. Il permet d’illustrer visuellement les différences entre une version optimisée et non optimisée.

Cependant, toutes les ressources étant chargées dès le départ, ce mode n’a pas d’impact significatif sur l’empreinte carbone réelle du site.

Dans un contexte réel, une approche éco-conçue consisterait à optimiser le site dès sa conception plutôt que de proposer un mode alternatif.

### Objectifs

- > Réduire :
    - animations
    - effets visuels
    - poids des images
- > Implémentation :
    - simplification des cartes
    - remplacement image .WebP moins volumineuse

## Design

### Choix

- > Choix des couleurs :
    - --bg: #1D3C45 : Fond légèrement sombre, n'agresse pas les yeux.
    - --bg-card: #2a4d59 : Teinte légèrement différente du background spécifique aux cartes.
    - --text: #F1CE94 : Beige agréable pour la lecture avec une teinte plus prononcée pour la différencier d'un simple texte.
    - --text-muted: #F1D7AB : Idem que la précédente avec une teinte plus claire.
    - --accent: #e97a47 : Pour forcer le regard sur des éléments importants.
- > Test de ratio avec [Contrast Finder](https://app.contrast-finder.org/) :
    - --bg: #1D3C45
    - --text: #F1CE94 (ratio : 7.84)
    - --text-muted: #F1D7AB (ratio : 8.43)
    - --accent: #e97a47 (ratio : 4.11)
- > Interface minimaliste pour l'utilisateur.

## Piste d'améliorations

- > Images en SVG plutôt qu'en WebP (sauf celles où il y a beaucoup de variations de couleurs ex: cheveux, yeux, ...)
- > Lazy loading images (si ajout de plusieurs images à l'avenir)
- > Si plusieurs images à l'avenir, les regrouper avec la même classe. (il faudra modifier le JS en conséquence)
- > Trouver une couleur qui pourrait être "plus" idéale pour la variable (--accent) dont le ratio doit être de 7 minimum.

## Notes

### Notes Techniques :

- > Choix de langages :
    - HTML :
        - Améliore l'accessibilité
        - Réduire le JS
    - CSS :
        - Meilleur contrôle des performances
        - Réduction du poids global du site
        - Mise en place de variables CSS pour : typographie / espacements / couleurs
        - Utilisation de clamp() pour un design responsive sans multiplier les media queries
    - JS :
        - Interaction utilisateur (menu burger)
        - Mode éco (désactivation des animations)
        - Animation contrôlée (stats uniquement hors mode éco)
        
        ___
        #### A savoir : J'ai utilisé du JS pour m'entraîner sur le langage mais j'ai conscience que son utilisation alourdi le code et génère des allers-retours énergivores.
        ___

- > Démarche éco-conception :
    - Limitation du JavaScript au strict nécessaire
    - Réduction du DOM
    - Désactivation des animations en mode éco
    - Utilisation de polices système ou légères
    - Structure simple
- > Choix volontaire de ma part de ne pas factoriser le contenu du fichier 'communs.css'

### Sources d'aides :

- > Pour les informations sur les différentes améliorations ne pas hésitez à se renseigner sur :
    - [W3Schools](https://www.w3schools.com/)
    - [MDN](https://developer.mozilla.org/fr/)
    - [Contrast Finder](https://app.contrast-finder.org/)