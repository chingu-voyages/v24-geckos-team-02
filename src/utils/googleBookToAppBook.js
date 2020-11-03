function googleBookToAppBook({ volumeInfo, id, accessInfo, saleInfo }) {
  const { title = "", 
    subtitle = "", 
    authors = [], 
    publisher = "", 
    imageLinks = "", 
    categories = [] ,
    infoLink = "",
    description = "",
    publishedDate = "",
    averageRating = "none",
    ratingsCount = "none",
    pageCount = "",
    language = "",
    previewLink = ""
  } = volumeInfo;
  // const { webReaderLink = ""} = accessInfo;
  const { buyLink = "", retailPrice = "", saleability } = saleInfo;

  return {
    title,
    subtitle,
    authors,
    description,
    categories,
    publishedDate,
    publisher,
    id,
    thumbnailImageLink:
      imageLinks.smallThumbnail,
    averageRating,
    ratingsCount,
    pageCount,
    language,
    infoLink,
    // webReaderLink,
    buyLink,
    previewLink,
    saleability,
    retailPrice
  };
}

export default googleBookToAppBook;