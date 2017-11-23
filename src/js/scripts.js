function goBack() {
    window.history.back();
}

$(document).ready(function() {
    var setLang = $('#lanChange');
    var url = window.location.href;
    //var pagePart = url.split('/');
    var pageName = url.split('.');
    console.log(pageName[0]);
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
            window.location.href = pageName[0] + '-ar.html';
        } else if (localStorage.getItem('lang') == 'AR') {
            localStorage.setItem('lang', 'EN');
            window.location.href = pageName[0].split('-')[0] + '.html';
        }
    });
});