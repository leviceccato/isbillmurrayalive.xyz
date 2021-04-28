const wikipedia = require('wikipedia')

exports.handler = async (event, context) => {
    try {
		const page = await wikipedia.page('Bill Murray')
		const infobox = await page.infobox()
        const message = infobox.deathDate ? 'He is not still alive' : 'He is still alive'
		return {
            statusCode: 200,
            body: JSON.stringify({ message })
        }
	} catch (message) {
		return {
            statusCode: 500,
            body: JSON.stringify({ message })
        }
	}
}