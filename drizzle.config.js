import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://contentgenerator_owner:qfaIY71mdsBO@ep-patient-pine-a17tb320.ap-southeast-1.aws.neon.tech/contentgenerator?sslmode=require",
  },
  verbose: true,
});
