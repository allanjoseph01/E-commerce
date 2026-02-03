import "server-only";
import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "All@n01Superbase",
  database: "sql_practice",  
  max: 10,                
  // idleTimeoutMillis: 30000,
  // connectionTimeoutMillis: 2000,
});

export default pool;