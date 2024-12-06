function checkInventory(productName, quantity) {
    if (quantity < 10) {
        console.log(`Alert for ${productName}: Restock Immediately!`);
    } else if (quantity >= 10 && quantity <= 20) {
        console.log(`Alert for ${productName}: Stock is Low.`);
    } else {
        console.log(`Inventory for ${productName} is Adequate. No alert needed.`);
    }
}

// Example usage:
checkInventory("Product A", 5);   
checkInventory("Product B", 15);
checkInventory("Product C", 25); 
