import "./globals.css";

export const metadata = {
  title: "BgClick - Dynamic Background Color Changer",
  description:
    "Easily change your background color with BgClick! Choose from a variety of preset colors or customize your own with the color input field. Enhance your browsing experience with personalized colors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
