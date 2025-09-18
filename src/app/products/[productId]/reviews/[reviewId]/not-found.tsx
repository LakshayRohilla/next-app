"use client";

import { usePathname } from "next/navigation";

const NotFound = () => {
    const pathName = usePathname();
    const productId = pathName.split("/")[2];
    const reviewId = pathName.split("/")[4];

    return (
        <>
        <h2>Review {reviewId} Not Found for product {productId}</h2>
        </>
    )
}

export default NotFound;