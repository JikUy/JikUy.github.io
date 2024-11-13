// Fonction pour activer/désactiver le mode sombre
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const footer = document.querySelector('footer');
  footer.classList.toggle('dark-mode');
  const container = document.querySelector('.container');
  container.classList.toggle('dark-mode');
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

  // Boucle à travers chaque caractère du texte saisi (sans .toLowerCase() pour garder les majuscules)
  for (let char of inputText) {
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
    
    'A': 'aM.png',
    'B': 'bM.png',
    'C': 'cM.png',
    'D': 'dM.png',
    'E': 'eM.png',
    'F': 'fM.png',
    'G': 'gM.png',
    'H': 'hM.png',
    'I': 'iM.png',
    'J': 'jM.png',
    'K': 'kM.png',
    'L': 'lM.png',
    'M': 'mM.png',
    'N': 'nM.png',
    'O': 'oM.png',
    'P': 'pM.png',
    'Q': 'qM.png',
    'R': 'rM.png',
    'S': 'sM.png',
    'T': 'tM.png',
    'U': 'uM.png',
    'V': 'vM.png',
    'W': 'wM.png',
    'X': 'xM.png',
    'Y': 'yM.png',
    'Z': 'zM.png',

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
    ' ': ''
  };

  return charToPronunciationMap[char] || ''; // Retourne une chaîne vide si aucune correspondance n'est trouvée
}
