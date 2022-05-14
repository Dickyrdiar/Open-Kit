import React from 'react';
import HeroSection from '../../components/heroSection';
// import CardSection from '../../components/cardSection';
import FitureSection from '../../components/fitureSection';
import EquitableSection from '../../components/equitableSection';
import Footer from '../../components/footer';

const homePage = () => {
  return (
    <div>
      <HeroSection />
      {/* <div className="border-gray-300 px-2">
        <div className="container mx-auto sm:my-20">
          <CardSection label="card label" desc="card example" className="mt-900 bg-gray-300" />
        </div>
      </div> */}
      <FitureSection />
      <EquitableSection />
      <div className="mb-[100px]">
        <Footer />
      </div>
    </div>
  );
};

export default homePage;
