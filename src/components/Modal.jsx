import React from "react";
import formatLanguage from "../utils/isoLang";
import formatDate from "../utils/formatDate";

export default function Modal({ book, toggleModal }) {
	const {
		title,
		averageRating,
		ratingsCount,
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

	return (
		<div className="modal-container" style={style}>
			<h3>{title}</h3>
			<img className="cover" src={thumbnailImageLink} alt="cover thumbnail" />
			{/* change rating by stars? */}
			<span>
				{averageRating} / 5 ({ratingsCount}{" "}
				{ratingsCount > 1 ? "votes" : "vote"})
			</span>
      {saleability === "FREE" ? <p>FREE BOOK</p> : null}
			<p>{categories}</p>
			<p>Published date: {readablePublishedDate}</p>
			<p>{description}</p>
			<p>
				{pageCount} pages, language: {formattedLanguage}
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
