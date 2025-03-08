import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

export default function ProductCarousel() {
    // ✅ Use your own product data
    const [products, setProducts] = useState([
        { id: 1, name: "Solar Wall Light SWL-28", price: 1200, image: "/solar-light.jpg", inventoryStatus: "INSTOCK" },
        { id: 2, name: "Speed-X 2.0V Premium 4k HDMI Cable", price: 800, image: "speed.jpg", inventoryStatus: "LOWSTOCK" },
        { id: 3, name: "Doomax Fast Micro Usb Charging + Data Cable 1M", price: 600, image: "usbCharger.png", inventoryStatus: "OUTOFSTOCK" },
        { id: 4, name: "M19 Pro Wireless With Microphone In-Ear Headsets Led Battery Display", price: 200, image: "earbuds.png", inventoryStatus: "INSTOCK" },
        { id: 5, name: "Ultra smart watch with 7 straps", price: 300, image: "smartWatch.jpg", inventoryStatus: "LOWSTOCK" }
    ]);

    // ✅ Responsive breakpoints
    const responsiveOptions = [
        { breakpoint: "1400px", numVisible: 2, numScroll: 1 },
        { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
        { breakpoint: "767px", numVisible: 2, numScroll: 1 },
        { breakpoint: "575px", numVisible: 1, numScroll: 1 }
    ];

    // ✅ Function to get the status color
    const getSeverity = (status) => {
        switch (status) {
            case "INSTOCK":
                return "success";
            case "LOWSTOCK":
                return "warning";
            case "OUTOFSTOCK":
                return "danger";
            default:
                return null;
        }
    };

    // ✅ Product Card Template for Carousel
    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-1 carousel2">
                <div className="mb-3">
                    {/* Ensure your images are in the correct path */}
                    <img src={`/carousel2/${product.image}`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product.inventoryStatus)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        {/* <Button icon="pi pi-search" rounded />
                        <Button icon="pi pi-star-fill" rounded severity="success" /> */}
                        <button>
                            View details
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // ✅ Return Carousel
    return (
        <div className="card">
            <h2>Featured Products</h2>
            <Carousel
                value={products}
                numVisible={3}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
                circular
                // autoplayInterval={3000} // Auto-scroll every 3 seconds
            />
        </div>
    );
}
