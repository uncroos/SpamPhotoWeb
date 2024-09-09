import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // For image upload
import { shortenDynamicLink } from "@firebase/dynamic-links"; // For URL shortening

function FinalImage({ photos, selectedFrame }) {
  const [shortenedUrl, setShortenedUrl] = useState(null);

  useEffect(() => {
    // 1. Combine photos based on selectedFrame (use a canvas or image manipulation library)

    // 2. Upload the combined image to Firebase Storage
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + Date.now() + ".jpg"); // Unique filename
    uploadBytes(storageRef, combinedImageData)
      .then((snapshot) => {
        // 3. Get the download URL of the uploaded image
        return getDownloadURL(snapshot.ref);
      })
      .then((downloadURL) => {
        // 4. Shorten the download URL using Firebase Dynamic Links
        return shortenDynamicLink(dynamicLinks, {
          link: downloadURL,
          // ... other Dynamic Link options
        });
      })
      .then((shortUrl) => {
        setShortenedUrl(shortUrl.shortLink);
      })
      .catch((error) => {
        console.error("Error uploading or shortening URL:", error);
      });
  }, [photos, selectedFrame]);

  return (
    <div>
      {/* Display the final combined image */}
      {shortenedUrl && (
        <div>
          <QRCode value={shortenedUrl} />
          <p>Scan to download!</p>
        </div>
      )}
    </div>
  );
}
