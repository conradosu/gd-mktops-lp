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
      <Flex
        className={styles.section}
        h="100vh"
        align="center"
        style={{
          backgroundImage: "url(/autores.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "var(--mantine-color-gray-9)",
        }}
      >
        <Box className={styles.authors}>
          <FadeIn transitionDuration={1000}>
            <Box w="100%" maw={600}>
              <Box mb={30}>
                <Image src="/logo.png" alt="Marketing Ops" w={250} mb={40} />
                <Text c="white" fz="2rem" lh={1.2} fw={500} mb={25}>
                  <strong>Marketing Ops na Prática</strong>: Todo o conhecimento que você precisa para organizar os
                  dados da sua empresa, sair do operacional e gerar mais resultados!
                </Text>
                <Text c="white" fz="1.1rem" fw={500} opacity={0.85}>
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
          </FadeIn>
        </Box>
      </Flex>

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
                Nosso curso Marketing Ops na Prática foi montado de forma organizada e explicativa para facilitar sua
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
                </span>{" "}
                é indicado?
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
        <Box w={1000}>
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

      <Flex className={styles.section} align="center" direction="column">
        <Flex maw={650} mb={50} align="center" ta="center">
          <Fade delay={400} distance="20px" top>
            <Box>
              <Text c="var(--mantine-color-blue-9)" fz="2rem" lh={1.2} fw={900} mb={10}>
                O que você irá aprender nas aulas?
              </Text>

              <Text c="var(--mantine-color-dark-5)" fz="1.1rem" lh={1.4} fw={600} opacity={0.8}>
                O curso Marketing Ops na Prática foi montado de forma organizada e explicativa para facilitar sua
                jornada!
              </Text>
            </Box>
          </Fade>
        </Flex>

        <Flex wrap="wrap" justify="center" maw={1200} mb={50}>
          <Fade delay={200} distance="20px" top cascade>
            {[
              {
                title: "Aula 1: Entendendo a estrutura de aquisição dos leads (10 min)",
                description:
                  "Explore as nuances da jornada do cliente e descubra como os leads entram em seu radar. Aprenda a mapear os pontos de contato cruciais para uma estratégia de aquisição eficaz.",
                imgSrc: "/aulas/01.png",
              },
              {
                title: "Aula 2: Definindo os parâmetros das origens (10 min)",
                description:
                  "Defina os critérios essenciais para identificar e categorizar as diferentes fontes de leads. Descubra como a precisão na definição dos parâmetros pode otimizar suas campanhas de aquisição.",
                imgSrc: "/aulas/02.png",
              },
              {
                title: "Aula 3: Capturando os parâmetros das origens no CRM (Hubspot) (13 min)",
                description:
                  "Aprenda a integrar e capturar dados precisos das origens diretamente em seu CRM utilizando o HubSpot. Descubra como essa integração pode enriquecer sua base de dados e melhorar suas estratégias de marketing.",
                imgSrc: "/aulas/03.png",
              },
              {
                title: "Aula 4: Capturando os parâmetros das origens no CRM (RD Station Marketing) (09 min)",
                description:
                  "Explore o processo de integração e captura de dados das origens em seu CRM usando o RD Station Marketing. Descubra como essa configuração pode fornecer insights valiosos para suas iniciativas de geração de leads.",
                imgSrc: "/aulas/04.png",
              },
              {
                title: "Aula 5: Montando e tratando sua base de dados (08 min)",
                description:
                  "Aprenda a montar e aprimorar sua base de dados para garantir consistência e qualidade. Descubra técnicas essenciais de tratamento de dados para insights mais precisos e confiáveis.",
                imgSrc: "/aulas/05.png",
              },
              {
                title: "Aula 6: Analisando seus dados em um dashboard (Looker) (18 min)",
                description:
                  "Analise um dashboard personalizado no Looker para saber quais informações e insights podem ser obtidos com a estruturação de dados corretamente realizada, explorando os painéis interativos para impulsionar sua tomada de decisão.",
                imgSrc: "/aulas/06.png",
              },
              {
                title: "Aula 7: Aproveitando o seu dashboard ao máximo (26 min)",
                description:
                  "Domine o uso avançado do seu dashboard, explorando recursos poderosos para análises aprofundadas. Descubra como personalizar e otimizar seu painel para extrair insights valiosos e impulsionar o desempenho de sua estratégia de marketing.",
                imgSrc: "/aulas/07.png",
              },
            ].map((i, index) => (
              <Flex maw={380} align="center" direction="column" mx={10} mb={50} key={index}>
                <Image
                  src={i.imgSrc}
                  alt={i.title}
                  w={380}
                  radius="xl"
                  mb={20}
                  style={{
                    filter: "drop-shadow(0px 0px 5px var(--mantine-color-blue-5))",
                  }}
                />

                <Box ta="center">
                  <Text c="var(--mantine-color-blue-9)" fz="1.1rem" lh={1.2} fw={700} mb={10}>
                    {i.title}
                  </Text>

                  <Text c="var(--mantine-color-dark-4)" fz="0.9rem" lh={1.4} fw={600} ta="center">
                    {i.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Fade>
        </Flex>
      </Flex>

      <Flex
        className={styles.section}
        h={650}
        mt={-75}
        bg="var(--mantine-color-gray-9)"
        align="center"
        justify="center"
        pos="relative"
      >
        <Box
          w="100%"
          h="100%"
          pos="absolute"
          opacity={0.25}
          style={{
            backgroundImage: "url(/autores2.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        <Flex
          maw={700}
          align="center"
          justify="center"
          direction="column"
          ta="center"
          style={{
            zIndex: 1,
          }}
        >
          <Box mb={35}>
            <Fade delay={400} distance="20px" top>
              <Box>
                <Text c="var(--mantine-color-white)" fz="2rem" lh={1.2} fw={900} mb={10}>
                  O Marketing Ops vai colocar seus resultados no próximo nível!
                </Text>

                <Text c="var(--mantine-color-white)" fz="1.1rem" lh={1.4} fw={600} opacity={0.9}>
                  Aprenda a coletar dados, tratar corretamente e garantir sua confiabilidade, além de otimizar os seus
                  resultados de todos os seus canais de aquisição.
                </Text>
              </Box>
            </Fade>
          </Box>

          <Fade delay={600} distance="100px" left>
            <iframe
              src="https://www.youtube.com/embed/V0cebQ4LnTE?si=Z-FMnZ5U70IOe1Y8"
              style={{
                width: 700,
                height: 400,
                border: 0,
              }}
            />
          </Fade>
        </Flex>
      </Flex>

      <Flex className={styles.section} align="center" direction="column">
        <Flex maw={650} mb={50} align="center" ta="center">
          <Fade delay={400} distance="20px" top>
            <Box>
              <Text c="var(--mantine-color-blue-9)" fz="2rem" lh={1.2} fw={900} mb={10}>
                Quem participou comprova:
              </Text>

              <Text c="var(--mantine-color-dark-5)" fz="1.1rem" lh={1.4} fw={600} opacity={0.8}>
                Veja o que os participantes do curso Marketing Ops na Prática têm a dizer sobre a experiência.
              </Text>
            </Box>
          </Fade>
        </Flex>

        <Flex wrap="wrap" justify="center" maw={1200}>
          <Fade delay={200} distance="20px" top cascade>
            {[
              {
                title: "Almir Neves",
                subtitle: "Empreendedor",
                description:
                  'O curso "Marketing Ops na Prática" transformou sua empresa, permitindo decisões mais estratégicas baseadas em dados, em vez de agir no escuro. Recomenda para empreendedores que desejam tomar decisões informadas.',
                imgSrc: "/depoimentos/01.png",
              },
              {
                title: "Camilla Hara",
                subtitle: "Gerente de Marketing",
                description:
                  "O curso trouxe mais clareza e ajudou a empresa a construir conhecimento interno sobre dados, tornando as decisões mais assertivas e intencionais.",
                imgSrc: "/depoimentos/02.png",
              },
              {
                title: "Daniel Cecossi",
                subtitle: "Gestor de Tráfego",
                description:
                  "Ganhou confiança ao analisar os dados da empresa e agora toma decisões embasadas. Recomenda até para quem não é da área de marketing, mas deseja entender melhor os resultados do setor.",
                imgSrc: "/depoimentos/03.png",
              },
            ].map((i, index) => (
              <Flex maw={350} align="center" direction="column" mx={10} key={index}>
                <Image
                  src={i.imgSrc}
                  alt={i.title}
                  w={250}
                  mb={25}
                  radius="50%"
                  style={{
                    filter: "drop-shadow(0px 0px 15px var(--mantine-color-dark-2))",
                  }}
                />

                <Flex ta="center" direction="column" align="center">
                  <Flex align="center" mb={5}>
                    <IconRosetteDiscountCheckFilled size={30} color="var(--mantine-color-blue-9)" />

                    <Text c="var(--mantine-color-blue-9)" fz="1.4rem" lh={1.4} fw={700} ml={5}>
                      {i.title}
                    </Text>
                  </Flex>

                  <Text c="var(--mantine-color-dark-4)" fz="1rem" lh={1.2} fw={600} ta="center" opacity={0.8} mb={20}>
                    {i.subtitle}
                  </Text>

                  <Text c="var(--mantine-color-dark-4)" fz="1.05rem" lh={1.4} fw={600} ta="center">
                    {i.description}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Fade>
        </Flex>
      </Flex>
    </>
  );
}
