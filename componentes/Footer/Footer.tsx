export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-10 mt-12">
        <div className="w-full mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xl">
          <p>&copy; {new Date().getFullYear()} Ludmila Sanchez. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mx-4 mt-2 sm:mt-0 font-bold">
            <a href="ludsanchez696@gmail.com" className="hover:underline">ludsanchez696@gmail.com</a>
            <a href="https://www.linkedin.com/in/ludmila-andrea-sanchez/" target="_blank" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/Ludmi0611" target="_blank" className="hover:underline">GitHub</a>
          </div>
        </div>
      </footer>
    );
  }
  