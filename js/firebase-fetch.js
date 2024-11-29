// Veriyi al
async function fetchProductDetails(productKey) {
    const productRef = ref(database, 'products/' + productKey);

    try {
        const snapshot = await get(productRef);
        if (snapshot.exists()) {
            const productData = snapshot.val();

            // Veriyi HTML'ye yerleştir
            const productDetailDiv = document.getElementById('product-detail');
            productDetailDiv.innerHTML = `
                        <h1>${productData.name}</h1>
                        <p>${productData.description}</p>
                        <p>Yönetmen: ${productData.director}</p>
                        <p>Tür: ${productData.genre}</p>
                        <p>Fiyat: ${productData.price}</p>
                        <img src="${productData['image-url']}" alt="${productData.name}">
                    `;
        } else {
            console.error("Ürün bulunamadı.");
        }
    } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
    }
}