import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 60px 20px 60px;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);
  background-color: #fdf0f7;
  width: 100%;

  min-height: 1000px;
  position: relative;
`;
export const GoBack = styled.div`
  display: flex;

  width: 100px;
  align-items: center;
  justify-content: center;
  border: 2px solid gray;
  border-radius: 4px;
  margin: 5px 10px;
  padding: 4px;
`;
export const FilmCard = styled.div`
  display: flex;

  padding: 10px 10px;
  border-bottom: 1px solid gray;

  @media screen and (max-width: 647px) {
     {
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  padding-left: 20px;
  padding-top: 5px;
  border-top: 2px solid gray;
`;
export const FilmImg = styled.img`
  border-radius: 10px;
  border: 2px solid gray;
  margin-right: 20px;
  padding: 0;
  width: 250px;
`;
export const OwerviewWrapper = styled.div`
  padding: 5px 15px;

  font-size: 18px;
  font-weight: 400;
  text-align: justify;
  line-height: 1.4;
  border-radius: 6px;
  background-color: #fdf0f7;
`;

export const LinkWrapper = styled.div`
  display: flex;
  padding: 5px 50px;

  gap: 15px;
  border-bottom: 3px solid gray;
`;
export const Cast = styled.div`
  display: flex;
  width: 80px;
  align-items: center;
  justify-content: center;
  border: 2px solid gray;
  border-radius: 4px;
  padding: 4px;
`;

export const Reviews = styled.div`
  display: flex;
  width: 80px;
  align-items: center;
  justify-content: center;
  border: 2px solid gray;
  border-radius: 4px;
  padding: 4px;
`;
