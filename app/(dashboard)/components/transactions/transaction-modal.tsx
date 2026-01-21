import { Button } from "@/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";
import Image from "next/image";
import priceFormatter from "@/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";

type TTransactionModal = {
    isOpen: boolean;
    onClose: () =>  void; 
}

const TransactionModal = ({isOpen, onClose}: TTransactionModal) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
            <div className="flex gap-6">
                <div>
                    <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
                    <Image src="/images/payment-proof.png" alt="paymeny proof" width={200} height={401}/>
                </div>
                <div>
                    <div>
                        <h4 className="font-semibold text-sm mb-2">Orders Details</h4>
                        <div className="bg-gray-100 rounded-md flex flex-col gap-2.5 p-4 text-sm mb-5">
                            <div className="flex justify-between foot-medium">
                                <div className="opacity-50">Date</div>
                                <div className="text-right">23/02/2026 19:31</div>
                            </div>
                            <div className="flex justify-between foot-medium">
                                <div className="opacity-50">Customer</div>
                                <div className="text-right">John Doe</div>
                            </div>
                            <div className="flex justify-between foot-medium">
                                <div className="opacity-50">Contact</div>
                                <div className="text-right">123123123</div>
                            </div>
                            <div className="flex justify-between gap-10 foot-medium">
                                <div className="opacity-50 whitespace-nowrap">Shipping Address</div>
                                <div className="text-right">
                                    Merdeka Street, Jakarta, Indonedia, 332211
                                </div>
                            </div>
                        </div>
                        
                        <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
                        <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2">
                            <div className="bg-gray-100 rounded aspect-square w-8 h-8">
                                <Image src="/images/products/product-1.svg" alt="product image" width={30} height={30}/>
                            </div>
                            <div className="font-medium text-sm">SportOn Hyperfast Shoes</div>
                            <div className="font-medium ml-auto">3 units</div>
                        </div>
                        <div className="flex justify-between font-semibold text-sm mt-6">
                            <h4 className=" text-sm">Total</h4>
                            <div className="text-primary">
                                {priceFormatter(450000)}
                            </div>
                        </div>
                        <div className="flex justify-end gap-5 mt-10">
                            <Button className="text-primary! bg-primary-light! rounded-md cursor-pointer">
                                <FiX size={20}/>
                                Reject
                            </Button>
                            <Button className="text-white! bg-[#50C252]! rounded-md  cursor-pointer">
                                <FiCheck  size={20}/>
                                Approve
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default TransactionModal;