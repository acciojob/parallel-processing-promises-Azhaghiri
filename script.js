//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

   // Function to download a single image
    function downloadImage(image) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.url;

        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
      });
    }

    // Function to download all images
    function downloadAllImages() {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = ''; // Clear previous images

      const downloadPromises = images.map(downloadImage);

      Promise.all(downloadPromises)
        .then(downloadedImages => {
          downloadedImages.forEach(img => outputDiv.appendChild(img));
        })
        .catch(error => {
          console.error(error.message);
        });
    }

    // Attach event listener to the button
    const downloadButton = document.getElementById('download-images-button');
    downloadButton.addEventListener('click', downloadAllImages);
 
