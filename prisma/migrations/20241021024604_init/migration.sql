-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "registration_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "ServiceProvider" (
    "service_provider_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "registration_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "about_me" TEXT,
    "plans" JSONB NOT NULL,

    CONSTRAINT "ServiceProvider_pkey" PRIMARY KEY ("service_provider_id")
);

-- CreateTable
CREATE TABLE "Favorites" (
    "user_id" INTEGER NOT NULL,
    "service_provider_id" INTEGER NOT NULL,

    CONSTRAINT "Favorites_pkey" PRIMARY KEY ("user_id","service_provider_id")
);

-- CreateTable
CREATE TABLE "BookingDetails" (
    "booking_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "service_provider_id" INTEGER NOT NULL,
    "transaction_id" INTEGER,
    "timeslot" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,

    CONSTRAINT "BookingDetails_pkey" PRIMARY KEY ("booking_id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "transaction_id" SERIAL NOT NULL,
    "booking_id" INTEGER NOT NULL,
    "recipient" JSONB NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "Review" (
    "review_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "booking_id" INTEGER NOT NULL,
    "review_text" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("review_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceProvider_email_key" ON "ServiceProvider"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BookingDetails_transaction_id_key" ON "BookingDetails"("transaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "Payments_booking_id_key" ON "Payments"("booking_id");

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_service_provider_id_fkey" FOREIGN KEY ("service_provider_id") REFERENCES "ServiceProvider"("service_provider_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingDetails" ADD CONSTRAINT "BookingDetails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingDetails" ADD CONSTRAINT "BookingDetails_service_provider_id_fkey" FOREIGN KEY ("service_provider_id") REFERENCES "ServiceProvider"("service_provider_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "BookingDetails"("booking_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "BookingDetails"("booking_id") ON DELETE RESTRICT ON UPDATE CASCADE;
