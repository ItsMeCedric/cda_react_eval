#!/bin/bash

# Liste des composants à créer 
components=("Header" "Footer" "Card" "SignInForm" "SignUpForm" "MovieForm" "Layout" "Nav")

# Liste des pages à créer
pages=("Home" "Login" "Register" "MovieDetails" "MovieAdd" "MovieEdit" "Movies")

# Liste des contexts à créer
contexts=("AuthContext" "MessageContext" "MoviesContext")

# Liste des services à créer
services=("authService" "movieService")


# BOUCLE COMPOSANTS
for component in "${components[@]}"; do

  # Création des dossiers pour chaque composant
  mkdir -p "src/components/$component"

  # Création du fichier <composant>.jsx avec initialisation du composant
  cat <<EOL > "src/components/$component/$component.jsx"
import styles from './$component.module.css';

const $component = () => {
  return <div>$component</div>;
};

export default $component;
EOL

  # Création du fichier <composant>.module.css vide
  touch "src/components/$component/$component.module.css"

done # fin de boucle
echo "1_ composants créés"


# BOUCLE PAGES
for page in "${pages[@]}"; do
  
  # Création des dossiers pour chaque page
  mkdir -p "src/pages/$page"

  # Création du fichier <page>.jsx
    cat <<EOL > "src/pages/$page/$page.jsx"
import styles from './$page.module.css';

const $page = () => {
  return <div>$page</div>;²
};

export default $page;
EOL

  # Création du fichier <page>.module.css vide
  touch "src/pages/$page/$page.module.css"

done # fin de boucle
echo "2_ pages créées"


# BOUCLE CONTEXTS
for context in "${contexts[@]}"; do
  
  # Création des dossiers pour chaque context
  mkdir -p "src/context/$context"

  # Création du fichier <context>.jsx vide
    cat <<EOL > "src/context/$context/$context.jsx"
import { $context } from "../../services/$context";
import { createContext } from "react";

export const $context = createContext(new $context());
EOL

  # Création du fichier <context>.jsx
  touch "src/context/$context/$context.jsx"

done # fin de boucle
echo "3_ contexts créés"

echo "Structure de dossiers et fichiers créée avec succès !"