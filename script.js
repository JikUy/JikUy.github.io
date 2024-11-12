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
    'a': 'img/a.jpg',
    'b': 'img/b.jpg',
    'c': 'img/c.jpg',
    'd': 'img/d.jpg',
    'e': 'img/e.jpg',
    'f': 'img/f.jpg',
    'g': 'img/g.jpg',
    'h': 'img/h.jpg',
    'i': 'img/i.jpg',
    'j': 'img/j.jpg',
    'k': 'img/k.jpg',
    'l': 'img/l.jpg',
    'm': 'img/m.jpg',
    'n': 'img/n.jpg',
    'o': 'img/o.jpg',
    'p': 'img/p.jpg',
    'q': 'img/q.jpg',
    'r': 'img/r.jpg',
    's': 'img/s.jpg',
    't': 'img/t.jpg',
    'u': 'img/u.jpg',
    'v': 'img/v.jpg',
    'w': 'img/w.jpg',
    'x': 'img/x.jpg',
    'y': 'img/y.jpg',
    'z': 'img/z.jpg',
    '0': 'img/0.jpg',
    '1': 'img/1.jpg',
    '2': 'img/2.jpg',
    '3': 'img/3.jpg',
    '4': 'img/4.jpg',
    '5': 'img/5.jpg',
    '6': 'img/6.jpg',
    '7': 'img/7.jpg',
    '8': 'img/8.jpg',
    '9': 'img/9.jpg',
    '$': 'img/dollar.jpg',
    ' ': 'img/space.jpg',  // Optional: space image if you want
  };

  // Return the image file path based on the character
  return charToImageMap[char] || null; // Return null if no mapping is found
}
