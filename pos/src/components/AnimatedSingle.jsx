import React, { Component, Fragment } from 'react';

import Select from 'react-select';

const colourOptions=[
    {label:"Appolo", value:"appolo"},
    {label:"Presto", value:"presto"},
    {label:"Soupe", value:"soupe"},
    {label:"Pizza", value:"pizza"},
    {label:"Flan", value:"flan"},

]

const AnimatedSingle = () => {
  return (
    <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={colourOptions[0]}
          isDisabled={false}
          isClearable={true}
          isSearchable={true}
          name="color"
          options={colourOptions}
          styles={{width:'50%'}}
    />
  )
}

export default AnimatedSingle