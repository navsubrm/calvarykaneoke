PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE [pages] (
    "_id" text PRIMARY KEY,
    "name" text,
    "route" text,
    "pageContent" text,
    "meta_data" text,
    "updatedAt" text,
    "version" integer
    );


-- this command will push the .sql file to the remote database.  It also pushes queries.
-- npx wrangler d1 execute  calvary_content --file=./schema.sql --remote

-- This command pushes the new database locally.
-- npx wrangler d1 execute DB --file=./schema.sql --local 

-- This fetches the schema from the remote database.
-- npx wrangler d1 export calvary_content --remote --output=./schema.sql --no-data


-- next look at what the pageContent object looks like?