// ১. রাইট ক্লিক সম্পূর্ণ বন্ধ করা
document.addEventListener('contextmenu', e => {
    e.preventDefault();
    return false;
});

// ২. টেক্সট সিলেকশন বা মাউস দিয়ে ড্র্যাগ করা বন্ধ করা
document.addEventListener('selectstart', e => {
    e.preventDefault();
    return false;
});

// ৩. কিবোর্ড শর্টকাট (Ctrl+C, Ctrl+A, Ctrl+V, F12, Ctrl+U) বন্ধ করা
document.onkeydown = function(e) {
    // F12 key
    if (e.keyCode == 123) return false;

    // Ctrl + Shift + I (Inspect)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;

    // Ctrl + Shift + J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;

    // Ctrl + U (View Source)
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;

    // Ctrl + A (Select All)
    if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) return false;

    // Ctrl + C (Copy)
    if (e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) return false;

    // Ctrl + V (Paste)
    if (e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)) return false;

    // Ctrl + S (Save Page)
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) return false;
};

// ৪. সিএসএস দিয়েও সিলেকশন বন্ধ করা (জাভাস্ক্রিপ্ট লোড হওয়ার আগেই কাজ করবে)
const style = document.createElement('style');
style.innerHTML = `
    * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
    }
    input, textarea {
        user-select: text !important;
    }
`;
document.head.appendChild(style);