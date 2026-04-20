export default function Header() {
  return (
    <header>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.avif" alt="Hairoca Logo" style={{ maxHeight: '45px', width: 'auto', display: 'block' }} />
        </a>
      </div>
    </header>
  );
}
  