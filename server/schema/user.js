import {graphql} from 'graphql';

export const user = new graphql.GraphQLObjectType({
  name: 'user',
  fields: {
    name: { type: graphql.GraphQLString },
    username: { type: graphql.GraphQLString },
    email: { type: graphql.GraphQLString }
  }
});

