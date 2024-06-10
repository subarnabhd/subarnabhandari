import Image from "next/image";
import React from "react";
import Timertag from "./Timertag";

const Product = () => {
	return (
		<a href="/product" className="productCard">

			<div className="product-img-parent">
				<div className="product-img">
					<Image className=" w-full" alt="" src="/product.jpg" width={100} height={100} />
				</div>

				<div className="save-tags">
					<Image className="save-tag-icon" alt="" src="/tag.svg" width={100} height={100} />
					<div className="save-parent">
						<b className="save">SAVE</b>
						<div className="save-price-parent">
							<b className="b">Rs</b>
							<b className="b">10</b>
						</div>
					</div>
				</div>


				<div className="veg-tag">
					<Image className="veg-icon" alt="" src="/veg.svg" width={100} height={100} />
				</div>
			</div>

			<div className="frameParent">

				<div className="frameGroup">
				<Timertag/>
					<p className="p-name">Storia 100% Tender Coconut Water</p>
				</div>

				<div className="p-unit">150gm</div>

				<div className="frameContainer">
					<div className="frameDiv">
						<div className="rsParent">
							<p className="rs">Rs</p>
							<p className="p1">500</p>
						</div>
						<div className="mrpParent">
							<div className="mrp">MRP</div>
							<div className="p2">500</div>
						</div>
					</div>
					<a href="/product" className="add-button">Add</a>
				</div>

			</div>

		</a>
	);
};

export default Product;
