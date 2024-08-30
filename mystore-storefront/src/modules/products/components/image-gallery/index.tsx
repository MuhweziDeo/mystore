"use client"
import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { useState } from "react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<MedusaImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (image: MedusaImage) => {
    setSelectedImage(image)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setSelectedImage(null)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <button
          onClick={goToPrev}
          className="absolute left-0 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
        >
          &larr;
        </button>

        <div
          className="flex overflow-hidden w-full"
          onClick={() => openModal(images[currentIndex])}
        >
          <Container
            className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
            id={images[currentIndex].id}
          >
            <Image
              src={images[currentIndex].url}
              priority
              className="absolute inset-0 rounded-rounded cursor-pointer"
              alt={`Product image ${currentIndex + 1}`}
              fill
              sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
              style={{
                objectFit: "cover",
              }}
            />
          </Container>
        </div>

        <button
          onClick={goToNext}
          className="absolute right-0 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
        >
          &rarr;
        </button>
      </div>

      {/* Custom Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative w-full h-full max-w-4xl max-h-[80vh] p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 z-40"
            >
              &times;
            </button>
            {selectedImage && (
              <Image
                src={selectedImage.url}
                alt="Expanded view"
                fill
                style={{ objectFit: "contain" }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
