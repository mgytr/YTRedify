(()=>{

document.querySelectorAll('link[ref=icon]').forEach((elem)=>{elem.remove()});
let iconelem = document.createElement('link')
iconelem.rel = 'icon'
iconelem.href = 'https://i.ibb.co/6XSMdP9/origyticon.png'
document.body.appendChild(iconelem)

let css = document.createElement('style');
css.id = 'redifycss';
document.body.appendChild(css);
css.textContent = `

/* -- Progress bar and notifications -- */
.YtProgressBarLineProgressBarPlayed, .yt-spec-icon-badge-shape__badge, .YtProgressBarLineProgressBarPlayed, div#overlays.style-scope.ytd-thumbnail ytd-thumbnail-overlay-resume-playback-renderer.style-scope.ytd-thumbnail div#progress.style-scope.ytd-thumbnail-overlay-resume-playback-renderer, .ytp-play-progress {
    background: #FF0000 !important;
}

/* -- YouTube Logo and Shorts Logo -- */
#yt-ringo2-svg_yt21 g:nth-child(1) path:nth-child(1),
yt-icon.style-scope.ytd-reel-shelf-renderer svg path:nth-child(1), yt-icon.style-scope.ytd-rich-shelf-renderer svg path:nth-child(1)
{
    fill: #FF0000 !important;
}

/* -- YouTube logo in description, cant change the src with just css, so using contrast -- */
img[src="https://www.gstatic.com/youtube/img/watch/yt_favicon_ringo2.png"] {
    filter: contrast(4);
}
`;

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
})()