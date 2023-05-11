import { Container, Button } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Kuy.id Domain for Sale</title>
        <meta
          name="description"
          content="Get the memorable domain Kuy.id today. Contact us for details."
        />
        <meta name="keywords" content="domain, sale, Kuy.id, Indonesia" />
        <meta property="og:title" content="Kuy.id Domain for Sale" />
        <meta
          property="og:description"
          content="Get the memorable domain Kuy.id today. Contact us for details."
        />
        <meta property="og:image" content="https://www.kuy.id/favicon.ico" />
        <meta property="og:url" content="https://www.kuy.id" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Container className="p-3">
          <div className="h-100 p-5 text-white bg-dark rounded-3 text-center">
            <h1 className="header">Welcome To Kuy.id Domain Sale</h1>
            <h2>Get this memorable domain today!</h2>
            <br />
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                href="mailto:fahmialfareza97@gmail.com"
                className="mr-2 me-2"
                target="_blank"
              >
                <MdEmail /> Email
              </Button>
              <Button
                variant="success"
                href="https://api.whatsapp.com/send?phone=6285172481997"
                className="mr-2 me-2"
                target="_blank"
              >
                <IoLogoWhatsapp /> WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
