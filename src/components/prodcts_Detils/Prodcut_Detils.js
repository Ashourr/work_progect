import React from "react";
import Detils_lift from "./Detils_lift";
import Detils_right from "./Detils_right";
import SimilarProductsSection from "../SimilarProducts/SimilarProductsSection";

export default function Prodcut_Detils() {
  return (
    <div className="prodcut-detils">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 mt-4 mb-md-5 mb-3">
            <Detils_lift />
          </div>
          <div className="col-12 col-lg-5 mt-md-4 mt-3 mb-5">
            <Detils_right />
          </div>
        </div>
        <div>
          <SimilarProductsSection />
        </div>
      </div>
    </div>
  );
}
