import React from "react";
import { Query } from "react-apollo";

import { countriesQuery } from "../../services/queries";

import Pais from "../Pais";
import LoadingSpinner from "../LoadingSpinner";

const ListPage = () => (
  <Query query={countriesQuery}>
    {({ error, data, loading }) => {
      if (loading) return <LoadingSpinner size="20px" color="black" />;
      if (error) return <div>Erro :(</div>;
      const { countries } = data;
      return (
        <section>
          {countries.map(country => <Pais key={country.code} {...country} />)}
        </section>
      );
    }}
  </Query>
);

export default ListPage;
