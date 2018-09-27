(function(win) {
    let doc = win.document;
    let docEl = doc.documentElement;
    let tid;

    function refreshRem() {
        // docEl.style.width =
        let width = docEl.getBoundingClientRect().width;
        let rem = width / 7.5; // 将屏幕宽度分成7.5份， 1份为1rem
        console.log(width);
        console.log(rem);
        docEl.style.fontSize = rem + 'px';
        console.log(0.14*rem);
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);

    refreshRem();
})(window);



