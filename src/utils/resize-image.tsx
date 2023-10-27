export const resizeImage = async (file: File, maxWidth: number = 600, maxHeight: number = 900): Promise<Blob> => {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
        const canvas = document.createElement('canvas');
        let width = image.width;
        let height = image.height;

        if (width > height) {
            if (width > maxWidth) {
                height = Math.round((height * maxWidth) / width);
                width = maxWidth;
            }
        } else {
            if (height > maxHeight) {
                width = Math.round((width * maxHeight) / height);
                height = maxHeight;
            }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx!.drawImage(image, 0, 0, width, height);

        canvas.toBlob((blob) => {
            resolve(blob!);
        }, file.type);
    };
    image.src = URL.createObjectURL(file);
  });
}
