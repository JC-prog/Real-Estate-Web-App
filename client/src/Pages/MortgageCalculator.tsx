import React, { useState } from "react";
import "./Mortgage.css";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { blue, blueGrey, lightGreen } from "@mui/material/colors";

//pass in the props so that PurchaseForm can use them
interface NewPurposeFormProps {
  principal: number;
  setPrincipal: (principal: number) => void;
  interestRate: number;
  setInterestRate: (interestRate: number) => void;
  loanTerm: number;
  setLoanTerm: (loanTerm: number) => void;
  monthlyPayment: number;
  setMonthlyPayment: (setMonthlyPayment: number) => void;
  altmonthlyPayment: number;
  setAltMonthlyPayment: (setAltMonthlyPayment: number) => void;
  totalSavings: number;
  setTotalSavings: (setTotalSavings: number) => void;
}

//for the Purchase Form
function NewPurchaseForm({
  principal,
  setPrincipal,
  interestRate,
  setInterestRate,
  loanTerm,
  setLoanTerm,
  monthlyPayment,
  setMonthlyPayment,
  altmonthlyPayment,
  totalSavings,
  setTotalSavings,
}: NewPurposeFormProps) {
  const calculateMortgage = () => {
    // Same calculation logic from the previous examples
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;
    const payment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    setMonthlyPayment(payment);
  };

  return (
    <div className="new-purchase-form">
      <div className="input-groups">
        <TextField
          required
          label="Loan Amount"
          fullWidth={true}
          value={principal}
          onChange={(event) => {
            const newValue = parseFloat(event.target.value);
            if (!isNaN(newValue)) {
              setPrincipal(newValue);
            }
          }}
        />
      </div>
      <div className="input-groups">
        <TextField
          required
          label="Interest Rate"
          fullWidth={true}
          value={interestRate}
          onChange={(event) => {
            const newValue = parseFloat(event.target.value);
            if (!isNaN(newValue)) {
              setInterestRate(newValue);
            }
          }}
        />
      </div>
      <div className="input-groups">
        <TextField
          required
          label="Loan Term (Years)"
          value={loanTerm}
          fullWidth={true}
          onChange={(event) => setLoanTerm(parseFloat(event.target.value))}
        />
        <div className="calculate-button">
          <Button variant="contained" onClick={calculateMortgage}>
            Calculate
          </Button>
        </div>
      </div>
    </div>
  );
}

//refinancing form to be defined here.
function RefinancingForm({
  principal,
  setPrincipal,
  interestRate,
  setInterestRate,
  loanTerm,
  setLoanTerm,
  monthlyPayment,
  setMonthlyPayment,
  altmonthlyPayment,
  setAltMonthlyPayment,
  totalSavings,
  setTotalSavings,
}: NewPurposeFormProps) {
  const calculateRefinance = () => {
    //for refinancing
    const companyInterestRate = 2.8;
    const altmonthlyInterestRate = companyInterestRate / 100 / 12;

    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;
    const payment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    setMonthlyPayment(payment);

    const totalSavings = monthlyInterestRate - altmonthlyInterestRate;
    setTotalSavings(totalSavings);

    console.log(totalPayments);
    console.log(monthlyInterestRate);
    //current loan * monthly interest rate) / 1 -

    //we have interestRate of 2.8%, if their current interest is higher, we can help them to refinance and show potential saving
    const alternatepayment =
      (principal * altmonthlyInterestRate) /
      (1 - Math.pow(1 + altmonthlyInterestRate, -totalPayments));
    setAltMonthlyPayment(alternatepayment);
  };

  return (
    <div className="refinancing-form">
      <div className="input-groups">
        <TextField
          required
          label="Remaining Loan Amount"
          fullWidth={true}
          value={principal}
          onChange={(event) => {
            const newValue = parseFloat(event.target.value);
            if (!isNaN(newValue)) {
              setPrincipal(newValue);
            }
          }}
        />
      </div>
      <div className="input-groups">
        <TextField
          required
          label="Remaining Loan Term"
          fullWidth={true}
          value={loanTerm}
          onChange={(event) => {
            const newValue = parseFloat(event.target.value);
            if (!isNaN(newValue)) {
              setLoanTerm(newValue);
            }
          }}
        />
      </div>
      <div className="input-groups">
        <TextField
          required
          label="Current Interest Rate"
          fullWidth={true}
          value={interestRate}
          onChange={(event) => {
            const newValue = parseFloat(event.target.value);
            if (!isNaN(newValue)) {
              setInterestRate(newValue);
            }
          }}
        />
        <div className="calculate-button">
          <Button variant="contained" onClick={calculateRefinance}>
            Calculate
          </Button>
        </div>
      </div>
    </div>
  );
}

enum Purpose {
  NEW_PURCHASE = "NEW_PURCHASE",
  REFINANCING = "REFINANCING",
}

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [currPurpose, setCurrPurpose] = useState<Purpose>(Purpose.NEW_PURCHASE);

  //for refinancing
  const [altmonthlyPayment, setAltMonthlyPayment] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);

  console.log("now currPurpose is", currPurpose);

  return (
    <div className="calculator">
      <h1>Mortgage Calculator</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="container">
          {/* <div className="mortgage-calculator-info">
            Budget your monthly expenses properly and find out how much you need
            to set aside for your monthly repayments with our Mortgage
            Calculator.
          </div> */}
          <div className="first-columns">
            <div className="purpose-buttons">
              <ButtonGroup fullWidth>
                <Button onClick={() => setCurrPurpose(Purpose.NEW_PURCHASE)}>
                  New Purchase{" "}
                </Button>
                <Button onClick={() => setCurrPurpose(Purpose.REFINANCING)}>
                  Refinancing
                </Button>
              </ButtonGroup>
            </div>
            {currPurpose === Purpose.NEW_PURCHASE ? (
              <NewPurchaseForm
                principal={principal}
                setPrincipal={setPrincipal}
                interestRate={interestRate}
                setInterestRate={setInterestRate}
                loanTerm={loanTerm}
                setLoanTerm={setLoanTerm}
                setMonthlyPayment={setMonthlyPayment}
                monthlyPayment={monthlyPayment}
                setAltMonthlyPayment={setAltMonthlyPayment}
                altmonthlyPayment={altmonthlyPayment}
                totalSavings={totalSavings}
                setTotalSavings={setTotalSavings}
              />
            ) : (
              <RefinancingForm
                principal={principal}
                setPrincipal={setPrincipal}
                interestRate={interestRate}
                setInterestRate={setInterestRate}
                loanTerm={loanTerm}
                setLoanTerm={setLoanTerm}
                setMonthlyPayment={setMonthlyPayment}
                monthlyPayment={monthlyPayment}
                setAltMonthlyPayment={setAltMonthlyPayment}
                altmonthlyPayment={altmonthlyPayment}
                totalSavings={totalSavings}
                setTotalSavings={setTotalSavings}
              />
            )}
          </div>
          {/* if Refinance is chosen it will fly to this column */}
          {currPurpose === Purpose.NEW_PURCHASE ? (
            <div className="second-columns">
              {monthlyPayment > 0 && (
                <div className="result">
                  <h4>Mortgage Required</h4>
                  <p>Monthly mortgage payment : ${monthlyPayment.toFixed(2)}</p>
                  <p>
                    Yearly Mortgage payment : $
                    {12 * parseFloat(monthlyPayment.toFixed(2))}
                  </p>
                  <p>Years to pay off : {loanTerm} years</p>
                </div>
              )}
            </div>
          ) : (
            <div className="refinancing-columns">
              {monthlyPayment > 0 && (
                <div className="result">
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      alt="Refinance Pic"
                      height="200"
                      image="./HousePic.jpg"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        align="center"
                      >
                        Compare interest rate and refinance to a better home
                        package
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="left"
                      >
                        <p>Monthly Repayment : ${monthlyPayment.toFixed(2)}</p>
                        <p>
                          Current Repayment : $
                          {parseFloat(monthlyPayment.toFixed(2))}
                        </p>
                        <p>
                          {/* based on better interest rates */}
                          New Repayment : $
                          {parseFloat(altmonthlyPayment.toFixed(2))}
                        </p>
                        <p>Savings : </p>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default MortgageCalculator;
