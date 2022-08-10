import AuthRequired from "../helpers/AuthRequired";
import Accordion from "../components/Accordion/";
import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <AuthRequired>
        <div className="container">
          <Accordion
            key="1"
            title="Morning"
          ></Accordion>
          <Accordion
            key="2"
            title="Daytime"
          ></Accordion>
          <Accordion
            key="3"
            title="Evening"
          ></Accordion>
        </div>
      </AuthRequired>
    </Layout>
  );
}
