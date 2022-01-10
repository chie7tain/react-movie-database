import React from "react";

//Helpers
import { calcTime, convertMoney } from "../../helpers";
//styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div classname="column">
        <p>Running Time: {calcTime(time)}</p>
      </div>
      <div classname="column">
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div classname="column">
        <p>Revenue: {convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);
export default MovieInfoBar;
