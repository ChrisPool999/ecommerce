/*
  Warnings:

  - Made the column `name` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `brand` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "products" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "brand" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
