import { getCart } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default async function Navbar() {
    const cart = await getCart();
    const totalQuantity = cart?.lineItems.reduce((acc, item) => acc + (item.quantity || 0), 0) || 0;

    return (
        <header>
            <div>
                <Link href="/" className="flex items-center gap-4">
                    <Image src="/assets/ds-store-logo.png" alt="ds-store-logo" width={40} height={40} />
                    <span className="text-xl font-bold">DStore</span>
                </Link>
            </div>
        </header>
    );
}
