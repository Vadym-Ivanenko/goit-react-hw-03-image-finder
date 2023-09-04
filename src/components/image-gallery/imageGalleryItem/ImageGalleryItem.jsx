import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, tags, largeImageURL },
  onGetLargeImage,
}) => {
  return (
    <GalleryItem className="gallery-item">
      <GalleryImg
        src={webformatURL}
        alt={tags}
        onClick={() => onGetLargeImage(largeImageURL)}
      />
    </GalleryItem>
  );
};
