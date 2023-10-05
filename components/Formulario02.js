import React from 'react'

const Formulario02 = () => {
  return (

    <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center mb-8">
        <img src="/assets/img/carlos.png" alt="Logo" class="w-30 h-20"></img>

      </div>
      <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Iniciar sesión</h1>
      <form>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm text-gray-600">Correo electrónico</label>
          
            <input type='email' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'></input>
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm text-gray-600">Contraseña</label>
          <input type='password' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'></input>
          <a href="#" class="block text-right text-xs text-cyan-600 mt-2">¿Olvidaste tu contraseña?</a>
        </div>
        <button type="submit" class="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Acceso</button>
      </form>
      <div class="text-center">
        <p class="text-sm">¿No tienes una cuenta? <a href="#" class="text-cyan-600">Regístrate ahora</a></p>
      </div>
      <p class="text-xs text-gray-600 text-center mt-10">&copy; Carlos Jerez</p>
    </div>
  </div>
  )
}

export default Formulario02