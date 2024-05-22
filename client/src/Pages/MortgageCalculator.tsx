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
  mortgageDetails: MortgageDetails;
  setMortgageDetails: (mortgageDetails: MortgageDetails) => void;
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

//for the Purchase Form
function NewPurchaseForm({
  mortgageDetails,
  setMortgageDetails,
}: NewPurposeFormProps) {
  const interestRateRegex = /^\d+(\.\d{0,2})?(%?)$/;
  const calculateMortgage = () => {
    //to show the page
    const updatedFormState = { ...mortgageDetails, isFormVisible: true };
    setMortgageDetails(updatedFormState);
    console.log("updatedFormState", updatedFormState);
  };

  const handlePrincipalInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    if (input !== "") {
      const updatedDetails = {
        ...mortgageDetails,
        principal: parseFloat(input),
      };
      setMortgageDetails(updatedDetails);
    } else {
      setMortgageDetails({ ...mortgageDetails, principal: 0 });
    }
  };

  const handleInterestInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    if (input !== "") {
      const updatedDetails = {
        ...mortgageDetails,
        interestRate: input,
      };
      setMortgageDetails(updatedDetails);
    } else {
      setMortgageDetails({ ...mortgageDetails, interestRate: "" });
    }
  };

  const handleLoanTermInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    if (input !== "") {
      const updatedDetails = {
        ...mortgageDetails,
        loanTerm: parseFloat(input),
      };
      setMortgageDetails(updatedDetails);
    } else {
      setMortgageDetails({ ...mortgageDetails, loanTerm: 0 });
    }
  };

  return (
    <div className="new-purchase-form">
      <div className="input-groups">
        <TextField
          required
          label="Loan Amount"
          fullWidth={true}
          value={mortgageDetails.principal}
          onChange={handlePrincipalInputChange}
        />
      </div>
      <div className="input-groups">
        <TextField
          required
          label="Interest Rate"
          fullWidth={true}
          inputProps={{ pattern: interestRateRegex }}
          value={mortgageDetails.interestRate}
          onChange={handleInterestInputChange}
        />
      </div>
      <div className="input-groups">
        <TextField
          required
          label="Loan Term (Years)"
          value={mortgageDetails.loanTerm}
          fullWidth={true}
          onChange={handleLoanTermInputChange}
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
  mortgageDetails,
  setMortgageDetails,
}: NewPurposeFormProps) {
  const calculateRefinance = () => {
    //to show the page
    const updatedFormState = { ...mortgageDetails, isFormVisible: true };
    setMortgageDetails(updatedFormState);
    console.log("updatedFormState", updatedFormState);
  };

  //handle loan amt input, if input is "" den parseFloat will return NaN
  const handlePrincipalInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    if (input !== "") {
      const updatedDetails = {
        ...mortgageDetails,
        principal: parseFloat(input),
      };
      setMortgageDetails(updatedDetails);
    } else {
      setMortgageDetails({ ...mortgageDetails, principal: 0 });
    }
  };

  const handleInterestInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedDetails = {
      ...mortgageDetails,
      interestRate: event.target.value || "",
    };
    setMortgageDetails(updatedDetails);
  };

  const handleLoanTermInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    if (input !== "") {
      const updatedDetails = {
        ...mortgageDetails,
        loanTerm: parseFloat(input),
      };
      setMortgageDetails(updatedDetails);
    } else {
      setMortgageDetails({ ...mortgageDetails, loanTerm: 0 });
    }
  };

  return (
    <div className="refinancing-form">
      <div className="input-groups">
        <TextField
          required
          label="Remaining Loan Amount"
          fullWidth={true}
          value={mortgageDetails.principal}
          onChange={handlePrincipalInputChange}
        />
      </div>
      <div className="input-groups">
        <TextField
          required
          label="Remaining Loan Term"
          fullWidth={true}
          value={mortgageDetails.loanTerm}
          onChange={handleLoanTermInputChange}
        />
      </div>
      <div className="input-groups">
        <TextField
          required
          label="Current Interest Rate"
          fullWidth={true}
          inputProps={{ maxLength: 4 }}
          value={mortgageDetails.interestRate}
          onChange={handleInterestInputChange}
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

const initialMortgageDetails: MortgageDetails = {
  principal: 0, // Or a default value for principal
  interestRate: "", // Or a default value for interestRate
  loanTerm: 0, // Or a default value for loanTerm
  monthlyPayment: 0, // Or a default value for monthlyPayment
  altMonthlyPayment: 0, // Or a default value for altMonthlyPayment
  totalSavings: 0, // Or a default value for totalSavings
  isFormVisible: false, // Or a default value for isFormVisible
};

const MortgageCalculator = () => {
  //set a state which stores the details
  const [mortgageDetails, setMortgageDetails] = useState<MortgageDetails>(
    initialMortgageDetails
  );

  const companyInterestRate = 2.8;
  const monthlyInterestRate =
    parseFloat(mortgageDetails.interestRate) / 100 / 12;
  const totalPayments = mortgageDetails.loanTerm * 12;
  const payment =
    (mortgageDetails.principal * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

  //we have interestRate of 2.8%, if their current interest is higher, we can help them to refinance and show potential saving
  const altmonthlyInterestRate = companyInterestRate / 100 / 12;
  const alternatepayment =
    (mortgageDetails.principal * altmonthlyInterestRate) /
    (1 - Math.pow(1 + altmonthlyInterestRate, -totalPayments));

  mortgageDetails.altMonthlyPayment = alternatepayment;
  mortgageDetails.monthlyPayment = payment;
  mortgageDetails.totalSavings = payment - alternatepayment; //calculate savings

  //to differentiate between refinance or mortgage
  const [currPurpose, setCurrPurpose] = useState<Purpose>(Purpose.NEW_PURCHASE);
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
                        setMortgageDetails({
                          principal: 0, // Or a default value for principal
                          interestRate: "", // Or a default value for interestRate
                          loanTerm: 0, // Or a default value for loanTerm
                          monthlyPayment: 0, // Or a default value for monthlyPayment
                          altMonthlyPayment: 0, // Or a default value for altMonthlyPayment
                          totalSavings: 0, // Or a default value for totalSavings
                          isFormVisible: false, // Or a default value for isFormVisible
                        });
                      }}
                    >
                      New Purchase{" "}
                    </Button>
                    <Button
                      onClick={() => {
                        setCurrPurpose(Purpose.REFINANCING);
                        setMortgageDetails({
                          principal: 0, // Or a default value for principal
                          interestRate: "", // Or a default value for interestRate
                          loanTerm: 0, // Or a default value for loanTerm
                          monthlyPayment: 0, // Or a default value for monthlyPayment
                          altMonthlyPayment: 0, // Or a default value for altMonthlyPayment
                          totalSavings: 0, // Or a default value for totalSavings
                          isFormVisible: false, // Or a default value for isFormVisible
                        });
                      }}
                    >
                      Refinancing
                    </Button>
                  </ButtonGroup>
                </div>
                {/* based on the options, the selected form will appear */}
                {currPurpose === Purpose.NEW_PURCHASE ? (
                  <NewPurchaseForm
                    mortgageDetails={mortgageDetails}
                    setMortgageDetails={setMortgageDetails}
                  />
                ) : (
                  <RefinancingForm
                    mortgageDetails={mortgageDetails}
                    setMortgageDetails={setMortgageDetails}
                  />
                )}
              </div>
              {/* if New Purchase is chosen it will fly to this column */}
              {mortgageDetails.isFormVisible &&
                (currPurpose === Purpose.NEW_PURCHASE ? (
                  <div className="second-columns">
                    {mortgageDetails.monthlyPayment > 0 && (
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
                                image="./mortgagepic.webp"
                              />
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                align="left"
                              >
                                <br></br>
                                <p>
                                  Monthly mortgage payment : $
                                  {mortgageDetails.monthlyPayment.toFixed(2)}
                                </p>
                                <p>
                                  Yearly Mortgage payment : $
                                  {(
                                    12 *
                                    parseFloat(
                                      mortgageDetails.monthlyPayment.toFixed(2)
                                    )
                                  ).toFixed(2)}
                                </p>
                                <p>
                                  Years to pay off : {mortgageDetails.loanTerm}{" "}
                                  years
                                </p>
                              </Typography>
                            </CardContent>
                            {/* <CardActions>
                              <Button size="small">Share</Button>
                              <Button size="small">Learn More</Button>
                            </CardActions> */}
                          </Card>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="refinancing-columns">
                    {mortgageDetails.monthlyPayment > 0 && (
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
                              image="./mortgagepic.webp"
                            />
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              align="left"
                            >
                              <br></br>
                              <p>
                                Yearly Repayment : ${" "}
                                {(
                                  parseFloat(
                                    mortgageDetails.monthlyPayment.toFixed(2)
                                  ) * 12
                                ).toFixed(2)}
                              </p>
                              <p>
                                Current Monthly Repayment : $
                                {parseFloat(
                                  mortgageDetails.monthlyPayment.toFixed(2)
                                )}
                              </p>
                              <p>
                                {/* based on better interest rates */}
                                New Repayment : $
                                {parseFloat(
                                  mortgageDetails.altMonthlyPayment.toFixed(2)
                                )}
                              </p>
                              <p>
                                Savings : $
                                {parseFloat(
                                  mortgageDetails.totalSavings.toFixed(2)
                                )}
                              </p>
                            </Typography>
                          </CardContent>
                          {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                          </CardActions> */}
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
