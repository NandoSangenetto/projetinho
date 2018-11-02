import React from "react";
import { Query } from "react-apollo";

import { countryQuery } from "../../services/queries";

import LoadingSpinner from "../LoadingSpinner";
import Flag from "../Flag";
import Link from "../Link";

const ListPage = ({ country }) => (
  <Query query={countryQuery} variables={{ code: country.toUpperCase() }}>
    {({ error, data, loading }) => {
      if (loading) return <LoadingSpinner size="20px" color="black" />;
      if (error) return <div>Erro :(</div>;
      const { emoji: flag, name, currency, languages } = data.country;
      return (
        <section>
          <Flag>{flag}</Flag>
          <ul>
            <li>Name: {name}</li>
            <li>Currency: {currency}</li>
            <li>Languages: {languages.map(({ name }) => name).join(", ")}</li>
          </ul>
          <br />
          <Link to="/">Back to the list</Link>
        </section>
      );
    }}
  </Query>
);

export default ListPage;
