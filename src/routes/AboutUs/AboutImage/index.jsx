import React, { useState } from 'react';
import './AboutImage.scss';
import Image48 from '../../../assets/imges/48.png';
import Image49 from '../../../assets/imges/49.png';
import Image50 from '../../../assets/imges/50.png';
import Image51 from '../../../assets/imges/rectangle.svg';
import Image1945 from '../../../assets/imges/19450.svg';
import Image1960 from '../../../assets/imges/19600.svg';
import Image1980 from '../../../assets/imges/19840.svg';
import Imageold from '../../../assets/imges/19370.svg';
import Image1990 from '../../../assets/imges/19900.svg';
import Image52 from '../../../assets/imges/lastimage.png';
import Rotate from 'react-reveal/Rotate';
import Slider from 'react-slick';

export default function AboutImage() {


  const sliderRef = React.useRef();
  const [displayedImages, setDisplayedImages] = useState([
    { id: 1, src: Image48, alt: "Image48" },
    { id: 2, src: Imageold, alt: "Imageold" }, // Add this line
    { id: 3, src: Image49, alt: "Image49" },
    { id: 4, src: Image50, alt: "Image50" },
    { id: 5, src: Image52, alt: "Image52" },
    { id: 6, src: Image51, alt: "Image53" },
  ]);
  const [showImageOld, setShowImageOld] = useState(false);

  const settings = {
    dots: true,
    infinite: true, // Set this to true
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: false,
    autoplay: true, // Set this to true
    autoplaySpeed: 5000, // You can adjust this value to control the speed of the autoplay
  }; const handleImageClick = (clickedImage) => {
    // Clone the current displayedImages array
    const newDisplayedImages = [...displayedImages];

    // Find the index of the clicked image in the array
    const index = newDisplayedImages.findIndex((image) => image.id === clickedImage.id);

    // Determine the corresponding image based on the clicked image
    let correspondingImage;
    switch (clickedImage.src) {
      case Image48:
        correspondingImage = Imageold;
        break;
      case Image49:
        correspondingImage = Image1945;
        break;
      case Image50:
        correspondingImage = Image1960;
        break;
      case Image52:
        correspondingImage = Image1980;
        break;
      case Image51:
        correspondingImage = Image1990;
        break;
      default:
        correspondingImage = null; // This handles cases where a corresponding image is not defined
        break;
    }

    // Check if the clicked image is one of the corresponding images
    if (clickedImage.src === Imageold || clickedImage.src === Image1945 || clickedImage.src === Image1960 || clickedImage.src === Image1980 || clickedImage.src === Image1990) {
      // Remove the clicked corresponding image from the display
      newDisplayedImages.splice(index, 1);
    } else {
      // Find if the corresponding image is already displayed
      const correspondingIndex = newDisplayedImages.findIndex((image) => image.src === correspondingImage);

      if (correspondingIndex !== -1) {
        // If found, remove the corresponding image
        newDisplayedImages.splice(correspondingIndex, 1);
      } else if (correspondingImage) {
        // If not found, add the corresponding image after the clicked image
        newDisplayedImages.splice(index + 1, 0, { id: Date.now(), src: correspondingImage, alt: "NewImage" });
      }
    }

    // Update the displayedImages state
    setDisplayedImages(newDisplayedImages);
  };





  return (
    <div className='about-image-all-content-alignment'>
      <div className='container-md10'>
        <Slider ref={sliderRef} {...settings}>
          {displayedImages.map((image) => (
            <div key={image.id} className='grid-items'>

              {showImageOld && image.src === Imageold ? null : (
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => handleImageClick(image)}
                />
              )}

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
