import bills from "../assets/imgs/services/bills.svg";
import entertainment from "../assets/imgs/services/entertainment.svg";
import groceries from "../assets/imgs/services/groceries.svg";
import diningOut from "../assets/imgs/services/diningOut.svg";
import transportation from "../assets/imgs/services/transportation.svg";
import personalCare from "../assets/imgs/services/personalCare.svg";
import education from "../assets/imgs/services/education.svg";
import lifestyle from "../assets/imgs/services/lifestyle.svg";
import shopping from "../assets/imgs/services/shopping.svg";
import general from "../assets/imgs/services/general.svg";

export type ServiceImgs = {
  entertainment: { src: string };
  bills: { src: string };
  groceries: { src: string };
  diningOut: { src: string };
  transportation: { src: string };
  personalCare: { src: string };
  education: { src: string };
  lifestyle: { src: string };
  shopping: { src: string };
  general: { src: string };
};

const useServices = () => {
  const serviceOptions = [
    {
      label: "All Transactions",
      value: "all",
    },
    {
      label: "Entertainment",
      value: "entertainment",
    },
    {
      label: "Bills",
      value: "bills",
    },
    {
      label: "Groceries",
      value: "groceries",
    },
    {
      label: "Dining Out",
      value: "diningOut",
    },
    {
      label: "Transportation",
      value: "transportation",
    },
    {
      label: "Personal Care",
      value: "personalCare",
    },
    {
      label: "Education",
      value: "education",
    },
    {
      label: "Lifestyle",
      value: "lifestyle",
    },
    {
      label: "Shopping",
      value: "shopping",
    },
    {
      label: "General",
      value: "general",
    },
  ];

  const serviceImgs: ServiceImgs = {
    entertainment: entertainment,
    bills: bills,
    groceries: groceries,
    diningOut: diningOut,
    transportation: transportation,
    personalCare: personalCare,
    education: education,
    lifestyle: lifestyle,
    shopping: shopping,
    general: general,
  };

  return {
    serviceOptions,
    serviceImgs,
  };
};

export default useServices;
