/*
  Warnings:

  - Added the required column `rating` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reviews` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "rating" TEXT NOT NULL,
ADD COLUMN     "reviews" INTEGER NOT NULL;
