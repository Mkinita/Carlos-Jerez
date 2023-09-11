import React from 'react'

const suscribete = () => {
  return (
        <>
            <div class="bg-white flex items-center justify-center py-1 rounded-lg">
                <div class="mx-auto w-full  bg-white">
                    <div class="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
                    <div class="flex justify-center md:justify-end pb-2">
                        <img class="w-full max-w-sm" src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png" alt="Marketing newsletter via computer Illustration in PNG, SVG" />
                    </div>
                    <div class="flex items-center">
                        <div class="mx-auto md:mx-0">
                        <h3 class="text-2xl font-bold text-blue-600 p-1">¡Mantengámonos en contacto!</h3>
                        <p class="mt-2 max-w-[20rem] text-lg text-blue-600/80 p-1">Déjame tu correo, y en breve me pondré en contacto contigo. ¡Gracias!"</p>
                        <form action="" class="mt-4 flex flex-col">
                            <input type="email" name="email" id="email" placeholder="ingresa tu correo" class="w-full rounded border border-blue-600/50 bg-transparent px-3 py-2 text-gray-700 placeholder:text-gray-700 md:max-w" />
                            <button type="submit" class="mt-4 w-full max-w-[14rem] rounded bg-blue-600/30 px-14 py-2 text-center text-blue-600">Enviar</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
        </>
  )
}

export default suscribete