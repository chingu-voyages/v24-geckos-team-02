import React from "react";
import formatLanguage from "../utils/isoLang";
import formatDate from "../utils/formatDate";

export default function Modal({ book, toggleModal }) {
	const {
		title,
		averageRating,
		// ratingsCount,
		categories,
		publishedDate,
		description,
		previewLink,
		infoLink,
		buyLink,
		retailPrice,
		pageCount,
		language,
    thumbnailImageLink,
    saleability
	} = book;

	let { ratingsCount } = book

	let readablePublishedDate = formatDate(publishedDate);

	let formattedLanguage = formatLanguage(language);

	const style = {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		backgroundColor: "white",
		zIndex: 200 
	};

	if(ratingsCount === "none") {
		ratingsCount = "no votes"
	} else if(ratingsCount > 1) {
		ratingsCount = `${ratingsCount} votes` 
	} else {
		ratingsCount = `${ratingsCount} vote` 
	}

	return (
		<div className="modal-container" style={style}>
			<h3>{title}</h3>
			{thumbnailImageLink !== undefined ? <img className="cover" src={thumbnailImageLink} alt="cover thumbnail" /> : null}
			{/* change rating by stars? */}
			<span>
				{averageRating} / 5 ({ratingsCount})
			</span>
      {saleability === "FREE" ? <p>FREE BOOK</p> : null}
			{categories.length !== 0 ? <p>Category: {categories}</p> : null}
			{publishedDate !== "" ? <p>Published date: {readablePublishedDate}</p> : null}
			<p id="modal-description">{description}</p>
			<p>
				{pageCount} pages, Language: {formattedLanguage}
			</p>
			<p>
				<a href={previewLink} target="blank">
					preview
				</a>
			</p>
			<p>
				<a href={infoLink} target="blank">
					info
				</a>
			</p>
			{retailPrice.amount ? (
				<p>
					<a href={buyLink} target="blank">
						buy for {retailPrice.amount}
						{retailPrice.currencyCode}
					</a>
				</p>
			) : null}

			<button onClick={() => toggleModal()}>close</button>
		</div>
	);
}
