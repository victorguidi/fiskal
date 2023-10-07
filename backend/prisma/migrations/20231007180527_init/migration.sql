-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "updateAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "updateAt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Receipts" (
    "id" TEXT NOT NULL,
    "receiptId" TEXT NOT NULL,
    "whoRequestsId" TEXT NOT NULL,
    "whoBelongsId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Receipts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Receipts" ADD CONSTRAINT "Receipts_whoRequestsId_fkey" FOREIGN KEY ("whoRequestsId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receipts" ADD CONSTRAINT "Receipts_whoBelongsId_fkey" FOREIGN KEY ("whoBelongsId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
