import { pgTable, text, varchar, timestamp, uuid } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

// Subsidiaries table
export const subsidiaries = pgTable('subsidiaries', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
});

export const insertSubsidiarySchema = createInsertSchema(subsidiaries);
export const selectSubsidiarySchema = createSelectSchema(subsidiaries);
export type Subsidiary = z.infer<typeof selectSubsidiarySchema>;
export type NewSubsidiary = z.infer<typeof insertSubsidiarySchema>;
