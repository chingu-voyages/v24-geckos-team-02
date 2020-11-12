const formatRatingCount = (ratings) => {
  if(ratings === "none") {
		ratings = "no votes"
	} else if(ratings > 1) {
		ratings = `${ratings} votes` 
	} else {
		ratings = `${ratings} vote` 
  }
  return ratings
}

export default formatRatingCount;