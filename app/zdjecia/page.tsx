"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const photos = [
  "/galeria/galeria1.jpg",
  "/galeria/galeria2.jpg",
  "/galeria/galeria3.jpg",
  "/galeria/galeria4.jpg",
  "/galeria/galeria5.jpg",
  "/galeria/galeria6.jpg",
  "/galeria/galeria7.jpg",
  "/galeria/galeria8.jpg",
  "/galeria/galeria9.jpg",
  "/galeria/galeria10.jpg",
  "/galeria/galeria11.jpg",
  "/galeria/galeria12.jpg",
  "/galeria/galeria13.jpg",
  "/galeria/galeria14.jpg",
  "/galeria/galeria15.jpg",
  "/galeria/galeria16.jpg"
];

const Zdjecia = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(
    () => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (selectedImage) {
          const currentIndex = photos.indexOf(selectedImage);
          if (event.key === "ArrowRight") {
            const nextIndex = (currentIndex + 1) % photos.length;
            setSelectedImage(photos[nextIndex]);
          } else if (event.key === "ArrowLeft") {
            const prevIndex =
              (currentIndex - 1 + photos.length) % photos.length;
            setSelectedImage(photos[prevIndex]);
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    },
    [selectedImage]
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (selectedImage) {
        const currentIndex = photos.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % photos.length;
        setSelectedImage(photos[nextIndex]);
      }
    },
    onSwipedRight: () => {
      if (selectedImage) {
        const currentIndex = photos.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
        setSelectedImage(photos[prevIndex]);
      }
    },
    trackMouse: true
  });

  useEffect(
    () => {
      if (selectedImage) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }

      return () => {
        document.body.style.overflow = "auto";
      };
    },
    [selectedImage]
  );

  return (
    <div className="grid grid-cols-1 gap-6 my-12">
      <div className="w-full flex justify-center">
        <Image
          src={photos[0]}
          alt="Obrazek 1"
          layout="responsive"
          width={1200}
          height={800}
          className="object-cover w-full h-auto"
          onClick={() => openModal(photos[0])}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.slice(1).map((photo, index) => {
          const isPortrait = photo.includes("pionowe");
          return (
            <div
              key={index}
              className={`flex justify-center ${isPortrait
                ? "col-span-1"
                : "col-span-1 sm:col-span-1 lg:col-span-1"}`}
            >
              <Image
                src={photo}
                alt={`Obrazek ${index + 2}`}
                width={isPortrait ? 300 : 400}
                height={isPortrait ? 400 : 300}
                className={`object-cover ${isPortrait ? "h-auto" : "h-96"}`}
                onClick={() => openModal(photo)}
              />
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedImage &&
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
          {...handlers}
        >
          <Image
            src={selectedImage}
            alt="Wybrane zdjęcie"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>}
    </div>
  );
};

export default Zdjecia;
