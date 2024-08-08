import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const investmentResults = calculateInvestmentResults(input);
  const initialInvestment =
    investmentResults[0].valueEndOfYear -
    investmentResults[0].annualInvestment -
    investmentResults[0].interest;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((yearResult) => {
          const totalInterest =
            yearResult.valueEndOfYear -
            yearResult.annualInvestment * yearResult.year -
            initialInvestment;
          const investedCapital = yearResult.valueEndOfYear - totalInterest;
          return (
            <tr key={yearResult.year}>
              <td>{yearResult.year}</td>
              <td>{formatter.format(yearResult.valueEndOfYear)}</td>
              <td>{formatter.format(yearResult.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
