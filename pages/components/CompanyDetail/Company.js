import React from "react";
import CompanyFooter from "./CompanyFooter";
import CompanyHead from "./CompanyHead";
import CompanyMain from "./CompanyMain";

const Company = () => {
  return (
    <div className="bg-light pt-4 pb-4">
      <CompanyHead />
      <CompanyMain />
      <CompanyFooter />
    </div>
  );
};

export default Company;
