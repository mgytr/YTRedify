setTimeout((()=>{
    
document.querySelectorAll('link[ref=icon]').forEach((elem)=>{elem.remove()});
let iconelem = document.createElement('link')
iconelem.rel = 'icon'
iconelem.href = 'https://i.ibb.co/6XSMdP9/origyticon.png'
document.body.appendChild(iconelem)
if (!document.querySelector('style#redifycss')) {
    let css = document.createElement('style');
    css.id = 'redifycss';
    document.body.appendChild(css);
    css.textContent = `
    /* -- Progress bar and notifications -- */
    .yt-spec-icon-badge-shape__badge, .YtProgressBarLineProgressBarPlayed, div#overlays.style-scope.ytd-thumbnail ytd-thumbnail-overlay-resume-playback-renderer.style-scope.ytd-thumbnail div#progress.style-scope.ytd-thumbnail-overlay-resume-playback-renderer, .ytp-play-progress {
        background: #FF0000 !important;
    }

    /* -- YouTube Logo and Shorts Logo -- */
    html body ytd-app div#content.style-scope.ytd-app div#masthead-container.style-scope.ytd-app ytd-masthead#masthead.chunked.masthead-finish div#container.style-scope.ytd-masthead div#start.style-scope.ytd-masthead ytd-topbar-logo-renderer#logo.style-scope.ytd-masthead a#logo.yt-simple-endpoint.style-scope.ytd-topbar-logo-renderer div.style-scope.ytd-topbar-logo-renderer ytd-logo.style-scope.ytd-topbar-logo-renderer yt-icon#logo-icon.style-scope.ytd-logo span.yt-icon-shape.style-scope.yt-icon.yt-spec-icon-shape div svg#yt-ringo2-svg_yt19 g:nth-child(1) path:nth-child(1),
    yt-icon#icon span.yt-icon-shape.style-scope.yt-icon.yt-spec-icon-shape div svg path:nth-child(1) {
        fill: #FF0000 !important;
    }

    `;
}
setInterval(()=>{
    document.querySelectorAll('.ytp-cued-thumbnail-overlay:not(.ytredify)').forEach(
        (elem) => {
            elem.classList.add('ytredify')
            elem.addEventListener('mouseover', ()=>{
                document.querySelector('svg path.ytp-large-play-button-bg').style.fill = '#FF0000'
                document.querySelector('svg path.ytp-large-play-button-bg').style.fillOpacity = '1'

            })
            elem.addEventListener('mouseout', ()=>{
                document.querySelector('svg path.ytp-large-play-button-bg').style.removeProperty('fill')
                document.querySelector('svg path.ytp-large-play-button-bg').style.removeProperty('fill-opacity')
                
            })
        }
    )
    
    
}, 450)
}), 250)