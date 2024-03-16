const WebSocket = require('ws');

function setupWebSocket() {
    const wsUrl = 'wss://ws.aevo.xyz';
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
        console.log('WebSocket connection established');
        ws.send(JSON.stringify({
            "op": "subscribe",
            "data": ["orderbook:ETH-31MAR23-1350-C"]
        }));
    };

    ws.onmessage = (event) => {
        console.log('Message from server:', event.data);
    };

    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
        console.log('WebSocket connection closed');
    };
}

module.exports = setupWebSocket;