export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-12">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-center text-sm sm:text-base md:text-lg">
        <p>&copy; {new Date().getFullYear()} Ludmila Sanchez. Todos los derechos reservados.</p>
        <div className="flex flex-col sm:flex-row sm:space-x-6 gap-2 sm:gap-0 font-bold items-center">
          <a href="mailto:ludsanchez696@gmail.com" className="hover:underline break-words text-sm sm:text-base">ludsanchez696@gmail.com</a>
          <a href="https://www.linkedin.com/in/ludmila-andrea-sanchez/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://github.com/Ludmi0611" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
