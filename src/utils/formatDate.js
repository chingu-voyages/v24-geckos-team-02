const formatDate = (publishedDate) => {
  if(publishedDate !== "") {
    const date = new Date(publishedDate)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    date.toLocaleDateString('en', options)
    return date.toLocaleDateString('en', options);
  }
  return ""
}

export default formatDate;