import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
} from "./styled/styled";

export function Jetton() {


  return (
    <Card title="Jetton">
      <FlexBoxCol>
        <h3>Jetton</h3>
        <FlexBoxRow>
          Wallet
        </FlexBoxRow>
        <FlexBoxRow>
          Jetton Wallet
        </FlexBoxRow>
        <FlexBoxRow>
          Balance
          <div>Loading...</div>
        </FlexBoxRow>
        <Button>
          Mint jettons
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
