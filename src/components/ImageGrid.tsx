import React, { useState, useEffect } from 'react';
import { fetchImages } from '../services/api';
import ImageModal from './ImageModal';

interface Image {
  _id: string;
  imgUrl: string;
  alt: string;
  description: string;
  tags?: string[];
  photographer?: string;
  location?: string;
  uploadDate?: string;
  fileSize?: number;
}

const ImageGrid: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  console.log(selectedImage?._id)
  useEffect(() => {
    const loadImages = async () => {
      const data = await fetchImages();
      setImages(data);
    };
    loadImages();
  }, []);

  const playMeow = (image: Image) => {
    const audio = new Audio(`sounds/${image?._id}.mp3`);
    audio.play().catch(error => console.error('Erro ao tocar o áudio:', error));
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    if (image) {
      console.log(image._id)
      playMeow(image);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map(image => (
          <div
            key={image._id}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.imgUrl}
              alt={image.alt}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default ImageGrid;

