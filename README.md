# Full Stack Quotes App Using Node and React

If you want to learn how to build this app, please follow along with the blog.

## Downloading and running this app.

1. Install Postgres, Node, and a package manager (I'm using npm) onto your machine.
2. Clone this repository.
3. Run `createdb quotes-app` to create the database.
4. Add the table and seed the database:

 * `psql -d quotes-app -f db/migrations/migration-1542299195696.sql`
 * `psql -d quotes-app -f db/seeds/quotes.sql`

5. Run `npm install` in your terminal to install dependencies.
6. Start the server with `npm start`.
7. In a separate tab build the front-end with `npm run build`.
8. Navigate to http://localhost:3000/ in your browser. 
