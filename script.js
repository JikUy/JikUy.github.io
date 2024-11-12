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
  // Character to image file name mapping (images in the same directory)
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
    ' ': 'space.png',  // Optional: space image if you want
  };

  // Return the image file path based on the character
  return charToImageMap[char] || null; // Return null if no mapping is found
}
