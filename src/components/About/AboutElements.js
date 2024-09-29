import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 25px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  /* Red box shadow */
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.6);

  /* Hover effect */
  &:hover {
    transform: scale(1.05); /* Slight zoom */
    box-shadow: 0 6px 12px rgba(255, 0, 0, 0.8); /* More intense red on hover */
  }

  /* Fade-in animation */
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


export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;nn
  margin-bottom: -2rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`;

export const TechImg = styled.img`
  height: 40px;
  width: 40px;
  padding-bottom: 5px;
`;

export const TechName = styled.div`
  font-size: 14px;
`;
