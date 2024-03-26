import Button from "./components/Button";
import GridDiv from "./components/GridDiv";

function App() {
  return (
    <div>
      <h1>Actividad 8: Styled Components</h1>
      <GridDiv>
        <Button>Default</Button>
        <Button type="success">Success</Button>
        <Button type="error">Error</Button>
        <Button type="warning">Warning</Button>
        <Button type="info">Info</Button>
      </GridDiv>
    </div>
  );
}

export default App;