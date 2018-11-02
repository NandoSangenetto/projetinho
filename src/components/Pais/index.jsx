import React, { Fragment } from "react";
import styled from "styled-components";

const Pais = ({ code, emoji, name }) => (
  <a href={`/${code}`}>
    {emoji} {name}
    <br />
  </a>
);

export default Pais;
