/*
  Warnings:

  - Added the required column `images` to the `ServiceProvider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServiceProvider" ADD COLUMN     "images" JSONB NOT NULL;
