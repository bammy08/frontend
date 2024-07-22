import React, { useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Category from '../components/Category';
import FeatureProduct from '../components/products/FeatureProduct';
import Products from '../components/products/Products';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { get_product } from '../store/reducers/homeReducer';

export const Home = () => {
  const dispatch = useDispatch();
  const { products, topRated_product, discount_product, latest_product } =
    useSelector((state) => state.home);

  useEffect(() => {
    dispatch(get_product());
  }, [dispatch]);

  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Category />
      <div className="py-[45px]">
        <FeatureProduct products={products} />
      </div>
      <div className="py-10">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
            <div className="overflow-hidden">
              {latest_product && (
                <Products title="Latest Products" products={latest_product} />
              )}
            </div>
            <div className="overflow-hidden">
              <Products
                title="Top Rated Products"
                products={topRated_product}
              />
            </div>
            <div className="overflow-hidden">
              <Products title="Discount Products" products={discount_product} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
