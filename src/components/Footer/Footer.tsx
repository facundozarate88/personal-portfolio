import { FC } from 'react';

const Footer: FC = () => (
  <footer className="py-6 px-6 text-center text-sm text-muted-foreground border-t">
    <div className="container">
      <p>
        Designed & Built by Facundo Zarate Uguet © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
