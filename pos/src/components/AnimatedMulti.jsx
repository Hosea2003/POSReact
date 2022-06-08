import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const colourOptions=[
    {label:"Appolo", value:"appolo"},
    {label:"Presto", value:"presto"},
    {label:"Soupe", value:"soupe"},
    {label:"Pizza", value:"pizza"},
    {label:"Flan", value:"flan"},

]


const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
    console.log("ato")
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[1], colourOptions[2]]}
      isMulti
      options={colourOptions}
    />
  );
}