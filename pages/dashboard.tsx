import AuthRequired from "../helpers/AuthRequired";
import Accordion from "../components/Accordion/";
import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <AuthRequired>
        <div className="container" style={{ padding: "50px 0 100px 0" }}>
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
