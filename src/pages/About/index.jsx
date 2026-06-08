import CardAboutUs from '../../components/CardAboutUs';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import logo from '../../assets/images/logo-sobre.png';
import FotoMatheus from '../../assets/images/matheus.png';
import FotoThamires from '../../assets/images/thamires.png';
import FotoLuiza from '../../assets/images/luiza.png';
import FotoCamila from '../../assets/images/camila.png';

import { Container, Content, ContentCards } from './styles';

function About() {
  const team = [
    {
      nome: "Matheus Cosme",
      texto: "Desenvolvedor do Busca Saudável, com foco na construção da experiência digital e na organização das funcionalidades da plataforma.",
      foto: FotoMatheus,
      instagram: "https://www.instagram.com/cosmemc/",
      linkedin: "https://www.linkedin.com/in/matheus-cosme-alencar/"
    },
    {
      nome: "Thamires Stoppelli",
      texto: "Desenvolvedora do projeto, contribuindo para a estrutura da aplicação, experiência do usuário e integração das principais telas.",
      foto: FotoThamires,
      instagram: "https://www.instagram.com/thamistoppelli/",
      linkedin: "https://www.linkedin.com/in/thamires-stoppelli-6ab51a175/"
    },
    {
      nome: "Luiza Gadelha",
      texto: "Desenvolvedora do Busca Saudável, atuando na construção de interfaces e funcionalidades voltadas para usuários e fornecedores.",
      foto: FotoLuiza,
      instagram: "https://www.instagram.com/gadelhaluiza/",
      linkedin: "https://www.linkedin.com/in/luiza-gadelha/"
    },
    {
      nome: "Camila Medeiros",
      texto: "Desenvolvedora do projeto, contribuindo para a criação de uma plataforma mais clara, acessível e útil para escolhas alimentares.",
      foto: FotoCamila,
      instagram: "https://www.instagram.com/lazyant__/",
      linkedin: "https://www.linkedin.com/in/camila-medeir0s/"
    }
  ];

  return (
    <div>
      <Header />

      <Container>
        <section className="hero">
          <h2>Sobre o Busca Saudável</h2>
          <p>
            Uma plataforma criada para facilitar escolhas alimentares mais seguras,
            conscientes e alinhadas às restrições de cada pessoa.
          </p>
        </section>

        <Content>
          <div className="logoCard">
            <img src={logo} alt="Logo Busca Saudável" />
          </div>

          <div className="textCard">
            <h3>Escolher melhor começa com informação clara</h3>

            <p>
              O Busca Saudável nasceu com o objetivo de ajudar consumidores a encontrar
              produtos compatíveis com suas restrições alimentares de forma simples,
              rápida e intuitiva.
            </p>

            <p>
              A plataforma permite buscar produtos, filtrar por alergênicos, consultar
              ingredientes, visualizar informações nutricionais e salvar favoritos. Para
              fornecedores, o sistema oferece uma área de cadastro e gerenciamento de
              produtos.
            </p>

            <p>
              Nosso propósito é aproximar consumidores e marcas por meio de informações
              mais acessíveis, ajudando pessoas a tomarem decisões alimentares com mais
              confiança no dia a dia.
            </p>
          </div>
        </Content>

        <section className="teamHeader">
          <h2>Nosso time</h2>
          <p>
            Conheça as pessoas por trás do desenvolvimento do Busca Saudável.
          </p>
        </section>

        <ContentCards>
          {team.map((member) => (
            <CardAboutUs
              key={member.nome}
              nome={member.nome}
              texto={member.texto}
              foto={member.foto}
              instagram={member.instagram}
              linkedin={member.linkedin}
            />
          ))}
        </ContentCards>
      </Container>

      <Footer />
    </div>
  );
}

export default About;