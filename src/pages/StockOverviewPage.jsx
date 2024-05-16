import React, { useState } from 'react';
import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";
import { Header } from "../../src/components/Header";
import { Slider } from "../widgets/Slider";
import "../../src/App.css";
import { Footer } from "../components/Footer";
import { MainSection } from "../components/MainSection";
import ChartWidget from '../widgets/ChartWidget';
import { HeatMapWidget } from '../widgets/HeadMapWidget';
import StockNewsWidget from '../widgets/StockNewsWidget';
import { Testimonials } from '../components/Testimonials';
import { Faq } from '../components/Faq';
import { FeaturedProducts } from '../components/FeaturedProducts';

export function StockOverviewPage() {
  const [currentPage, setCurrentPage] = useState("overview");

  return (
    <div>
      <Header />
      <MainSection />
      <h2
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontFamily: "fantasy",
      color: "white",
      backgroundColor: "#1E293B",
      margin: "10px auto 0",
      padding: "10px", /* Optional: Adding padding for better readability */
    }}
   className='text-2xl'>
    Stock Summary
  </h2>

      <AutoComplete />
   
    
      <StockList />
      <ChartWidget />
      <FeaturedProducts />
      <HeatMapWidget />
      <StockNewsWidget />
      <Testimonials />
      <Faq />
      <Footer />
   

    </div>
  );
}
