function Card() {
	var suit, value, imgValue; 
	
	this.setCard = function(theValue, theSuit, theImgValue){
		value = theValue;
	  suit = theSuit;
		imgValue = theImgValue;
	}
	
	this.getSuit = function() {
	  return suit;
	}
	
	this.getImgValue = function() {
		return imgValue;
	}
	
	this.getValue = function() {
		return value;
	}
} 
