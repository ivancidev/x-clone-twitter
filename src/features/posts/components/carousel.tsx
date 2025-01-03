import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CloseIcon } from '../icons';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
import '../styles/carousel.css';
import { CarouselProps } from '../interfaces/poll';

export const CarouselPreview = ({
  imagePreviews,
  handleRemoveImage,
}: CarouselProps) => {
  return (
    <div className="mt-2 w-[500px]">
      {imagePreviews.length > 2 ? (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={10}
          slidesPerView={2}
        >
          {imagePreviews.map((preview, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-auto">
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <span
                  className="absolute top-0 right-0 rounded-full border-none cursor-pointer"
                  onClick={() => handleRemoveImage(index)}
                >
                  <CloseIcon />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {imagePreviews.map((preview, index) => (
            <div key={index} className="relative w-full h-auto">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto object-cover rounded-lg"
              />
              <span
                className="absolute top-0 right-0 rounded-full border-none cursor-pointer"
                onClick={() => handleRemoveImage(index)}
              >
                <CloseIcon />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
