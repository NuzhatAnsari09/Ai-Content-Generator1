CREATE TABLE IF NOT EXISTS "aiOutput" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"formData" text NOT NULL,
	"templateSlug" text NOT NULL,
	"aiResponse" text NOT NULL,
	"createdBy" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
