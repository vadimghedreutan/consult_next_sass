import Prismic from "@prismicio/client";
import InsuranceCards from "../components/InsuranceCards";
import Contact from "../components/Contact";
import { getPrismicClient } from "../services/prismic";
import CurentGas from "../components/Insurances/CurentGas";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ServiceThreePage({ services }) {
  return (
    <div className="wrapper">
      <Seo
        title="TofanConsult | Curent - Gaz"
        description="Tofan Consult - Având libertatea de a lucra cu peste 350 de companii financiare din Germania, biroul nostru de consultanță te poate ajuta pe tine să găsești asigurările, creditele și produsele financiare de care ai cu adevărat nevoie."
      />
      <Header />
      <main>
        <CurentGas services={services} />
        <InsuranceCards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default ServiceThreePage;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const servicesResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "service_three")],
    { orderings: "[document.last_publication_date desc]" }
  );

  const services = servicesResponse.results.map((article) => ({
    slug: article.uid,
    title: article.data.title,
  }));

  return {
    props: {
      services,
    },
    revalidate: 60,
  };
};
