import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Card, Row, Image } from "antd";
import RadioBox from "./Sections/RadioBox";
import RangeSlider from "./Sections/RangeSlider";
import { gender, age } from "./Sections/Datas";

const { Meta } = Card;

const LandingPage = ({ SearchTerm }) => {
  const [Products, setProducts] = useState([]);

  const [Filters, setFilters] = useState({
    gender: [],
    age: [],
    price: [],
  });

  const [SearchWord, setSearchWord] = useState(SearchTerm);

  useEffect(() => {
    axios
      .get("http://localhost:8000/deli/product/getProducts")
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          setProducts(response.data);
        } else {
          alert("데이터 가져오기에 실패했습니다!");
        }
      });
  }, []);

  const getProducts = async (Filters, SearchWord) => {
    axios
      .post("http://localhost:8000/deli/product/getProducts", Filters)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          setProducts(response.data);
        } else {
          console.log("데이터 가져오기에 실패했습니다!");
          //alert("Failed to fetch product datas");
        }
      });
  };

  const getSearchResult = (SearchWord) => {
    axios
      .get(`http://localhost:8000/deli/product/search?keyword=${SearchWord}`)
      .then((response) => {
        if (response.data) {
          setProducts(response.data);
          setSearchWord("");
        } else {
          console.log("검색 결과 찾기 실패!");
        }
      });
  };

  if (SearchWord) getSearchResult(SearchWord);

  const renderCards = Products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} span={8}>
        <Card
          hoverable={true}
          key={index}
          style={{ width: 300 }}
          cover={
            <a href={`/product/${product.id}`}>
              <Image width={300} src={product.imageUrl} />
            </a>
          }
        >
          <Meta
            title={product.productname}
            description={`${product.price}원`}
          />
        </Card>
      </Col>
    );
  });

  const showFilteredResults = (filters) => {
    getProducts(filters);
  };

  const handlePrice = (value) => {
    let array = [];
    array = value;
    console.log("array", array);
    return array;
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }

    console.log(newFilters);

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const showFilteredWords = () => {
    if (
      Filters.age.length !== 0 &&
      Filters.gender.length !== 0 &&
      Filters.price
    ) {
      return (
        <div
          style={{
            margin: "3rem auto",
            fontWeight: "900",
            color: "#fd6f22",
          }}
        >
          '{age[Filters.age].name} {gender[Filters.gender].name}'에게 인기있는
          선물 중 '{Filters.price[0]}원에서 {Filters.price[1]}원'대의 선물 검색
          결과입니다
        </div>
      );
    }
  };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      {/* Filter  */}

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <div>성별</div>
          <RadioBox
            list={gender}
            handleFilters={(filters) => handleFilters(filters, "gender")}
          />
          <span>나이</span>
          <RadioBox
            list={age}
            handleFilters={(filters) => handleFilters(filters, "age")}
          />
          <span>가격대</span>
          <RangeSlider
            handleFilters={(filters) => handleFilters(filters, "price")}
          />
        </Col>
      </Row>

      {/* Search  */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1rem auto",
        }}
      ></div>
      <h3>{showFilteredWords()}</h3>
      {Products.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>No post yet...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
      <br />
      <br />
    </div>
  );
};

export default LandingPage;
