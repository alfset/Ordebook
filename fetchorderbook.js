const fetchOrderBookData = require('./server');
const setupWebSocket = require('./ws');


async function init() {
    try {
        await fetchOrderBookData();
        setupWebSocket();
    } catch (error) {
        console.error('Initialization error:', error.message);
    }
}

init();