import {
  pgTable,
  serial,
  integer,
  text,
  varchar,
  timestamp,
  boolean,
  numeric,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
//import { InferModel } from "drizzle-orm";  // 'InferModel' is deprecated.ts,
//therefore use 'InferSelectModel'
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";

export const taxslabbusiness = pgTable("taxslabbusiness", {
  mid: serial("mid").primaryKey(),
  taxyear: integer("taxyear").notNull(),
  sid: integer("sid").notNull(),
  paymentsection: varchar("paymentsection").notNull(),
  paymenttype: varchar("paymenttype").notNull(),
  regstatus: varchar("regstatus").notNull(),
  residency: numeric("residency").notNull(),
  commodity: varchar("status").notNull(),
  taxrate: numeric("taxrate").notNull(),
  psidsection: varchar("psidsection").notNull(),
  efilingcode: varchar("efilingcode").notNull(),
  taxnature: varchar("taxnature").notNull(),
});

export type TaxSlabBusiness = InferSelectModel<typeof taxslabbusiness>;
export type InsertTaxSlabBusiness = InferInsertModel<typeof taxslabbusiness>;
