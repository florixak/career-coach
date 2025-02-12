import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-center bg-muted/50">
      <div className="container mx-auto text-center">
        <p>
          Made with ❤️ by{" "}
          <Link href="https://github.com/florixak">florixak</Link> •{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
