"use client";

/* eslint-disable */
import styles from "./page.module.css";
const Fade = require("react-reveal/Fade");

import { Box, Button, Divider, Flex, Image, Text } from "@mantine/core";
import {
  IconClockFilled,
  IconRosetteDiscountCheckFilled,
  IconStarFilled,
  IconTrendingUp,
  IconUserCheck,
} from "@tabler/icons-react";
import FadeIn from "react-fade-in";

export default function Home() {
  return (
    <>
      <Box
        className={styles.section}
        h="100vh"
        style={{
          height: "100vh",
          backgroundImage: "url(/autores.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "var(--mantine-color-gray-9)",
        }}
      >
        <FadeIn transitionDuration={1000}>
          <Box className={styles.authors}>
            <Box>
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
              <Button
                size="xl"
                color="var(--mantine-color-blue-9)"
                radius="md"
                leftSection={<IconTrendingUp size={24} />}
              >
                Quero mais informações!
              </Button>
            </Box>
          </Box>
        </FadeIn>
      </Box>

      <Flex
        className={styles.section}
        bg="var(--mantine-color-gray-9)"
        align="center"
        direction="column"
        ta="center"
        pb={30}
      >
        <Flex maw={650} mb={30} align="center">
          <Fade delay={200} distance="20px" top cascade>
            <Box>
              <Text c="white" fz="2rem" lh={1.2} fw={900} mb={10}>
                Com o curso{" "}
                <span
                  style={{
                    color: "var(--mantine-color-blue-6)",
                  }}
                >
                  Marketing Ops na Prática
                </span>
                {", "}
                você aprenderá a:
              </Text>

              <Text c="white" fz="1.1rem" lh={1.4} fw={600} opacity={0.8}>
                Nosso curso Marketing Ops na prática foi montado de forma organizada e explicativa para facilitar sua
                jornada!
              </Text>
            </Box>
          </Fade>
        </Flex>

        <Box>
          <Fade delay={400} distance="20px" top cascade>
            {[
              "Entender a estrutura ideal a ser utilizada na aquisição de leads",
              "Definir as regras e parâmetros das diferentes origens",
              "Integrar as plataformas de anúncios com o CRM",
              "Capturar os parâmetros das origens no CRM (Hubspot, ActiveCampaign e RD Station Marketing)",
              "Configurar o Google Tag Manager e Google Analytics 4",
              "Montar sua base de dados",
              "Tratar os dados coletados das diferentes origens e plataformas",
              "Criar um dashboard preciso e confiável no Looker Studio",
              "Extrair o máximo do seu dashboard",
            ].map((i, index) => (
              <Flex align="center" mb={10} key={index}>
                <IconStarFilled size={30} color="var(--mantine-color-blue-6)" style={{ marginRight: 12 }} />
                <Text c="white" fz="1.2rem" lh={1.2} fw={500}>
                  {i}
                </Text>
              </Flex>
            ))}
            <Flex align="center" mb={10}>
              <IconStarFilled size={35} color="var(--mantine-color-yellow-5)" style={{ marginRight: 12 }} />
              <Text c="white" fz="1.4rem" lh={1.2} fw={700}>
                <span
                  style={{
                    fontWeight: 900,
                  }}
                >
                  BÔNUS
                </span>
                : Fundamentos de Business Intelligence
              </Text>
            </Flex>
          </Fade>

          <Divider my={20} opacity={0.2} />

          <Flex align="center" mb={30}>
            <IconClockFilled size={25} color="var(--mantine-color-green-5)" style={{ marginRight: 12 }} />
            <Text c="white" fz="1.2rem" lh={1.2} fw={500}>
              Carga horária total do curso:{" "}
              <strong
                style={{
                  color: "var(--mantine-color-green-5)",
                }}
              >
                2 horas com acesso vitalício!
              </strong>
            </Text>
          </Flex>

          <Button size="xl" color="var(--mantine-color-blue-9)" radius="md" leftSection={<IconTrendingUp size={24} />}>
            Quero mais informações!
          </Button>
        </Box>
      </Flex>

      <Flex className={styles.section} bg="var(--mantine-color-gray-9)" align="center" direction="column">
        <Flex maw={650} mb={50} align="center" ta="center">
          <Fade delay={200} distance="20px" top>
            <Box>
              <Text c="white" fz="2rem" lh={1.2} fw={900} mb={10}>
                Para quem o curso{" "}
                <span
                  style={{
                    color: "var(--mantine-color-blue-6)",
                  }}
                >
                  Marketing Ops na Prática
                </span>
                {", "}é indicado?
              </Text>

              <Text c="white" fz="1.1rem" lh={1.4} fw={600} opacity={0.8}>
                O curso Marketing Ops na Prática possui uma carga horária de apenas 2 horas, 100% online e te
                introduzirá ao mundo do Marketing Ops!
              </Text>
            </Box>
          </Fade>
        </Flex>

        <Flex align="center">
          <Fade delay={200} distance="20px" left>
            <Image className={styles.indicatedForImg} src="/indicatedFor.png" alt="Indicado para" />
          </Fade>

          <Box className={styles.indicatedFor}>
            <Box>
              <Flex direction="column" align="flex-end">
                <Fade delay={400} distance="20px" top cascade>
                  <Box mb={40}>
                    {[
                      "Empreendedores e Fundadores",
                      "CMO’s, Heads e líderes de Marketing",
                      "Profissionais de RevOps",
                      "Analistas de Marketing, SEO e performance",
                      "Gestores de tráfego",
                    ].map((i, index) => (
                      <Flex align="center" justify="flex-end" mb={10} key={index}>
                        <Text c="white" fz="1.4rem" lh={1.2} fw={500} mr={12}>
                          {i}
                        </Text>
                        <IconUserCheck size={30} color="var(--mantine-color-green-5)" />
                      </Flex>
                    ))}
                  </Box>

                  <Button
                    size="xl"
                    color="var(--mantine-color-blue-9)"
                    radius="md"
                    leftSection={<IconTrendingUp size={24} />}
                  >
                    Quero mais informações!
                  </Button>
                </Fade>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>

      <Flex className={styles.section} bg="var(--mantine-color-gray-1)" align="center" direction="column" pb={75}>
        <Flex maw={650} mb={50} align="center" ta="center">
          <Fade delay={400} distance="20px" top>
            <Box>
              <Text c="var(--mantine-color-blue-9)" fz="2rem" lh={1.2} fw={900} mb={10}>
                Quem são os instrutores do curso?
              </Text>

              <Text c="var(--mantine-color-dark-5)" fz="1.1rem" lh={1.4} fw={600} opacity={0.8}>
                Nossos instrutores são especialistas em Marketing Ops e Business Intelligence e possuem anos de
                experiência no mercado.
              </Text>
            </Box>
          </Fade>
        </Flex>

        <Box>
          <Fade delay={600} distance="20px" left>
            <Flex align="center" mb={25}>
              <Image
                src="/guilherme.png"
                alt="Instrutor 1"
                w={400}
                radius="xl"
                style={{
                  filter: "drop-shadow(0px 0px 20px var(--mantine-color-blue-5))",
                }}
              />

              <Box ta="left" ml={50} maw={600}>
                <Flex align="center" mb={25}>
                  <IconRosetteDiscountCheckFilled
                    size={40}
                    color="var(--mantine-color-blue-9)"
                    style={{ marginRight: 10 }}
                  />

                  <Text c="var(--mantine-color-blue-9)" fz="1.8rem" lh={1.2} fw={700}>
                    Guilherme Passoni
                  </Text>
                </Flex>

                <Text c="var(--mantine-color-dark-4)" fz="1.3rem" lh={1.4} fw={600} opacity={0.9}>
                  <strong>Formado em Administração pela UFPR</strong>, <strong>CRO na Levetta</strong> (software de
                  RevOps) e <strong>Diretor de Operações da Gestão em Dados</strong> (consultoria especializada em
                  Business Intelligence para Marketing e Vendas). Atua há <strong>10 anos com Marketing Ops</strong>,
                  onde se especializou em análise de dados, mídias pagas e CRO, liderando equipes técnicas de mídias
                  pagas e elaborando estratégias de aquisição para clientes de grande porte do <strong>Brasil</strong>,{" "}
                  <strong>América Latina</strong> e <strong>Europa</strong>.
                </Text>
              </Box>
            </Flex>
          </Fade>

          <Fade delay={600} distance="20px" right>
            <Flex align="center">
              <Box ta="right" mr={50} maw={600}>
                <Flex align="center" justify="flex-end" mb={25}>
                  <Text c="var(--mantine-color-blue-9)" fz="1.8rem" lh={1.2} fw={700} mr={10}>
                    Giulliano Hamann
                  </Text>

                  <IconRosetteDiscountCheckFilled size={40} color="var(--mantine-color-blue-9)" />
                </Flex>

                <Text c="var(--mantine-color-dark-4)" fz="1.3rem" lh={1.4} fw={600} opacity={0.9}>
                  <strong>Formado em Economia e com MBA em Gestão Financeira</strong>, <strong>CEO da Levetta</strong>{" "}
                  (software de RevOps) e <strong>Diretor Executivo da Gestão em Dados</strong> (consultoria{" "}
                  <strong>especializada em Business Intelligence</strong> para Marketing e Vendas). Atua há{" "}
                  <strong>8 anos com Marketing Ops e análise de dados</strong>, liderando as estratégias de mídias
                  pagas, CRO, inbound marketing e <strong>growth hacking</strong> para empresas de diferentes segmentos
                </Text>
              </Box>

              <Image
                src="/giu.png"
                alt="Instrutor 1"
                w={400}
                radius="xl"
                style={{
                  filter: "drop-shadow(0px 0px 20px var(--mantine-color-blue-5))",
                }}
              />
            </Flex>
          </Fade>
        </Box>
      </Flex>

      <Flex className={styles.section} bg="var(--mantine-color-gray-9)" align="center" direction="column">
        <Box w={850}>
          <Fade delay={200} distance="20px" top>
            <Box>
              <Text c="white" fz="2rem" lh={1.2} fw={900} mb={10}>
                Faça parte do grupo de profissionais que tomam decisões baseadas em dados{" "}
                <span
                  style={{
                    color: "var(--mantine-color-blue-6)",
                  }}
                >
                  de verdade
                </span>
                !
              </Text>

              <Text c="white" fz="1.1rem" lh={1.4} fw={600} opacity={0.8} mb={25}>
                Tomar decisões baseadas em dados é o que diferencia as empresas que crescem exponencialmente daquelas
                que estagnam.
              </Text>

              <Button
                size="xl"
                color="var(--mantine-color-blue-9)"
                radius="md"
                leftSection={<IconTrendingUp size={24} />}
              >
                Quero mais informações!
              </Button>
            </Box>
          </Fade>
        </Box>
      </Flex>
    </>
  );
}
