import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Img = styled.img`
  width: 100%;
  aspect-ratio: 1 /1.5;
  object-fit: cover;
  cursor: pointer;
`;
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(item?.price);
  const showDetail = () => {
    navigate(`products/${item?.id}`);
  };
  return (
    <Container onClick={showDetail}>
      <Img src={item && item?.img} alt="style" />
      <div>Conscious Choice</div>
      <div>{item && item?.title}</div>
      <div>{item && formattedPrice}</div>
      <div>{item && item?.new === true ? "신상품" : ""}</div>
    </Container>
  );
};

export default ProductCard;
