
import "@styles/globals.css";
import { ReactNode } from "react";
export const metadata = {
  title: "Kentoverse", description: "Modern website by Marc Cavada"
};

export default function RootLayout({ children }: { children: ReactNode }) {

  return (

    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}



