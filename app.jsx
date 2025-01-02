document.getElementById('search-button').addEventListener('click', search);

function search() {
    const query = document.getElementById('search-input').value;
    const resultsDiv = document.getElementById('results');
    
    // Burada API veya veri tabanına istek atılmalıdır.
    // Örnek olarak sabit bir veri kullanıyoruz.
    const exampleData = [
        { title: "Şarkı 1", lyrics: "Bu bir test şarkı sözüdür." },
        { title: "Kitap 1", text: "Bu bir test kitap alıntısıdır." }
    ];

    const results = exampleData.filter(item => 
        item.lyrics.includes(query) || item.text.includes(query)
    );

    if (results.length > 0) {
        resultsDiv.innerHTML = results.map(item => 
            `<p><strong>${item.title}</strong>: ${item.lyrics || item.text}</p>`
        ).join('');
    } else {
        resultsDiv.innerHTML = `<p>Sonuç bulunamadı.</p>`;
    }
}
