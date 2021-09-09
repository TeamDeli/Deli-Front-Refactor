import React, { useState, useRef } from "react";
import styled from "styled-components";

const SearchFeature = (props) => {
  const [SearchTerm, setSearchTerms] = useState("");
  const inputEl = useRef("");

  const onChangeSearch = (event) => {
    setSearchTerms(event.currentTarget.value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      props.setupdateSearchTerm(SearchTerm);
    }
  };
  return (
    <SearchWrap>
      <Input
        ref={inputEl}
        type="text"
        placeholder="선물을 검색해주세요"
        onChange={onChangeSearch}
        value={SearchTerm}
        onKeyPress={onKeyPress}
      />
    </SearchWrap>
  );
};

export default SearchFeature;
// const Search = styled.div`
//   right: 700px;
// `;

const SearchWrap = styled.div`
  width: 350px;
  height: 36px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: rgba(179, 191, 201, 0.15);
  line-height: 33px;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 19px;
  justify-content: center;
`;
const Input = styled.input`
  color: #000;
  width: 196px;
  border: transparent;
  font-size: 12px;
  background: transparent;
  outline: none;
  &::placeholder {
    color: #d1d8de;
  }
`;
