import express from 'express';
import schema from './schema';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const server = app.listen(3000, () => {
    console.log(`\n\nExpress listen at http://localhost:3000 \n`);
});
