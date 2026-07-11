import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

let dbInstance: any = null;

function getDb() {
  if (!dbInstance) {
    let dbUrl = process.env.DATABASE_URL || '';
    // If DATABASE_URL is empty or the placeholder template, use a valid dummy URL for build-time evaluation
    if (!dbUrl || dbUrl.includes('host:port/db')) {
      dbUrl = 'postgresql://postgres:postgres@localhost:5432/postgres';
    }
    
    if (!dbUrl) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    
    const client = postgres(dbUrl, { prepare: false });
    dbInstance = drizzle(client, { schema });
  }
  return dbInstance;
}

export const db = new Proxy({} as any, {
  get(target, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver);
  }
});

export type Database = typeof db;
