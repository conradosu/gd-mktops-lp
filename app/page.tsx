"use client";

import FadeIn from "react-fade-in";
import styles from "./page.module.css";

import { Box, Button, Flex, Image, Text } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Flex>
        <Box
          className={styles.section}
          h="100vh"
          style={{
            height: "100vh",
            backgroundImage: "url(/autores.jfif)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Box className={styles.content}>
            <FadeIn transitionDuration={1000}>
              <Box mb={30}>
                <Image src="/logo.png" alt="Marketing Ops" w={250} mb={40} />
                <Text c="white" fz="2rem" lh={1.2} fw={500} mb={25}>
                  <strong>Marketing Ops na prática</strong>: Todo o conhecimento que você precisa para organizar os
                  dados da sua empresa, sair do operacional e gerar mais resultados!
                </Text>
                <Text c="white" fz="1.2rem" fw={500} opacity={0.85}>
                  O processo de estruturação de dados de Marketing Ops é um grande desafio para as empresas, desde
                  coletar os dados corretamente, garantir a confiabilidade das métricas e também identificar e otimizar
                  os resultados dos diferentes canais de aquisição.
                </Text>
              </Box>
              <Button size="xl" color="var(--mantine-color-blue-9)" radius="md">
                Quero mais informações
              </Button>
            </FadeIn>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
