CREATE TABLE IF NOT EXISTS "taxslabbusiness" (
	"mid" serial PRIMARY KEY NOT NULL,
	"taxyear" integer NOT NULL,
	"sid" integer NOT NULL,
	"paymentsection" varchar NOT NULL,
	"paymenttype" varchar NOT NULL,
	"regstatus" varchar NOT NULL,
	"residency" numeric NOT NULL,
	"status" varchar NOT NULL,
	"taxrate" numeric NOT NULL,
	"psidsection" varchar NOT NULL,
	"efilingcode" varchar NOT NULL,
	"taxnature" varchar NOT NULL
);
