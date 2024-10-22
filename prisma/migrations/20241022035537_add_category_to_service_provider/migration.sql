-- DropForeignKey
ALTER TABLE "BookingDetails" DROP CONSTRAINT "BookingDetails_service_provider_id_fkey";

-- DropForeignKey
ALTER TABLE "BookingDetails" DROP CONSTRAINT "BookingDetails_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Favorites" DROP CONSTRAINT "Favorites_service_provider_id_fkey";

-- DropForeignKey
ALTER TABLE "Favorites" DROP CONSTRAINT "Favorites_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_booking_id_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_booking_id_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_user_id_fkey";

-- AlterTable
ALTER TABLE "BookingDetails" ALTER COLUMN "timeslot" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "Payments" ALTER COLUMN "recipient" DROP NOT NULL,
ALTER COLUMN "recipient" SET DATA TYPE JSON;

-- AlterTable
ALTER TABLE "ServiceProvider" ADD COLUMN     "category" JSON,
ALTER COLUMN "name" SET DATA TYPE VARCHAR,
ALTER COLUMN "phone_number" SET DATA TYPE VARCHAR,
ALTER COLUMN "email" SET DATA TYPE VARCHAR,
ALTER COLUMN "password_hash" SET DATA TYPE VARCHAR,
ALTER COLUMN "registration_date" DROP NOT NULL,
ALTER COLUMN "registration_date" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "plans" DROP NOT NULL,
ALTER COLUMN "plans" SET DATA TYPE JSON,
ALTER COLUMN "images" DROP NOT NULL,
ALTER COLUMN "images" SET DATA TYPE JSON;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET DATA TYPE VARCHAR,
ALTER COLUMN "phone_number" SET DATA TYPE VARCHAR,
ALTER COLUMN "address" SET DATA TYPE VARCHAR,
ALTER COLUMN "email" SET DATA TYPE VARCHAR,
ALTER COLUMN "password_hash" SET DATA TYPE VARCHAR,
ALTER COLUMN "registration_date" DROP NOT NULL,
ALTER COLUMN "registration_date" SET DATA TYPE TIMESTAMP(6);

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_service_provider_id_fkey" FOREIGN KEY ("service_provider_id") REFERENCES "ServiceProvider"("service_provider_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "BookingDetails" ADD CONSTRAINT "BookingDetails_service_provider_id_fkey" FOREIGN KEY ("service_provider_id") REFERENCES "ServiceProvider"("service_provider_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "BookingDetails" ADD CONSTRAINT "BookingDetails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "BookingDetails"("booking_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "BookingDetails"("booking_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;
