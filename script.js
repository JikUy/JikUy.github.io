// Function to translate text into images
function translateText() {
  const inputText = document.getElementById('inputText').value;
  const imageContainer = document.getElementById('imageContainer');
  
  // Clear previous images
  imageContainer.innerHTML = '';

  // Loop through each character in the input text
  for (let char of inputText.toLowerCase()) {
    // Check if the character is alphanumeric or a special character
    const imgSrc = getImageForCharacter(char);

    if (imgSrc) {
      // Create an image element and append it to the image container
      const img = document.createElement('img');
      img.src = imgSrc;  // Image source based on the character
      img.alt = char;
      imageContainer.appendChild(img);
    } else {
      console.warn(`No image found for character: ${char}`);
    }
  }
}

// Function to return the image path for a character
function getImageForCharacter(char) {
  // Character to image file name mapping
  const charToImageMap = {
    'a': 'img/a.png',
    'b': 'img/b.png',
    'c': 'img/c.png',
    'd': 'img/d.png',
    'e': 'img/e.png',
    'f': 'img/f.png',
    'g': 'img/g.png',
    'h': 'img/h.png',
    'i': 'img/i.png',
    'j': 'img/j.png',
    'k': 'img/k.png',
    'l': 'img/l.png',
    'm': 'img/m.png',
    'n': 'img/n.png',
    'o': 'img/o.png',
    'p': 'img/p.png',
    'q': 'img/q.png',
    'r': 'img/r.png',
    's': 'img/s.png',
    't': 'img/t.png',
    'u': 'img/u.png',
    'v': 'img/v.png',
    'w': 'img/w.png',
    'x': 'img/x.png',
    'y': 'img/y.png',
    'z': 'img/z.png',
    '0': 'img/0.png',
    '1': 'img/1.png',
    '2': 'img/2.png',
    '3': 'img/3.png',
    '4': 'img/4.png',
    '5': 'img/5.png',
    '6': 'img/6.png',
    '7': 'img/7.png',
    '8': 'img/8.png',
    '9': 'img/9.png',
    '$': 'img/dollar.png',
    ' ': 'img/space.png',  // Optional: space image if you want
  };

  // Return the image file path based on the character
  return charToImageMap[char] || null; // Return null if no mapping is found
}
