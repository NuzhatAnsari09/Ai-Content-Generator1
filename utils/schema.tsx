import { pgTable, text, uuid, timestamp, varchar, serial, boolean } from "drizzle-orm/pg-core";

export const aiOutput = pgTable("aiOutput", {
  id: uuid("id").defaultRandom().primaryKey(),
  formData: text("formData").notNull(),
  templateSlug: text("templateSlug").notNull(),
  aiResponse: text("aiResponse").notNull(),
  createdBy: text("createdBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});


export const UserSubscription = pgTable('userSubscription', {
  id: serial('id').primaryKey(),
  email: varchar('email'),
  userName: varchar('userName'),
  active: boolean('active'),
  paymentId: varchar('paymentId'),
  joinDate: varchar('joinDate')
})