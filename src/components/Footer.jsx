const Footer = () => {
  return (
    <footer className="bg-black-900 text-white p-4">
      <hr className="my-2 px-4" />
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} SavePoint. All rights reserved.</p>
        <div className="logo mt-2">
          <img src="/logo-white.svg" alt="Logo" className="h-12 w-12 inline-block mr-2" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;