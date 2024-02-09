"use client";
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

type Props = {};

ChartJS.register(ArcElement, Tooltip, Legend);

function formatIndianNumber(s: string) {
  let x = parseFloat(s);
  return x.toLocaleString("en-IN");
}

const SIP = (props: Props) => {
  const [investmentType, setInvestmentType] = useState("SIP");
  const [monthlySIPAmount, setMonthlySIPAmount] = useState(1000);
  const [lumpsumAmount, setLumpsumAmount] = useState(1000);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const calculateInvestedAmount = () => {
    if (investmentType === "SIP") {
      return monthlySIPAmount * investmentPeriod * 12;
    } else if (investmentType === "Lumpsum") {
      return lumpsumAmount;
    } else {
      // Handle unsupported investment type or provide a default value
      return 0;
    }
  };

  const calculateTotalWealth = () => {
    if (investmentType === "SIP") {
      const monthlyRateOfReturn = expectedReturn / (100 * 12);
      const totalMonths = investmentPeriod * 12;
      const futureValue =
        monthlySIPAmount *
        ((Math.pow(1 + monthlyRateOfReturn, totalMonths) - 1) /
          monthlyRateOfReturn);
      return futureValue;
    } else if (investmentType === "Lumpsum") {
      const totalInvestment = lumpsumAmount;
      const rateOfReturn = expectedReturn / 100;
      const futureValue =
        totalInvestment * Math.pow(1 + rateOfReturn, investmentPeriod);
      return futureValue;
    } else {
      // Handle unsupported investment type or provide a default value
      return 0;
    }
  };

  const profit = () => {
    return calculateTotalWealth() - calculateInvestedAmount();
  };

  const data = {
    labels: ["Investment", "Profit"],
    datasets: [
      {
        label: "Profit",
        data: [calculateInvestedAmount().toFixed(0), profit().toFixed(0)],
        backgroundColor: ["#FF9933", "#0EA362"],
        borderColor: ["#FF9933", "#0EA362"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="rounded-xl bg-p_darkgreen max-w-6xl text-white m-10">
      <h1 className="font-semibold text-2xl text-center pt-8 mb-10">
        SIP Calculator
      </h1>
      <div className="flex flex-col lg:gap-16 lg:flex-row justify-between items-center px-16 pb-10">
        <div className="lg:pl-5">
          <div className="flex sm:text-xl justify-between gap-12">
            <div className="flex gap-2">
              <input
                type="radio"
                id="sip"
                name="investmentType"
                value="SIP"
                checked={investmentType === "SIP"}
                className="cursor-pointer accent-p_orange"
                onChange={() => setInvestmentType("SIP")}
              />
              <label htmlFor="sip" className="cursor-pointer">
                SIP Investment
              </label>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <input
                type="radio"
                id="lumpsum"
                name="investmentType"
                value="Lumpsum"
                checked={investmentType === "Lumpsum"}
                onChange={() => setInvestmentType("Lumpsum")}
                className="cursor-pointer accent-p_orange"
              />
              <label htmlFor="lumpsum" className="cursor-pointer">
                Lumpsum
              </label>
            </div>
          </div>

          <div className="mt-8 text-zinc-400 flex flex-col gap-8 w-full md:w-[50vw] max-w-[500px]">
            {investmentType === "SIP" ? (
              <div className="flex flex-col">
                <span className="flex justify-between pb-2">
                  <p>Monthly SIP Amount</p>
                  <p className="px-2 py-1 bg-zinc-200 text-black rounded-lg">
                    Rs. {monthlySIPAmount.toLocaleString('en-IN')}
                  </p>
                </span>
                <Slider
                  min={1000}
                  max={500000}
                  step={1000}
                  value={monthlySIPAmount}
                  onChange={(value) => setMonthlySIPAmount(value as number)}
                />
              </div>
            ) : (
              <div className="flex flex-col">
                <span className="flex justify-between pb-2">
                  <p>Lumpsum Amount</p>
                  <p className="px-2 py-1 bg-zinc-200 text-black rounded-lg">
                    Rs. {lumpsumAmount.toLocaleString('en-IN')}
                  </p>
                </span>
                <Slider
                  min={1000}
                  max={5000000}
                  step={1000}
                  value={lumpsumAmount}
                  onChange={(value) => setLumpsumAmount(value as number)}
                />
              </div>
            )}

            <div className="flex flex-col">
              <span className="flex justify-between pb-2">
                <p>Investment Period</p>
                <p className="px-2 py-1 bg-zinc-200 text-black rounded-lg">
                  {" "}
                  {investmentPeriod} Yr
                </p>
              </span>
              <Slider
                min={1}
                max={50}
                step={1}
                value={investmentPeriod}
                onChange={(value) => setInvestmentPeriod(value as number)}
              />
            </div>
            <div className="flex flex-col">
              <span className="flex justify-between pb-2">
                <p>Expected Return (p.a.)</p>
                <p className="px-2 py-1 bg-zinc-200 text-black rounded-lg">
                  {expectedReturn}%
                </p>
              </span>
              <Slider
                min={1}
                max={40}
                step={1}
                value={expectedReturn}
                onChange={(value) => setExpectedReturn(value as number)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-8 lg:mt-0 items-center">
          <Doughnut
            data={data}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: 'white'
                  }
                }
              }
            }}
          />
          <div className="flex flex-col mt-4 justify-center">
            <p>
              Estimated Return:{" "}
              <span className="text-lg text-p_orange">
                Rs. {formatIndianNumber(profit().toFixed(0))}
              </span>
            </p>
            <p>
              Invested Amount: Rs.{" "}
              {formatIndianNumber(calculateInvestedAmount().toFixed(0))}{" "}
            </p>
            <p>
              Total Wealth: Rs.{" "}
              {formatIndianNumber(calculateTotalWealth().toFixed(0))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIP;
