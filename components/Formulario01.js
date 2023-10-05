import React, { useState } from 'react';
import Link from 'next/link';

const Formulario01 = () => {
  const [fileThumbnail, setFileThumbnail] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFileThumbnail(fileURL);
    }
  };

  return (
    <>
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <form>
                    <div class="mb-6">
                        <label for="postContent" class="block text-gray-700 text-sm font-bold mb-2">Publicar Contenido</label>
                        <textarea id="postContent" name="postContent" rows="4" class="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
                        sm:leading-5 resize-none focus:outline-none focus:border-blue-500" placeholder="¿Qué tienes en mente?"></textarea>
                    </div>
                    <div className="mb-6">
                    <label htmlFor="fileAttachment" className="block text-gray-700 text-sm font-bold mb-2">
                        Adjuntar archivo:
                    </label>
                    <div className="relative border-2 rounded-md px-4 py-3 bg-white flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out">
                        <input
                        type="file"
                        id="fileAttachment"
                        name="fileAttachment"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                        />
                        {fileThumbnail && (
                        <img src={fileThumbnail} alt="Archivo seleccionado" className="w-16 h-16" />
                        )}
                        <div className="flex items-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        <span className="ml-2 text-sm text-gray-600">Escoge un archivo</span>
                        </div>
                        <span className="text-sm text-gray-500">Tamaño máximo: 5 MB</span>
                    </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <Link href="/spinner" class="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"> Publicar <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" id="send" fill="#fff">
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                            </svg>
                        </Link>
                        <span class="text-gray-500 text-sm">Máximo 280 caracteres</span>
                    </div>
                </form>
            </div>
      </div>

    </>
  );
}

export default Formulario01;
