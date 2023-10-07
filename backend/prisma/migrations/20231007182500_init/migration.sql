/*
  Warnings:

  - A unique constraint covering the columns `[receiptId]` on the table `Receipts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Receipts_receiptId_key" ON "Receipts"("receiptId");
