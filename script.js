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

// Fonction pour obtenir le chemin de l'image pour un caractère
function getImageForCharacter(char) {
  const charToImageMap = {
    'a': 'a.png',
    'b': 'b.png',
    'c': 'c.png',
    'd': 'd.png',
    'e': 'e.png',
    'f': 'f.png',
    'g': 'g.png',
    'h': 'h.png',
    'i': 'i.png',
    'j': 'j.png',
    'k': 'k.png',
    'l': 'l.png',
    'm': 'm.png',
    'n': 'n.png',
    'o': 'o.png',
    'p': 'p.png',
    'q': 'q.png',
    'r': 'r.png',
    's': 's.png',
    't': 't.png',
    'u': 'u.png',
    'v': 'v.png',
    'w': 'w.png',
    'x': 'x.png',
    'y': 'y.png',
    'z': 'z.png',
    '0': '0.png',
    '1': '1.png',
    '2': '2.png',
    '3': '3.png',
    '4': '4.png',
    '5': '5.png',
    '6': '6.png',
    '7': '7.png',
    '8': '8.png',
    '9': '9.png',
    ' ': 'space.png'
  };

  return charToImageMap[char] || null; // Retourne null si aucune correspondance n'est trouvée
}

// Fonction pour obtenir la prononciation pour un caractère
function getPronunciationForCharacter(char) {
  const charToPronunciationMap = {
    'a': 'hè',
    'b': 'ba',
    'c': 'da',
    'd': 'dé',
    'e': 'è',
    'f': 'èf',
    'g': 'jé',
    'h': 'aïch',
    'i': 'i',
    'j': 'ji',
    'k': 'ka',
    'l': 'èl',
    'm': 'èm',
    'n': 'èn',
    'o': 'ô',
    'p': 'pé',
    'q': 'ku',
    'r': 'èr',
    's': 'ès',
    't': 'té',
    'u': 'u',
    'v': 'vé',
    'w': 'doublevé',
    'x': 'iks',
    'y': 'igrec',
    'z': 'zèd',
    '0': 'zéro',
    '1': 'un',
    '2': 'deux',
    '3': 'trois',
    '4': 'quatre',
    '5': 'cinq',
    '6': 'six',
    '7': 'sept',
    '8': 'huit',
    '9': 'neuf',
    ' ': ' '
  };

  return charToPronunciationMap[char] || ''; // Retourne une chaîne vide si aucune correspondance n'est trouvée
}
