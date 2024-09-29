import React from "react";
import { CertificateWrapper, CertificateItem, CertificateTitle, CertificateImage, CertificateHeading } from "./certificateElements";

const Certificates = () => {
  const certificateData = [
    {
      title: "Diploma in Electrical Engineering",
      img: "/assets/images/certificate01.jpg",
    },
    {
      title: "Introduction to Artificial Intelligence by IBM",
      img: "/assets/images/certificate02.jpg",
    },
    {
      title: "Foundation of UX Design by Coursera",
      img: "/assets/images/certificate03.jpg",
    },
    {
      title: "Virtual Internship Data Engineering by AWS",
      img: "/assets/images/certificate04.jpg",
    },
    {
      title: "Frontend Developer(React) by Hackerrank",
      img: "/assets/images/certificate05.jpg",
    },
    {
      title: "Introduction to AWS identity and access management by AWS",
      img: "/assets/images/certificate06.jpg",
    },
    
    
  ];

  return (
    <CertificateWrapper>
      <CertificateHeading>My Certificates</CertificateHeading>
      {certificateData.map((certificate, index) => (
        <CertificateItem key={index}>
          <CertificateImage src={certificate.img} alt={certificate.title} />
          <CertificateTitle>{certificate.title}</CertificateTitle>
        </CertificateItem>
      ))}
    </CertificateWrapper>
  );
};

export default Certificates;
