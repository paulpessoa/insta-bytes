import React, { useState, useEffect } from 'react';
import { fetchImages } from '../services/api';
import Modal from './Modal';

interface Image {
  id: number;
  imgUrl: string;
  alt: string;
  description: string;
}

const ImageGrid: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      const data = await fetchImages();
      
      setImages(data);
    };
    loadImages();
  }, []);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  return (
    <div>
      <div className="image-grid" style={{ display: 'flex', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
        {images.map((image) => (
          <article key={image.id} data-description={image.description}>
            <figure>
              <img
                src={image.imgUrl}
                alt={image.alt}
                onClick={() => handleImageClick(image)}
                style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
              />
            </figure>
          </article>
        ))}
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imgSrc={selectedImage?.imgUrl || ''}
        caption={selectedImage?.description || selectedImage?.alt || ''}
      />
    </div>
  );
};

export default ImageGrid;

