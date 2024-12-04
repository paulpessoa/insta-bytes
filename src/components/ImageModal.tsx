import React from 'react';

interface Image {
    _id: number;
    imgUrl: string;
    alt: string;
    description: string;
    tags?: string[];
    photographer?: string;
    location?: string;
    uploadDate?: string;
    fileSize?: number;
}

const ImageModal: React.FC<{
    image: Image | null;
    onClose: () => void;
}> = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={onClose}>
            <div
                className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative">
                    <button
                        className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
                        onClick={onClose}
                    >
                        ×
                    </button>
                    <img
                        src={image.imgUrl}
                        alt={image.alt}
                        className="w-full h-auto"
                    />
                </div>
                {image.description && (
                    <p className="p-4 text-gray-700">
                        {image.description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ImageModal;

