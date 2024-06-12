import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Category from '../components/Category';
import FeatureProduct from '../components/products/FeatureProduct';
import Products from '../components/products/Products';
import Footer from '../components/Footer';

export const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Category />
      <div className="py-[45px]">
        <FeatureProduct />
      </div>
      <div className="py-10">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
            <div className="overflow-hidden">
              <Products title="Latest Products" />
            </div>
            <div className="overflow-hidden">
              <Products title="Top Rated Products" />
            </div>
            <div className="overflow-hidden">
              <Products title="Discount Products" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
