import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan'
import router from './router';
import graphqlHTTP from 'express-graphql';
import {makeExecutableSchema} from 'graphql-tools'
import graphql from 'graphql';
import path from 'path';
import fs from 'fs';
import connectMongoose from './mgStore';

const PORT = 3012;
const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/api', router);

console.log('#[Uploading the router for the API.]');


// console.log('#[Setting the static files is done.]');

console.log('Connecting the MongDB...')
connectMongoose();
console.log('Being connected successfully.')

// page router
let indexPage = "";

fs.readFile(path.resolve(__dirname, '../client-yc/dist/index.html'), 'utf8', function(err, data){
  indexPage = data;

});
app.use('/', express.static(__dirname + '/../client-yc/dist'));
app.get('/', (req, res) => res.end(indexPage))

const typeDefs = `
  type geo{
    lat:Float,
    lng:Float
  }
  type company{
    name:String
    catchPhrase:String
    bs:String
  }
  type address{
    street:String
    suite:String
    city:String
    zipcode:String
    geo:geo
  }
  type user{
    id:Int
    name:String
    username:String
    email:String
    address:address
    phone:String
    website:String
    company:company
  }
  type Query{
    user(id:Int!, name: String!):user
    allUser:[user]
  }
`;
const resolvers = {
  Query: {
    user(_, { id, name }) {


      console.log('asldkfjalksdjflakjsdf')
      console.log(`${_}`)
      console.log('1234132412341234')
      console.log(`${id}`)
      console.log('zxcvzxcvzxcvzxcv')
      console.log(`${name}`)

      return {
        name: 'a'
      }
    },
    allUser() {
      return [{
        name: 'a'
      }];
    }
  }
};

const schema = makeExecutableSchema({ //typeDefs와 resolvers를 결합해서 하나의 스키마로 만들어 줍니다. 이때 중복되는 Type의 경우에는 한번만 실행됩니다.
  typeDefs,
  resolvers
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const server = app.listen(PORT, () =>
    console.log(`-- HTTP Server running on ${PORT}`)
);