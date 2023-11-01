export const convertImageToBase64 = async (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => resolve(event.target!.result as string)
    reader.onerror = (error) => reject(error)
    reader.readAsDataURL(blob)
  })
}
