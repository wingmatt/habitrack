import AuthRequired from '../helpers/AuthRequired'
import Accordion from '../components/Accordion/'

export default function Dashboard() {

  return (
    <AuthRequired>
      <div className="container" style={{ padding: '50px 0 100px 0' }}>
        <Accordion key="1" title="Morning" iconUrl='something' tasks={[{complete: false, name: "mornin'"}, {complete: true, name: "Second morning thing"}]}></Accordion>
        <Accordion key="2" title="Daytime" iconUrl='something' tasks={[{complete: false, name: "howdy'"}]}></Accordion>
        <Accordion key="3" title="Evening" iconUrl='something' tasks={[{complete: false, name: "evenin'"}]}></Accordion>
      </div>
    </AuthRequired>
  )

  
}