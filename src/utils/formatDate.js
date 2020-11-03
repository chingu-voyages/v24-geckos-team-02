const formatDate = (publishedDate) => {
  if(publishedDate !== "") {
    const date = new Date(publishedDate)
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    return `${year}/${month}/${day}`;
  }
  return ""
}

export default formatDate;