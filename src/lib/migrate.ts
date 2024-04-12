import { migrate } from "drizzle-orm/vercel-postgres/migrator";
// import { db } from "./drizzle";
import { db } from "./drizzle";

async function main() {
  console.log("Migration Started");

  await migrate(db, { migrationsFolder: "drizzle" });

  console.log("Migration completed");

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(0);
});
