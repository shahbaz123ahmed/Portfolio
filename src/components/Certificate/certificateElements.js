import styled from "@emotion/styled";

export const CertificateWrapper = styled.div`
  display: flex;
  flex-direction: row;  /* Row layout */
  justify-content: center;
  flex-wrap: wrap;  /* Allow wrapping to next line if needed */
  margin-top: 2rem;
  gap: 1.5rem;  /* Space between the cards */
  margin-bottom: 2rem;

`;
export const CertificateHeading = styled.h2`
  font-weight: 600; /* Semi-bold */
  font-size: 1.5rem
`;

export const CertificateItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1.5rem;
  width: 250px;  /* Adjust width to fit more cards in a row */
  box-shadow: 0 4px 8px rgb(0, 0, 255);
  background-color: #fff;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;  /* Smooth animation */
  
  /* Animation for hover effect */
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(255, 99, 71, 1);
  }

  /* Add fade-in animation when the cards load */
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CertificateTitle = styled.h3`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
`;

export const CertificateImage = styled.img`
  max-width: 100%;
  border-radius: 5px;
`;

