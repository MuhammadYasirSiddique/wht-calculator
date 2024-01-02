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


export const db = drizzle(sql);

export const taxslab = pgTable("taxslab", {
  mid: serial("mid").primaryKey(),
  taxyear: integer("taxyear").notNull(),
  sid: integer("sid").notNull(),
  min: integer("min").notNull(),
  max: integer("max").notNull(),
  fixtax: integer("fixtax").notNull(),
  taxrate: numeric("taxrate").notNull(),
//   status: text("status").notNull(),
});

export type TaxSlab = InferSelectModel<typeof taxslab>;
export type InsertTaxSlab = InferInsertModel<typeof taxslab>;

export const taxcodesalary = pgTable("taxcodesalary", {
  id: serial("id").primaryKey(),
  section: varchar("section").notNull(),
  status: varchar("status").notNull(),
  nature: varchar("nature").notNull(),
  code: varchar("code").notNull(),
  taxyear: integer("taxyear").notNull(),
});     

export type TaxCodeSalary = InferSelectModel<typeof taxcodesalary>;
export type InsertTaxCodeSalary = InferInsertModel<typeof taxcodesalary>;



export const taxslabproperty = pgTable("taxslabproperty", {
  mid: serial("mid").primaryKey(),
  taxyear: integer("taxyear").notNull(),
  sid: integer("sid").notNull(),
  min: integer("min").notNull(),
  max: integer("max").notNull(),
  fixtax: integer("fixtax").notNull(),
  taxrate: numeric("taxrate").notNull(),
  status: varchar("status").notNull(),
});
  
export type TaxSlabProperty = InferSelectModel<typeof taxslabproperty>;
export type InsertTaxSlabProperty = InferInsertModel<typeof taxslabproperty>;

