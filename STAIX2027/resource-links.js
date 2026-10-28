/*
 * STAI-X 2027 shared volunteers and external resources
 * To enable a resource, replace its url: null with the confirmed 2027 URL.
 * Every link with the matching data-resource key will update automatically.
 * Keep previousUrl for reference only; it is never used as a destination.
 * With url: null (or JavaScript disabled), links open not-available.html.
 */
(function () {
    // Edit this list to update every Volunteers section.
    const volunteers = [
        'Yuhan Geng (University of Michigan)',
        'Zhiqiu Xia (Rutgers University)',
        'Ling Chang (UT MD Anderson Cancer Center)',
        'Jiahe Shen (UT MD Anderson Cancer Center)',
        'Siyuan Ping (Indiana University School of Medicine)',
        'Minghao Zhou (Indiana University School of Medicine)'
    ];

    const resources = {
        'paper-submission': {
            label: 'Paper submission',
            url: null,
            previousUrl: 'https://openreview.net/group?id=STAI-X/2026/Conference'
        },
        'poster-submission': {
            label: 'Poster submission',
            url: null,
            previousUrl: 'https://openreview.net/group?id=STAI-X/2026/Poster_Track'
        },
        'latex-template': {
            label: 'LaTeX template download',
            url: null,
            previousUrl: 'assets/STAIX_2026_Template.zip'
        },
        'overleaf-template': {
            label: 'Overleaf template',
            url: null,
            previousUrl: 'https://www.overleaf.com/latex/templates/staix-2026-template/mnzwjfxckrrp'
        },
        'challenge-registration': {
            label: 'Challenge team registration',
            url: null,
            previousUrl: 'https://forms.gle/S25CpcJfP3EdfzjG9'
        },
        'challenge-competition': {
            label: 'Challenge competition',
            url: null,
            previousUrl: 'https://www.kaggle.com/t/117f935f903c610c7c6162325bd62288'
        },
        'challenge-rules': {
            label: 'Challenge competition rules',
            url: null,
            previousUrl: 'https://www.dropbox.com/scl/fi/1m4lu2j3shiwu4wq66vn1/STAI-X_Challenge_2026_Rules.docx?rlkey=dt3hqejmrhhpvjkaplsxjvg0e&dl=0'
        }
    };

    document.querySelectorAll('[data-volunteers]').forEach(function (section) {
        volunteers.forEach(function (volunteer) {
            const entry = document.createElement('p');
            entry.textContent = volunteer;
            section.appendChild(entry);
        });
    });

    document.querySelectorAll('a[data-resource]').forEach(function (link) {
        const key = link.getAttribute('data-resource');
        const resource = resources[key];
        if (resource) {
            link.setAttribute('href', resource.url || 'not-available.html?resource=' + encodeURIComponent(key));
        }
    });

    const label = document.getElementById('resource-name');
    const key = new URLSearchParams(window.location.search).get('resource');
    if (label && Object.prototype.hasOwnProperty.call(resources, key)) {
        label.textContent = resources[key].label;
    }
}());
