-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'CUSTOMER');

-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('MASTERCARD', 'VISA', 'DISCOVER', 'AMEX');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'RECEIVED', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'FAILED');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" VARCHAR(256) NOT NULL,
    "password_hash" VARCHAR(60) NOT NULL,
    "phone_number" VARCHAR(15),
    "role" "UserRole" NOT NULL DEFAULT 'CUSTOMER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_methods" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "billing_address_id" INTEGER NOT NULL,
    "card_type" "CardType" NOT NULL,
    "last_four_card_number" VARCHAR(4) NOT NULL,
    "expiration_month" VARCHAR(2) NOT NULL,
    "expiration_year" VARCHAR(2) NOT NULL,
    "is_default" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "street_address" TEXT NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "zip" VARCHAR(30) NOT NULL,
    "country_code" VARCHAR(2) NOT NULL,
    "is_default" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "payment_method_id" INTEGER NOT NULL,
    "shipping_address_id" INTEGER NOT NULL,
    "subtotal" DECIMAL(10,2) NOT NULL,
    "expected_delivery" TIMESTAMP(3) NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit_price_at_purchase" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "brand" TEXT,
    "description" TEXT,
    "cost" DECIMAL(10,2) NOT NULL,
    "stock" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_images" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart_items" (
    "user_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cart_items_pkey" PRIMARY KEY ("user_id","product_id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "category_name" VARCHAR(20) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_categories" (
    "product_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "product_categories_pkey" PRIMARY KEY ("product_id","category_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "payment_methods_user_id_idx" ON "payment_methods"("user_id");

-- CreateIndex
CREATE INDEX "addresses_user_id_idx" ON "addresses"("user_id");

-- CreateIndex
CREATE INDEX "orders_user_id_created_at_idx" ON "orders"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "order_items_product_id_order_id_created_at_idx" ON "order_items"("product_id", "order_id", "created_at");

-- CreateIndex
CREATE INDEX "products_name_idx" ON "products"("name");

-- CreateIndex
CREATE INDEX "product_images_product_id_idx" ON "product_images"("product_id");

-- AddForeignKey
ALTER TABLE "payment_methods" ADD CONSTRAINT "payment_methods_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_methods" ADD CONSTRAINT "payment_methods_billing_address_id_fkey" FOREIGN KEY ("billing_address_id") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "payment_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_shipping_address_id_fkey" FOREIGN KEY ("shipping_address_id") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_images" ADD CONSTRAINT "product_images_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_categories" ADD CONSTRAINT "product_categories_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_categories" ADD CONSTRAINT "product_categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
