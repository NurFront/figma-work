import React, { useState } from 'react';
import '../css/Feater.css';
import ins from '../img/IMAGE2.png';
import volna from '../img/icons/list1.png';
import listok from '../img/icons/listok.png';

const Feater = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>('');
  const [images, setImages] = useState<{ src: string; name: string }[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = () => {
    if (imageSrc && imageName) {
      setImages([...images, { src: imageSrc, name: imageName }]);
      setImageSrc(null);
      setImageName('');
    }
  };

  return (
    <>
      <img className="volna" src={volna} alt="" />
      <img className="ins-img" src={ins} alt="" />
      <img className="listok" src={listok} alt="" />
      <img className="listok-2" src={listok} alt="" />
      <img className="listok-3" src={listok} alt="" />
      <h1 className="featered">FEATURED COURSE</h1>
      <div className="decoretion"></div>
      <h1 className="run-online">Run your own online learning platform</h1>
      <h1 className="branding">
        A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.
      </h1>
      <h1 className="kathryn-name">Kathryn Murphy</h1>
      <button className="learn-btn">LEARN MORE</button>
      <h1 className="featered-2">Featured Course</h1>
      <div className="decoretion-2"></div>
      <h1 className="lorem-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </h1>
      <button className="view-btn">VIEW ALL COURSES</button>

      <div className="custom-upload">
        <input
          type="file"
          accept="image/*"
          id="imageInput"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="imageInput" className="upload-btn">
          Добавить фото
        </label>
        <input
          type="text"
          placeholder="Name image"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
          className="name-input"
        />
        <button onClick={handleAddImage} className="add-btn">Добавить</button>
      </div>

      <div className="position-images">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={image.src}
              alt={`Added Image ${index}`}
              className='uploads-image'
            />
            <p className='images-name'>{image.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feater;
