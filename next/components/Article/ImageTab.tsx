import Image from "next/image";
import { Button } from "react-aria-components";
import styles from "./ImageTab.module.scss";
import AriaImageDropzone from "../AriaImageDropzone/AriaImageDropzone";

export const ImageTab = ({ images, setImages, preview, setPreview }) => {
  const handleSelectImage = (image) => {
    setPreview(image);
  };
  return (
    <>
      <h3 style={{ marginTop: "32px" }}>Bilder und Vorschaubild auswählen</h3>
      <div
        className={`${styles.imageSelectWrapper} ${
          images.length === 0 ? styles.noImages : ""
        }`}
      >
        {images.length > 0 && (
          <div className={styles.imageGrid}>
            {images.map((image) => {
              const imageUrl = URL.createObjectURL(image);
              return (
                <Button
                  className={`${styles.imageContainer} ${
                    preview && image.name === preview.name
                      ? styles.selectedImage
                      : ""
                  }`}
                  onPress={() => {
                    handleSelectImage(image);
                  }}
                  key={image.name}
                >
                  <Image
                    src={imageUrl}
                    alt="Hinzugefügte Bilder"
                    width={100}
                    height={100}
                  />
                  <p>{image.name}</p>
                </Button>
              );
            })}
          </div>
        )}
        <div className={styles.sidePanel}>
          <AriaImageDropzone
            files={images}
            setFiles={setImages}
            className={styles.imageDropzone}
          />
          {preview && (
            <div className={styles.previewWrapper}>
              <p>Artikel-Vorschau-Bild:</p>
              <Image
                src={URL.createObjectURL(preview)}
                width={100}
                height={100}
                alt="Vorschaubild"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
