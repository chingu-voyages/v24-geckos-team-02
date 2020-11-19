const formatURL = (url) => {
  return `https://${url.split("//")[1]}`
}

export default formatURL;