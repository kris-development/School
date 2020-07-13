const path = "";

webix.ui({
    view: "window",
    head: "Video",
    body: {
        view: "video", id: "vd",
        src: "http://cdn.webix.com/demodata/movie.mp4"
    },
    position: "center",
    width: 260,
    height: 240,
    move: true
}).show();

setTimeout(function () {
    const video = $$("vd").getVideo();
    video.setAttribute('src', 'http://media.w3.org/2010/05/sintel/trailer.mp4');
}, 1000);