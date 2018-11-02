import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

import { countriesQuery } from "../../services/queries";

import Pais from "../Pais";
import LoadingSpinner from "../LoadingSpinner";

const ListPage = () => (
  <div>
    Country page, <Link to="/">go back to homepage</Link>
  </div>
  // <Query query={countriesQuery}>
  //   {({ error, data, loading }) => {
  //     if (loading) return <LoadingSpinner size="20px" color="black" />;
  //     if (error) return <div>Erro :(</div>;
  //     const { countries } = data;
  //     return (
  //       <section>{countries.map(country => <Pais {...country} />)}</section>
  //     );
  //   }}
  // </Query>
);

export default ListPage;
