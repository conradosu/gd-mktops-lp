import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";

import "./globals.css";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "Marketing Ops na Prática",
  description:
    "Todo o conhecimento que você precisa para organizar os dados da sua empresa, sair do operacional e gerar mais resultados!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
