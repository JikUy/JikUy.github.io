let currentFookamonType = 'fookamon'; // Type de Fookàmon par défaut

// Fonction pour changer le type de Fookàmon
function setFookamonType(type) {
  currentFookamonType = type;
  updateButtonStyles();
  console.log(`Type de Fookàmon changé en: ${type}`);
}

// Fonction pour mettre à jour les styles des boutons
function updateButtonStyles() {
  // Désactive tous les boutons
  const buttons = document.querySelectorAll('.button-container button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // Active le bouton sélectionné
  const activeButton = document.getElementById(`${currentFookamonType}Btn`);
  activeButton.classList.add('active');
}

// Fonction pour traduire le texte en images et en prononciation
function translateText() {
  const inputText = document.getElementById('inputText').value;
  const imageContainer = document.getElementById('imageContainer');
  const pronunciationContainer = document.getElementById('pronunciationContainer');
  
  // Efface les images et la prononciation précédentes
  imageContainer.innerHTML = '';
  pronunciationContainer.innerHTML = '';

  let pronunciationText = ''; // Texte de prononciation

  // Boucle à travers chaque caractère du texte saisi
  for (let char of inputText.toLowerCase()) {
    const imgSrc = getImageForCharacter(char);
    const pronunciation = getPronunciationForCharacter(char);

    if (imgSrc) {
      // Crée un élément image et l'ajoute au conteneur d'images
      const img = document.createElement('img');
      img.src = imgSrc;  // Source d'image basée sur le caractère
      img.alt = char;
      imageContainer.appendChild(img);
    } else {
      console.warn(`Aucune image trouvée pour le caractère : ${char}`);
    }

    // Ajoute la prononciation du caractère au texte de prononciation
    if (pronunciation) {
      pronunciationText += pronunciation + ' ';
    }
  }

  // Affiche la prononciation dans le conteneur
  pronunciationContainer.textContent = pronunciationText.trim();
}

// Fonction pour obtenir le chemin de l'image pour un caractère en fonction du type de Fookàmon
function getImageForCharacter(char) {
  const charToImageMap = {
    fookamon: {
      'a': 'a.png',
      'b': 'b.png',
      'c': 'c.png',
      // Ajoutez les autres caractères pour Fookàmon
    },
    ancien: {
      'a': 'ancien_a.png',
      'b': 'ancien_b.png',
      'c': 'ancien_c.png',
      // Ajoutez les autres caractères pour Fookàmon Ancien
    },
    nouveau: {
      'a': 'nouveau_a.png',
      'b': 'nouveau_b.png',
      'c': 'nouveau_c.png',
      // Ajoutez les autres caractères pour Fookàmon Nouveau
    }
  };

  return charToImageMap[currentFookamonType][char] || null; // Retourne null si aucune correspondance n'est trouvée
}

// Fonction pour obtenir la prononciation pour un caractère
function getPronunciationForCharacter(char) {
  const charToPronunciationMap = {
    'a': 'hè-',
    'b': 'ba-',
    'c': 'da-',
    'd': 'bo-',
    'e': 'é-',
    'f': 'è-',
    'g': 'la-',
    'h': 'lo-',
    'i': 'pi-',
    'j': 'pa-',
    'k': 'je-',
    'l': 'ja-',
    'm': 'mo-',
    'n': 'mu-',
    'o': 'do-',
    'p': 'ké-',
    'q': 'ka-',
    'r': 'ri-',
    's': 'zi-',
    't': 'ou-',
    'u': 'ille-',
    'v': 'oui-',
    'w': 'oua-',
    'x': 'ak-',
    'y': 'ik-',
    'z': 'oy-',
    '0': 'ouss-',
    '1': 'ouz-',
    '2': 'ouk-',
    '3': 'oup-',
    '4': 'oud-',
    '5': 'oub-',
    '6': 'oul-',
    '7': 'out-',
    '8': 'ouf-',
    '9': 'ouve-',
    ' ': ' -'
  };

  return charToPronunciationMap[char] || ''; // Retourne une chaîne vide si aucune correspondance n'est trouvée
}
