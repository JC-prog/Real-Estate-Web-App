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

//pass in the props so that PurchaseForm can use them
interface NewPurposeFormProps {
  principal: number;
  setPrincipal: (principal: number) => void;
  interestRate: string;
  setInterestRate: (interestRate: string) => void;
  loanTerm: number;
  setLoanTerm: (loanTerm: number) => void;
  monthlyPayment: number;
  setMonthlyPayment: (setMonthlyPayment: number) => void;
  altmonthlyPayment: number;
  setAltMonthlyPayment: (setAltMonthlyPayment: number) => void;
  totalSavings: number;
  setTotalSavings: (setTotalSavings: number) => void;
  isFormVisible: boolean;
  setIsFormVisible: (setIsFormVisible: boolean) => void;
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
  isFormVisible,
  setIsFormVisible,
}: NewPurposeFormProps) {
  const interestRateRegex = /^\d+(\.\d{0,2})?(%?)$/;
  const calculateMortgage = () => {
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;

    console.log("interestrate", parseFloat(interestRate));
    const totalPayments = loanTerm * 12;
    const payment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    setMonthlyPayment(payment);

    //to show the page
    setIsFormVisible(true);
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
            const inputValue = setPrincipal(
              parseFloat(event.target.value) || 0
            );
          }}
        />
      </div>
      <div className="input-groups">
        <TextField
          required
          label="Interest Rate"
          fullWidth={true}
          inputProps={{ pattern: interestRateRegex }}
          value={interestRate}
          onChange={(event) => {
            const newValue = event.target.value;
            if (newValue !== "") {
              setInterestRate(newValue);
            } else {
              setInterestRate("");
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
          onChange={(event) => {
            const newValue = event.target.value;
            console.log("newvalue", newValue);
            if (newValue !== "") {
              setLoanTerm(parseFloat(newValue));
            } else {
              setLoanTerm(0);
            }
          }}
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
  isFormVisible,
  setIsFormVisible,
}: NewPurposeFormProps) {
  const calculateRefinance = () => {
    //for refinancing
    const companyInterestRate = 2.8;
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const totalPayments = loanTerm * 12;
    const payment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

    //we have interestRate of 2.8%, if their current interest is higher, we can help them to refinance and show potential saving
    const altmonthlyInterestRate = companyInterestRate / 100 / 12;
    const alternatepayment =
      (principal * altmonthlyInterestRate) /
      (1 - Math.pow(1 + altmonthlyInterestRate, -totalPayments));

    setMonthlyPayment(payment);
    setAltMonthlyPayment(alternatepayment);
    //calculate the savings if they had a better interest rate
    setTotalSavings(payment - alternatepayment);

    setIsFormVisible(true);

    // console.log(totalPayments);
    // console.log(altmonthlyInterestRate);
    // console.log(monthlyInterestRate);
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
            const newValue = event.target.value;

            if (newValue !== "") {
              setPrincipal(parseFloat(newValue));
            } else {
              setPrincipal(0);
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
            const newValue = event.target.value;
            if (newValue !== "") {
              setLoanTerm(parseFloat(newValue));
            } else {
              setLoanTerm(0);
            }
          }}
        />
      </div>
      <div className="input-groups">
        <TextField
          required
          label="Current Interest Rate"
          fullWidth={true}
          inputProps={{ maxLength: 4 }}
          value={interestRate}
          onChange={(event) => {
            const newValue = event.target.value;
            if (newValue !== "") {
              setInterestRate(newValue);
            } else {
              setInterestRate("");
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

interface MortgageDetails {
  principal: number;
  interestRate: string;
  loanTerm: number;
  monthlyPayment: number;
  altMonthlyPayment: number;
  totalSavings: number;
  isFormVisible: boolean;
}

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  //set a state which stores the details
  const [mortgateDetails, setMortgateDetails] = useState<
    MortgageDetails | undefined
  >(undefined);

  //define some functions that will help to validate input
  const handleInput = (event: { target: { value: any } }) => {
    setAltMonthlyPayment(event.target.value || undefined);
  };

  //to differentiate between refinance or mortgage
  const [currPurpose, setCurrPurpose] = useState<Purpose>(Purpose.NEW_PURCHASE);

  //for refinancing
  const [altmonthlyPayment, setAltMonthlyPayment] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <div className="mortgage-calculator">
        <div className="calculator">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="container">
              {/* <div className="mortgage-calculator-info">
            Budget your monthly expenses properly and find out how much you need
            to set aside for your monthly repayments with our Mortgage
            Calculator.
          </div> */}
              <div className="first-columns">
                <div className="mortgage-header">Mortgage Calculator</div>
                {/* Choose Mortgage Calculator or Refinance */}
                <div className="purpose-buttons">
                  <ButtonGroup fullWidth>
                    <Button
                      onClick={() => {
                        setCurrPurpose(Purpose.NEW_PURCHASE);
                        setPrincipal(0);
                        setInterestRate("");
                        setLoanTerm(0);
                      }}
                    >
                      New Purchase{" "}
                    </Button>
                    <Button
                      onClick={() => {
                        setCurrPurpose(Purpose.REFINANCING);
                        setPrincipal(0);
                        setInterestRate("");
                        setLoanTerm(0);
                      }}
                    >
                      Refinancing
                    </Button>
                  </ButtonGroup>
                </div>
                {/* based on the options, the selected form will appear */}
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
                    isFormVisible={isFormVisible}
                    setIsFormVisible={setIsFormVisible}
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
                    isFormVisible={isFormVisible}
                    setIsFormVisible={setIsFormVisible}
                  />
                )}
              </div>
              {/* if New Purchase is chosen it will fly to this column */}
              {isFormVisible &&
                (currPurpose === Purpose.NEW_PURCHASE ? (
                  <div className="second-columns">
                    {monthlyPayment > 0 && (
                      <>
                        <div className="result">
                          <Card
                            variant="outlined"
                            sx={{
                              boxShadow: 1,
                              borderRadius: 2,
                              p: 2,
                              maxWidth: 500,
                            }}
                          >
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                                align="center"
                                fontWeight={3}
                              >
                                <div>Mortgage Required</div>
                              </Typography>
                              <CardMedia
                                component="img"
                                alt="Refinance Pic"
                                height="200"
                                image="./HousePic.jpg"
                              />
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                align="left"
                              >
                                <p>
                                  Monthly mortgage payment : $
                                  {monthlyPayment.toFixed(2)}
                                </p>
                                <p>
                                  Yearly Mortgage payment : $
                                  {(
                                    12 * parseFloat(monthlyPayment.toFixed(2))
                                  ).toFixed(2)}
                                </p>
                                <p>Years to pay off : {loanTerm} years</p>
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small">Share</Button>
                              <Button size="small">Learn More</Button>
                            </CardActions>
                          </Card>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="refinancing-columns">
                    {monthlyPayment > 0 && (
                      <div className="result">
                        <Card
                          variant="outlined"
                          sx={{
                            boxShadow: 1,
                            borderRadius: 2,
                            p: 2,
                            maxWidth: 500,
                          }}
                        >
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                              align="center"
                              fontWeight={3}
                            >
                              <div>
                                Compare interest rate and refinance to a better
                                home package
                              </div>
                            </Typography>
                            <CardMedia
                              component="img"
                              alt="Refinance Pic"
                              height="200"
                              image="./HousePic.jpg"
                            />
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              align="left"
                            >
                              <p>
                                Yearly Repayment : ${" "}
                                {(
                                  parseFloat(monthlyPayment.toFixed(2)) * 12
                                ).toFixed(2)}
                              </p>
                              <p>
                                Current Monthly Repayment : $
                                {parseFloat(monthlyPayment.toFixed(2))}
                              </p>
                              <p>
                                {/* based on better interest rates */}
                                New Repayment : $
                                {parseFloat(altmonthlyPayment.toFixed(2))}
                              </p>
                              <p>
                                Savings : ${parseFloat(totalSavings.toFixed(2))}
                              </p>
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
                ))}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MortgageCalculator;
