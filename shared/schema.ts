import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const animals = pgTable("animals", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  category: text("category").notNull(), // bovinos, equinos, ovinos, caprinos
  breed: text("breed").notNull(),
  age: integer("age").notNull(), // em meses
  sex: text("sex").notNull(), // macho, fêmea
  weight: decimal("weight", { precision: 10, scale: 2 }).notNull(), // em kg
  price: decimal("price", { precision: 10, scale: 2 }),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  featured: text("featured").default("no"), // yes, no
  color: text("color"),
  height: decimal("height", { precision: 10, scale: 2 }), // em cm
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  interest: text("interest").notNull(), // compra, venda, parceria, outros
  message: text("message").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const insertAnimalSchema = createInsertSchema(animals).omit({
  id: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export type InsertAnimal = z.infer<typeof insertAnimalSchema>;
export type Animal = typeof animals.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
