import React, { useState } from "react";
import { Slider, InputNumber } from "antd";

const RangeSlider = (props) => {
  const [MinValue, setMinValue] = useState(0);
  const [MaxValue, setMaxValue] = useState(200000);
  const min = 0;
  const max = 200000;
  const step = 5000;

  const handleChange = (value) => {
    if (value[0] < value[1]) {
      setMinValue(value[0]);
      setMaxValue(value[1]);
    }
    props.handleFilters(value);
  };

  const onChangeMin = (value) => {
    if (MaxValue > value) {
      setMinValue(value);
    }
  };

  const onChangeMax = (value) => {
    if (MinValue < value) {
      setMaxValue(value);
    }
  };

  return (
    <>
      <Slider
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        range={true}
        defaultValue={[min, max]}
        value={[MinValue, MaxValue]}
        dotStyle={{ borderColor: "#fd6f22" }}
      />
      <InputNumber
        min={min}
        max={max}
        value={MinValue}
        onChange={onChangeMin}
      />
      <span> 원 </span>
      <span> ~ </span>
      <InputNumber
        min={min}
        max={max}
        value={MaxValue}
        onChange={onChangeMax}
      />
      <span> 원 </span>
    </>
  );
};

export default RangeSlider;
