function goBack() {
    window.history.back();
}
$(document).ready(function() {
    var setLang = $('#lanChange');
    if (localStorage.getItem('lang') == null) {
        localStorage.setItem('lang', 'EN');
        setLang.text('AR');
    } else {
        if (localStorage.getItem('lang') == 'EN') {
            setLang.text('AR');
        } else {
            setLang.text('EN');
        }
    }
    setLang.click(function() {
        if (localStorage.getItem('lang') == 'EN') {
            localStorage.setItem('lang', 'AR');
            setLang.text('EN');
            alert('Language changed to Arabic');
        } else if (localStorage.getItem('lang') == 'AR') {
            localStorage.setItem('lang', 'EN');
            setLang.text('AR');
            alert('Language changed to English');
        }
    });
});