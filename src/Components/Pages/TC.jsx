import React, { useState } from 'react';
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import img from '../../assets/images/banner/Transfer.jpg'

const TransferCertificate = () => {
  // Function to handle PDF download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/Transfer-Certificate.pdf";  // Ensure the correct path
    link.download = "Transfer-Certificate.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <>
      <Header/>
      <PageBanner title={"Transfer Certificate"} pageName="Activities" />
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              {/* Certificate Image */}
              <div className="mb-4">
                <img
                  src={img}
                  className="img-fluid border rounded shadow-sm"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-lg-12 mb-4">
                <div className="text-center">
                <button class="btn btn-primary mt-[10px]" onClick={handleDownload} type="submit" name="submit">Download Certificate (PDF)</button>
                </div>
              </div>
            </div>
          </div>

          {/* CSS */}
          {/* <style>
        {`
          .btn-main:hover {
            background-color: #0056b3 !important;
            transform: translateY(-2px);
          }
          
          .container {
            padding: 40px 20px;
          }
          
          .img-fluid {
            max-width: 100%;
            height: auto;
          }
        `}
      </style> */}
        </div>
      <Footer/>
    </>
  )
}

export default TransferCertificate

