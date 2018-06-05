function produceDrivingRange(blockRange) {
	return function(firstBlock, secondBlock) {
		const realFirstBlock = Number(firstBlock.replace(/\D/g,''))
		const realSecondBlock = Number(secondBlock.replace(/\D/g,''))
		const range = realFirstBlock + blockRange
		const finalAnswer = range - realSecondBlock

		if (finalAnswer < 0) {
			return Math.abs(finalAnswer) + " blocks out of range"
		} else {
			return "within range by " + Math.abs(finalAnswer)
		}

	}
}

function produceTipCalculator(percentage) {
	return function(tip) {
		return tip * percentage
	}
}
	


// if blockRange + first block = +number (within range)
// if blockRange + first block = -number (blocks out of range)