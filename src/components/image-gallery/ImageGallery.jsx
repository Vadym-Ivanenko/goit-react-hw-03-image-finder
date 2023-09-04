import { ImageGalleryItem } from './imageGalleryItem/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onGetLargeImage }) => {
  return (
    <div>
      <ImageList>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onGetLargeImage={onGetLargeImage}
          />
        ))}
      </ImageList>
    </div>
  );
};
