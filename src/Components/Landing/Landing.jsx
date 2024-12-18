import { useState } from "react";
import { styled, Button } from "@mui/material";
import Input from "./Input/Input";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import useCurrencyInfo from "../../Hooks/useCurrencyInfo";

const LandingContainer = styled("main")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage: `url(https://images.pexels.com/photos/6317649/pexels-photo-6317649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  paddingLeft: "15px",
  paddingRight: "15px",
  height: "100vh",
  gap: "30px",

  "@media (max-width: 500px)": {
    flexDirection: "column",
  },
});

const InOutContainer = styled("section")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",

  "@media (max-width: 500px)": {
    flexDirection: "column",
  },
});

const WelcomeText = styled("h1")({
  color: "lightyellow",
  fontSize: "50px",
  userSelect: "none",
  fontFamily: "Helvetica",
  fontWeight: "bold",
  textAlign: "center",

  "@media (max-width: 500px)": {
    fontSize: "35px",
  },
});

const Form = styled("form")({});

const ButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",
});

export default function Landing() {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("eur");
  const [convertedAmount, setConvertedAmount] = useState("");
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <LandingContainer>
      <WelcomeText>Welcome to Coinvert!</WelcomeText>
      <InOutContainer>
        <Form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault(convert());
          }}
        >
          <Input
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
            id01="InputCurrency01"
            id02="InputCurrencySelect01"
          />

          <ButtonContainer>
            <Button
              title="Swap Values"
              color="primary"
              variant="contained"
              onClick={swap}
              sx={{
                backgroundColor: "steelblue",
                color: "lightyellow",
                fontWeight: "bold",
                fontSize: "15px",
                marginBottom: "14px",
              }}
            >
              <SwapVertIcon />
              Swap Values
            </Button>
          </ButtonContainer>
          <Input
            label="To"
            amount={parseFloat(convertedAmount).toFixed(3)} // Trim to 3 decimals
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled={false}
            currencyOptions={options}
            id01="InputCurrency02"
            id02="InputCurrencySelect02"
          />
          <ButtonContainer>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "steelblue",
                color: "lightyellow",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Convert {amount} {from}
              <CurrencyExchangeIcon
                sx={{ marginLeft: "7px", marginRight: "7px" }}
              />
              {to}
            </Button>
          </ButtonContainer>
        </Form>
      </InOutContainer>
    </LandingContainer>
  );
}
