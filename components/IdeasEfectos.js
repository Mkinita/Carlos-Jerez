import React, { useState } from 'react';

const Clones = () => {
  const [imageURL, setImageURL] = useState(null);
  const [imageStyle, setImageStyle] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result);
        setImageStyle('');
      };
      reader.readAsDataURL(file);
    }
  };

  const applyInvertStyle = () => {
    setImageStyle('invert');
  };

  const applyBlurStyle = () => {
    setImageStyle('sepia');
  };

  const applygrayscaleStyle = () => {
    setImageStyle('grayscale');
  };

  const resetImage = () => {
    setImageURL(null);
    setImageStyle('');
  };

  

  return (
    <>
      <div class="h-screen flex justify-center items-center bg-gray-800 bg-opacity-60 px-2">
        <div class="p-4 bg-white max-w-md rounded-lg shadow-md">
          <div className={`p-2 shadow rounded-lg bg-white m-auto ${imageStyle}`}>
            {imageURL ? (
              <img src={imageURL} alt='Uploaded' className='w-44 h-44 object-cover mx-auto rounded-lg'/>
              ) : (
                <>
                  <label for="fileInput" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <span class="block text-indigo-500 mt-2">Seleccionar una imagen</span>
                  </label>
                  <input
                    id="fileInput"
                    type='file'
                    accept='image/*'
                    onChange={handleImageUpload}
                    className='hidden'
                  />
                </>
            )}
          </div>
          <div className='grid grid-cols-4 gap-2 py-4 pb-1 px-2 text-xs'>
            <button onClick={applyInvertStyle} className='bg-blue-500 text-white px-1 py-2 rounded-full'>Invertir</button>
            <button onClick={applyBlurStyle} className='bg-blue-500 text-white px-1 py-2 rounded-full'>Sepia</button>
            <button onClick={applygrayscaleStyle} className='bg-blue-500 text-white px-1 py-2 rounded-full'>B/N</button>
            <button onClick={resetImage} className='bg-blue-500 text-white px-1 py-2 rounded-full'>Recetear</button>
          </div>
        </div>
          
      </div>

    </>
  );
};

export default Clones;
