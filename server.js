async function fetchOrderBookData() {
    try {
        const response = await fetch('https://api.hyperliquid.xyz/info', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "type": "l2Book",
                "coin": "BTC"
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Order book data:', JSON.stringify(data, null, 2));
        return data;
    } catch (error) {
        console.error('Fetch error:', error.message);
        throw error;
    }
}

module.exports = fetchOrderBookData;